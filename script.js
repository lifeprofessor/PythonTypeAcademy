// ===== 전역 에러 핸들러 =====
window.addEventListener('error', function(e) {
    console.error('❌ 전역 JavaScript 에러:', e.error);
    console.error('파일:', e.filename, '라인:', e.lineno, '컬럼:', e.colno);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('❌ 처리되지 않은 Promise 거부:', e.reason);
});

// ===== 앱 상태 관리 =====
const AppState = {
    currentScreen: 'main-menu',
    currentDifficulty: null,
    currentLength: null, // short, medium, long
    currentCode: null,
    gameSession: null,
    gameTimer: null,
    startTime: null,
    pyodide: null,
    gameData: {
        wpm: 0,
        accuracy: 100,
        errors: 0,
        timeElapsed: 0,
        correctChars: 0,
        totalChars: 0
    }
};

// ===== 의존성 확인 함수 =====
function waitForDependencies() {
    return new Promise((resolve) => {
        const checkDependencies = () => {
            if (window.codeManager && 
                window.DifficultyDescriptions && 
                window.CategoryDescriptions) {
                console.log('✅ 모든 의존성이 로드되었습니다.', {
                    codeManager: !!window.codeManager,
                    DifficultyDescriptions: !!window.DifficultyDescriptions,
                    CategoryDescriptions: !!window.CategoryDescriptions
                });
                resolve();
            } else {
                console.log('⏳ 의존성 로딩 대기 중...', {
                    codeManager: !!window.codeManager,
                    DifficultyDescriptions: !!window.DifficultyDescriptions,
                    CategoryDescriptions: !!window.CategoryDescriptions
                });
                setTimeout(checkDependencies, 100);
            }
        };
        checkDependencies();
    });
}

// ===== Pyodide 초기화 =====
async function initPyodide() {
    if (!AppState.pyodide) {
        try {
            // Pyodide가 로드되었는지 확인
            if (typeof loadPyodide === 'undefined') {
                throw new Error('Pyodide 라이브러리가 로드되지 않았습니다.');
            }
            
            console.log("🔄 Pyodide 초기화 중...");
            AppState.pyodide = await loadPyodide();
            console.log("✅ Pyodide가 성공적으로 로드되었습니다.");
        } catch (error) {
            console.error("❌ Pyodide 로드 실패:", error);
            AppState.pyodide = null;
        }
    }
    return AppState.pyodide;
}

// ===== 향상된 라이브러리 설치 함수 =====
async function installRequiredPackages(code) {
    const pyodide = AppState.pyodide;
    if (!pyodide) return;

    // 코드에서 import문 분석 (정규식 개선)
    const importRegex = /(?:^|\n)\s*(?:import\s+([a-zA-Z0-9_]+)|from\s+([a-zA-Z0-9_]+))/g;
    const imports = [];
    let match;
    
    while ((match = importRegex.exec(code)) !== null) {
        const packageName = match[1] || match[2];
        if (packageName) {
            imports.push(packageName);
        }
    }

    const packageMap = {
        'pandas': 'pandas',
        'numpy': 'numpy', 
        'matplotlib': 'matplotlib',
        'seaborn': 'seaborn',
        'sklearn': 'scikit-learn',
        'scipy': 'scipy',
        'plotly': 'plotly'
    };

    const packagesToInstall = [...new Set(imports.filter(pkg => packageMap[pkg]))];

    if (packagesToInstall.length > 0) {
        console.log(`📦 필요한 패키지들을 설치 중: ${packagesToInstall.join(', ')}`);
        
        // 사용자에게 설치 중임을 알림
        showInstallationProgress(packagesToInstall);
        
        try {
            // micropip 설치
            await pyodide.loadPackage("micropip");
            const micropip = pyodide.pyimport("micropip");
            
            // 각 패키지 설치
            for (const pkg of packagesToInstall) {
                console.log(`🔧 ${pkg} 설치 중...`);
                updateInstallationProgress(pkg, 'installing');
                await micropip.install(packageMap[pkg]);
                console.log(`✅ ${pkg} 설치 완료`);
                updateInstallationProgress(pkg, 'completed');
            }
            
            hideInstallationProgress();
        } catch (error) {
            console.error("❌ 패키지 설치 실패:", error);
            hideInstallationProgress();
            throw error;
        }
    }
}

// ===== 설치 진행 상황 표시 함수들 =====
function showInstallationProgress(packages) {
    // 설치 진행 상황을 보여주는 UI 요소 생성
    const progressDiv = document.createElement('div');
    progressDiv.id = 'package-installation-progress';
    progressDiv.innerHTML = `
        <div class="installation-overlay">
            <div class="installation-modal">
                <div class="installation-header">
                    <i class="fas fa-download"></i>
                    <h3>라이브러리 설치 중...</h3>
                </div>
                <div class="installation-content">
                    <p>필요한 라이브러리들을 자동으로 설치하고 있습니다:</p>
                    <ul id="installation-list">
                        ${packages.map(pkg => `
                            <li id="install-${pkg}">
                                <i class="fas fa-spinner fa-spin"></i>
                                <span>${pkg}</span>
                                <span class="install-status">대기 중...</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(progressDiv);
}

function updateInstallationProgress(pkg, status) {
    const listItem = document.getElementById(`install-${pkg}`);
    if (listItem) {
        const icon = listItem.querySelector('i');
        const statusText = listItem.querySelector('.install-status');
        
        if (status === 'installing') {
            icon.className = 'fas fa-spinner fa-spin';
            statusText.textContent = '설치 중...';
        } else if (status === 'completed') {
            icon.className = 'fas fa-check-circle';
            statusText.textContent = '완료';
            listItem.style.color = '#4CAF50';
        }
    }
}

function hideInstallationProgress() {
    const progressDiv = document.getElementById('package-installation-progress');
    if (progressDiv) {
        setTimeout(() => {
            progressDiv.remove();
        }, 1000);
    }
}

// ===== 파이썬 코드 실행 함수 =====
async function executePythonCode(code) {
    try {
        // Pyodide 사용 가능 여부 확인
        if (typeof loadPyodide === 'undefined') {
            return { 
                success: false, 
                error: "코드 실행 엔진이 로드되지 않았습니다. 인터넷 연결을 확인해주세요." 
            };
        }

        const pyodide = await initPyodide();
        if (!pyodide) {
            return { 
                success: false, 
                error: "파이썬 실행 환경을 초기화할 수 없습니다." 
            };
        }

        console.log("🔄 파이썬 코드 실행 중...");

        // 필요한 패키지 자동 설치
        await installRequiredPackages(code);

        // 출력을 캡처하기 위한 설정
        pyodide.runPython(`
import sys
from io import StringIO
old_stdout = sys.stdout
sys.stdout = mystdout = StringIO()
        `);

        // 사용자 코드 실행
        pyodide.runPython(code);

        // 출력 결과 가져오기
        const output = pyodide.runPython(`
result = mystdout.getvalue()
sys.stdout = old_stdout
result
        `);

        console.log("✅ 파이썬 코드 실행 완료");
        return { 
            success: true, 
            output: output || "✅ 코드가 성공적으로 실행되었습니다.\n(출력 내용이 없습니다)" 
        };
    } catch (error) {
        console.error("❌ 파이썬 코드 실행 실패:", error);
        
        // 에러 메시지 한국어로 번역
        let errorMessage = error.message;
        if (errorMessage.includes("SyntaxError")) {
            errorMessage = "구문 오류: 코드 문법을 확인해주세요.";
        } else if (errorMessage.includes("NameError")) {
            errorMessage = "이름 오류: 정의되지 않은 변수나 함수가 있습니다.";
        } else if (errorMessage.includes("IndentationError")) {
            errorMessage = "들여쓰기 오류: 들여쓰기를 확인해주세요.";
        } else if (errorMessage.includes("ModuleNotFoundError")) {
            errorMessage = "모듈 오류: 필요한 라이브러리를 설치 중입니다. 잠시 후 다시 시도해주세요.";
        }
        
        return { 
            success: false, 
            error: `❌ 실행 오류: ${errorMessage}` 
        };
    }
}

// ===== 유틸리티 함수 =====

// 레벨별 대표 예제 선택 함수
function getRepresentativeCodesByLevel(allCodes) {
    const levelGroups = {};
    
    // 레벨별로 그룹화
    allCodes.forEach(code => {
        const level = code.levelGroup || 1;
        if (!levelGroups[level]) {
            levelGroups[level] = [];
        }
        levelGroups[level].push(code);
    });
    
    // 각 레벨에서 첫 번째 예제만 선택
    const representativeCodes = [];
    const sortedLevels = Object.keys(levelGroups).sort((a, b) => parseInt(a) - parseInt(b));
    
    sortedLevels.forEach(level => {
        const codesInLevel = levelGroups[level];
        // 첫 번째 예제를 대표로 선택
        representativeCodes.push(codesInLevel[0]);
    });
    
    return representativeCodes;
}

function showScreen(screenId) {
    console.log(`🔄 화면 전환 시도: ${AppState.currentScreen} → ${screenId}`);
    
    try {
        // matplotlib 그래프 요소들 제거 (간단하게!)
        document.querySelectorAll('[id^="matplotlib_"]').forEach(el => el.remove());
        
        // 모든 화면 숨기기
        const allScreens = document.querySelectorAll('.screen');
        console.log(`📱 총 ${allScreens.length}개의 화면 발견`);
        
        allScreens.forEach(screen => {
            screen.classList.remove('active');
        });
        
        // 요청된 화면 표시
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            AppState.currentScreen = screenId;
            console.log(`✅ 화면 전환 완료: ${screenId}`);
        } else {
            console.error(`❌ 화면을 찾을 수 없습니다: ${screenId}`);
            console.log('📋 사용 가능한 화면들:');
            allScreens.forEach(screen => {
                console.log(`  - ${screen.id}`);
            });
        }
    } catch (error) {
        console.error(`❌ showScreen(${screenId}) 실행 중 오류:`, error);
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateProgressElement(elementId, value) {
    try {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = value;
        } else {
            console.warn(`⚠️ 진행률 요소 '${elementId}'를 찾을 수 없습니다.`);
        }
    } catch (error) {
        console.error(`❌ 진행률 업데이트 실패 (${elementId}):`, error);
    }
}

function generateSessionId() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 9);
    return `session_${timestamp}_${random}`;
}

// ===== 로컬 저장소 관리 =====
class StorageManager {
    static saveGameRecord(difficulty, codeId, gameData) {
        const record = {
            id: `${difficulty}_${codeId}`,
            difficulty: difficulty,
            codeId: codeId,
            wpm: gameData.wpm,
            accuracy: gameData.accuracy,
            errors: gameData.errors,
            timeElapsed: gameData.timeElapsed,
            timestamp: new Date().toISOString(),
            completed: gameData.accuracy >= 80 // 80% 이상이면 완료
        };
        
        let allRecords = JSON.parse(localStorage.getItem('pythonTypingRecords') || '[]');
        
        // 기존 기록 찾기
        const existingIndex = allRecords.findIndex(r => r.id === record.id);
        if (existingIndex >= 0) {
            // 더 좋은 기록만 업데이트
            const existing = allRecords[existingIndex];
            if (record.wpm > existing.wpm || (record.wpm === existing.wpm && record.accuracy > existing.accuracy)) {
                allRecords[existingIndex] = record;
            }
        } else {
            allRecords.push(record);
        }
        
        // 최근 200개만 유지
        if (allRecords.length > 200) {
            allRecords = allRecords.slice(-200);
        }
        
        localStorage.setItem('pythonTypingRecords', JSON.stringify(allRecords));
        
        // 진도 업데이트
        this.updateProgress(difficulty, codeId, record.completed);
    }
    
    static updateProgress(difficulty, codeId, completed) {
        let progress = JSON.parse(localStorage.getItem('gameProgress') || '{}');
        
        if (!progress[difficulty]) {
            progress[difficulty] = {};
        }
        
        if (!progress[difficulty][codeId] || completed) {
            progress[difficulty][codeId] = {
                completed: completed,
                timestamp: new Date().toISOString()
            };
        }
        
        localStorage.setItem('gameProgress', JSON.stringify(progress));
    }
    
    static checkUnlockLevels() {
        // 모든 레벨이 처음부터 해금되어 있으므로 별도 해금 로직은 필요하지 않습니다
        console.log('📚 모든 레벨이 해금되어 있습니다');
    }
    
    // showUnlockNotification 함수는 모든 레벨이 해금되어 더 이상 필요하지 않습니다
    
    static getProgress(difficulty) {
        // 새로운 구조에서는 getTotalProgress 사용
        return getTotalProgress(difficulty);
    }
    
    static getAllStats() {
        const allRecords = JSON.parse(localStorage.getItem('pythonTypingRecords') || '[]');
        
        if (allRecords.length === 0) {
            return {
                totalGames: 0,
                averageWPM: 0,
                averageAccuracy: 0,
                bestWPM: 0,
                bestAccuracy: 0
            };
        }
        
        const totalWPM = allRecords.reduce((sum, r) => sum + r.wpm, 0);
        const totalAccuracy = allRecords.reduce((sum, r) => sum + r.accuracy, 0);
        
        return {
            totalGames: allRecords.length,
            averageWPM: Math.round(totalWPM / allRecords.length),
            averageAccuracy: Math.round(totalAccuracy / allRecords.length),
            bestWPM: Math.max(...allRecords.map(r => r.wpm)),
            bestAccuracy: Math.max(...allRecords.map(r => r.accuracy))
        };
    }
}

// ===== 게임 로직 =====
class TypingGame {
    constructor() {
        this.targetEditor = null;
        this.userEditor = null;
        this.scrollSyncTimeout = null;
        this.reset();
    }
    
    reset() {
        this.startTime = null;
        this.currentIndex = 0;
        this.errors = 0;
        this.correctChars = 0;
        this.isComplete = false;
        this.targetText = '';
        this.handleInputBound = null;
        this.handleKeyDownBound = null;
        this.errorTimer = null;
        this.targetEditorDecorations = null;
        this.isPaused = false; // 일시정지 상태 초기화
        this.pausedTime = 0; // 일시정지된 총 시간
        this.isEditingAfterError = false; // 오류 수정 중 상태 초기화
        
        // 스크롤 동기화 타이머 정리
        if (this.scrollSyncTimeout) {
            clearTimeout(this.scrollSyncTimeout);
            this.scrollSyncTimeout = null;
        }
        
        // 기존 팝업 제거
        this.hideErrorPopup();
        
        // 커스텀 에디터 정리
        this.targetEditor = null;
        this.userEditor = null;
        
        // 에디터 컨테이너 정리
        const targetContainer = document.getElementById('target-code-editor');
        const userContainer = document.getElementById('user-input-editor');
        
        if (targetContainer) targetContainer.innerHTML = '';
        if (userContainer) userContainer.innerHTML = '';
        
        console.log('🧹 게임 상태 초기화 완료');
    }
    
    initializeEditors() {
        console.log('🔧 커스텀 코드 에디터 초기화 중...');
        
        // 타겟 코드 에디터 (읽기 전용)
        this.initializeTargetEditor();
        
        // 사용자 입력 에디터
        this.initializeUserEditor();
        
        console.log('✅ 커스텀 코드 에디터 초기화 완료');
    }
    
    initializeTargetEditor() {
        const targetContainer = document.getElementById('target-code-editor');
        if (!targetContainer) return;
        
        // 커스텀 코드 에디터 HTML 생성
        targetContainer.innerHTML = `
            <div class="custom-editor target-editor">
                <div class="editor-header">
                    <div class="editor-tabs">
                        <div class="editor-tab active">
                            <i class="fab fa-python"></i>
                            <span>target.py</span>
                        </div>
                    </div>
                </div>
                <div class="editor-content">
                    <div class="line-numbers" id="target-line-numbers"></div>
                    <pre class="code-content" id="target-code-content"></pre>
                </div>
            </div>
        `;
        
        this.targetEditor = {
            setValue: (value) => {
                this.updateTargetCode(value);
            },
            getValue: () => this.targetText
        };
    }
    
    initializeUserEditor() {
        const userContainer = document.getElementById('user-input-editor');
        if (!userContainer) return;
        
        // 커스텀 코드 에디터 HTML 생성
        userContainer.innerHTML = `
            <div class="custom-editor user-editor">
                <div class="editor-header">
                    <div class="editor-tabs">
                        <div class="editor-tab active">
                            <i class="fab fa-python"></i>
                            <span>typing.py</span>
                        </div>
                    </div>
                </div>
                <div class="editor-content">
                    <div class="line-numbers" id="user-line-numbers"></div>
                    <textarea 
                        class="code-input" 
                        id="user-code-input"
                        placeholder="여기에 코드를 입력하세요..."
                        spellcheck="false"
                        autocomplete="off"
                        autocorrect="off"
                        autocapitalize="off"
                    ></textarea>
                </div>
            </div>
        `;
        
        // 사용자 입력 textarea 설정
        const textarea = document.getElementById('user-code-input');
        if (textarea) {
            // 탭 키 처리
            textarea.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    e.preventDefault();
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    textarea.value = textarea.value.substring(0, start) + '    ' + textarea.value.substring(end);
                    textarea.selectionStart = textarea.selectionEnd = start + 4;
                }
                
                // Ctrl+V 붙여넣기 방지
                if (e.ctrlKey && e.key === 'v') {
                    e.preventDefault();
                }
            });
            
            // 입력 이벤트
            textarea.addEventListener('input', () => {
                this.handleEditorChange();
                this.updateLineNumbers();
            });
            
            // 커서 이동 이벤트 (클릭, 방향키 등)
            textarea.addEventListener('click', () => {
                this.updateLineHighlighting();
            });
            
            textarea.addEventListener('keyup', (e) => {
                // 방향키, Home, End, Page Up/Down 등 커서 이동키
                if (e.key.includes('Arrow') || e.key === 'Home' || e.key === 'End' || 
                    e.key === 'PageUp' || e.key === 'PageDown') {
                    this.updateLineHighlighting();
                }
            });
            

            
            textarea.focus();
        }
        
        this.userEditor = {
            setValue: (value) => {
                if (textarea) {
                    textarea.value = value;
                    this.updateLineNumbers();
                }
            },
            getValue: () => textarea ? textarea.value : '',
            focus: () => textarea && textarea.focus()
        };
    }

    updateTargetCode(code) {
        const codeContent = document.getElementById('target-code-content');
        const lineNumbers = document.getElementById('target-line-numbers');
        
        if (codeContent && lineNumbers) {
            // 코드 내용 업데이트 (플레인 텍스트로 표시)
            codeContent.textContent = code;
            
            // 라인 번호 업데이트
            const lines = code.split('\n');
            let lineNumbersHTML = '';
            for (let i = 1; i <= lines.length; i++) {
                lineNumbersHTML += `<div class="line-number" data-line="${i}">${i}</div>`;
            }
            lineNumbers.innerHTML = lineNumbersHTML;
            
            // 에디터 높이를 코드 줄 수에 맞춰 동적으로 설정
            this.adjustEditorHeights(lines.length);
            
            console.log('✅ 타겟 코드 업데이트 완료 (플레인 텍스트)');
        }
    }
    
    adjustEditorHeights(lineCount) {
        // 반응형 화면 크기에 따른 line-height 계산
        const screenWidth = window.innerWidth;
        let lineHeight, padding;
        
        if (screenWidth <= 480) {
            lineHeight = 20; // 모바일 (약간 증가)
            padding = 20; // 더 넉넉한 패딩
        } else if (screenWidth <= 768) {
            lineHeight = 22; // 태블릿 (약간 증가)
            padding = 25; // 더 넉넉한 패딩
        } else {
            lineHeight = 24; // 데스크톱 (약간 증가)
            padding = 30; // 더 넉넉한 패딩
        }
        
        const headerHeight = 40; // 에디터 헤더 높이
        const extraPadding = 50; // 추가 여백 (스크롤 여유 공간)
        const totalHeight = headerHeight + padding + (lineHeight * lineCount) + extraPadding;
        
        // 최소 높이를 더 낮게 설정하여 코드 길이에 따라 동적으로 조절
        const minHeight = Math.max(totalHeight, 150);
        
        // 타겟 에디터와 사용자 에디터 높이 동기화
        const targetEditor = document.querySelector('#target-code-editor .custom-editor');
        const userEditor = document.querySelector('#user-input-editor .custom-editor');
        const targetContent = document.getElementById('target-code-content');
        const userInput = document.getElementById('user-code-input');
        const targetLineNumbers = document.getElementById('target-line-numbers');
        const userLineNumbers = document.getElementById('user-line-numbers');
        
        if (targetEditor) {
            targetEditor.style.height = `${minHeight}px`;
            targetEditor.style.maxHeight = 'none'; // 최대 높이 제한 제거
        }
        if (userEditor) {
            userEditor.style.height = `${minHeight}px`;
            userEditor.style.maxHeight = 'none'; // 최대 높이 제한 제거
        }
        
        const contentHeight = minHeight - headerHeight;
        if (targetContent) {
            targetContent.style.height = `${contentHeight}px`;
            targetContent.style.maxHeight = 'none'; // 최대 높이 제한 제거
            targetContent.style.overflowY = 'visible'; // 스크롤 제거
        }
        if (userInput) {
            userInput.style.height = `${contentHeight}px`;
            userInput.style.maxHeight = 'none'; // 최대 높이 제한 제거
            userInput.style.overflowY = 'visible'; // 스크롤 제거
        }
        if (targetLineNumbers) {
            targetLineNumbers.style.height = `${contentHeight}px`;
            targetLineNumbers.style.maxHeight = 'none'; // 최대 높이 제한 제거
            targetLineNumbers.style.overflowY = 'visible'; // 스크롤 제거
        }
        if (userLineNumbers) {
            userLineNumbers.style.height = `${contentHeight}px`;
            userLineNumbers.style.maxHeight = 'none'; // 최대 높이 제한 제거
            userLineNumbers.style.overflowY = 'visible'; // 스크롤 제거
        }
        
        console.log(`📏 에디터 높이 조정: ${lineCount}줄 -> ${minHeight}px (컨텐츠: ${contentHeight}px, 화면 너비: ${screenWidth}px)`);
    }
    
    updateLineNumbers() {
        const textarea = document.getElementById('user-code-input');
        const lineNumbers = document.getElementById('user-line-numbers');
        
        if (!textarea || !lineNumbers) return;
        
        const lines = textarea.value.split('\n');
        let lineNumbersHTML = '';
        
        for (let i = 1; i <= lines.length; i++) {
            lineNumbersHTML += `<div class="line-number" data-line="${i}">${i}</div>`;
        }
        
        lineNumbers.innerHTML = lineNumbersHTML;
        
        // 사용자 입력이 늘어나면 타겟 코드와 동일한 높이로 유지
        const targetLines = this.targetText.split('\n').length;
        const userLines = lines.length;
        const maxLines = Math.max(targetLines, userLines);
        this.adjustEditorHeights(maxLines);
        
        this.updateLineHighlighting();
    }
    
    updateLineHighlighting() {
        const textarea = document.getElementById('user-code-input');
        const userLineNumbers = document.getElementById('user-line-numbers');
        const targetLineNumbers = document.getElementById('target-line-numbers');
        
        if (!textarea || !userLineNumbers || !targetLineNumbers) return;
        
        // 사용자 입력 텍스트 및 현재 커서 위치 가져오기
        const userText = textarea.value;
        const cursorPos = textarea.selectionStart;
        const textBeforeCursor = userText.substring(0, cursorPos);
        const currentLineNumber = textBeforeCursor.split('\n').length - 1; // 0-based index
        
        const targetLines = this.targetText.split('\n');
        const userLines = userText.split('\n');
        
        // 타겟 에디터 라인 상태 업데이트
        const targetLineElems = targetLineNumbers.querySelectorAll('.line-number');
        targetLineElems.forEach((lineElem, index) => {
            const targetLine = targetLines[index] || '';
            const userLine = userLines[index] || '';
            
            // 기존 클래스 제거
            lineElem.classList.remove('line-correct', 'line-error', 'line-current', 'line-incomplete');
            
            if (index < userLines.length) {
                if (userLine === targetLine) {
                    // 완전히 일치하는 라인
                    lineElem.classList.add('line-correct');
                    lineElem.setAttribute('data-status', '✓');
                } else if (index === currentLineNumber) {
                    // 현재 타이핑 중인 라인
                    lineElem.classList.add('line-current');
                    lineElem.setAttribute('data-status', '►');
                } else {
                    // 오류가 있는 라인
                    lineElem.classList.add('line-error');
                    lineElem.setAttribute('data-status', '✗');
                }
            } else if (index === currentLineNumber && index === userLines.length) {
                // 새로운 라인을 시작하려는 경우
                lineElem.classList.add('line-current');
                lineElem.setAttribute('data-status', '►');
            } else {
                // 아직 입력하지 않은 라인
                lineElem.classList.add('line-incomplete');
                lineElem.setAttribute('data-status', '○');
            }
        });
        
        console.log(`📍 현재 라인: ${currentLineNumber + 1}, 총 입력 라인: ${userLines.length}, 타겟 라인: ${targetLines.length}`);
    }
    
    syncScroll() {
        // 디바운싱으로 성능 개선
        if (this.scrollSyncTimeout) {
            clearTimeout(this.scrollSyncTimeout);
        }
        
        this.scrollSyncTimeout = setTimeout(() => {
            this.performScrollSync();
        }, 10); // 10ms 디바운싱
    }
    
    performScrollSync() {
        const textarea = document.getElementById('user-code-input');
        const userLineNumbers = document.getElementById('user-line-numbers');
        const targetLineNumbers = document.getElementById('target-line-numbers');
        const targetCodeContent = document.getElementById('target-code-content');
        
        if (!textarea) return;
        
        // 현재 스크롤 위치 가져오기
        const scrollTop = textarea.scrollTop;
        const scrollLeft = textarea.scrollLeft;
        
        // requestAnimationFrame으로 부드러운 스크롤 동기화
        requestAnimationFrame(() => {
            // 사용자 입력 영역의 라인 번호 동기화
            if (userLineNumbers) {
                userLineNumbers.scrollTop = scrollTop;
            }
            
            // 타겟 에디터의 라인 번호 동기화
            if (targetLineNumbers) {
                targetLineNumbers.scrollTop = scrollTop;
            }
            
            // 타겟 코드 내용 동기화
            if (targetCodeContent) {
                targetCodeContent.scrollTop = scrollTop;
                targetCodeContent.scrollLeft = scrollLeft;
            }
        });
    }
    
    syncScrollFromTarget() {
        // 디바운싱으로 성능 개선
        if (this.scrollSyncTimeout) {
            clearTimeout(this.scrollSyncTimeout);
        }
        
        this.scrollSyncTimeout = setTimeout(() => {
            this.performScrollSyncFromTarget();
        }, 10); // 10ms 디바운싱
    }
    
    performScrollSyncFromTarget() {
        const textarea = document.getElementById('user-code-input');
        const userLineNumbers = document.getElementById('user-line-numbers');
        const targetLineNumbers = document.getElementById('target-line-numbers');
        const targetCodeContent = document.getElementById('target-code-content');
        
        if (!targetCodeContent) return;
        
        // 타겟 코드의 현재 스크롤 위치 가져오기
        const scrollTop = targetCodeContent.scrollTop;
        const scrollLeft = targetCodeContent.scrollLeft;
        
        // requestAnimationFrame으로 부드러운 스크롤 동기화
        requestAnimationFrame(() => {
            // 사용자 입력 영역 동기화
            if (textarea) {
                textarea.scrollTop = scrollTop;
                textarea.scrollLeft = scrollLeft;
            }
            
            // 사용자 입력 영역의 라인 번호 동기화
            if (userLineNumbers) {
                userLineNumbers.scrollTop = scrollTop;
            }
            
            // 타겟 에디터의 라인 번호 동기화
            if (targetLineNumbers) {
                targetLineNumbers.scrollTop = scrollTop;
            }
        });
    }
    
    applySyntaxHighlighting(element) {
        if (!element) return;
        
        // 간단하고 안전한 구문 하이라이팅
        // 복잡한 파싱 대신 기본 텍스트 표시에 집중
        const code = element.textContent || '';
        
        // HTML 이스케이프하고 기본 스타일만 적용
        const escapedCode = this.escapeHtml(code);
        element.innerHTML = `<code>${escapedCode}</code>`;
        
        console.log('✅ 타겟 코드 표시 완료 (구문 하이라이팅 단순화)');
    }
    
    initializeFallbackEditor() {
        console.log('📝 기본 textarea 에디터를 사용합니다.');
        
        // 숨겨진 textarea 표시
        const userInput = document.getElementById('user-input');
        if (userInput) {
            userInput.style.display = 'block';
            userInput.style.width = '100%';
            userInput.style.height = '300px';
            userInput.style.fontFamily = 'Fira Code, monospace';
            userInput.style.fontSize = '14px';
            userInput.style.border = '2px solid #007acc';
            userInput.style.padding = '15px';
            userInput.style.borderRadius = '8px';
            userInput.style.backgroundColor = 'var(--bg-secondary)';
            userInput.style.color = 'var(--text-primary)';
            userInput.addEventListener('input', (e) => this.handleInput(e));
            userInput.addEventListener('keydown', (e) => this.handleKeyDown(e));
        }
    }
    
    start(code) {
        this.reset();
        
        // 코드 정규화: 불필요한 공백 제거 및 줄바꿈 통일
        const normalizedCode = this.normalizeCode(code);
        this.targetText = normalizedCode;
        this.isPaused = false; // 일시정지 상태 추가
        
        console.log('🎯 게임 시작 - 타겟 코드:', JSON.stringify(normalizedCode));
        
        // Monaco Editor 초기화
        this.initializeEditors();
        
        // 타겟 에디터에 코드 설정 (정규화된 코드 사용)
        if (this.targetEditor) {
            this.targetEditor.setValue(normalizedCode);
        }
        
        // 커스텀 에디터 업데이트 및 높이 조정
        this.updateTargetCode(normalizedCode);
        
        // 사용자 에디터 초기화
        if (this.userEditor) {
            this.userEditor.setValue('');
            this.userEditor.focus();
        } else {
            // 기본 textarea 사용시 포커스
            const userInput = document.getElementById('user-input');
            if (userInput) {
                userInput.value = '';
                userInput.focus();
            }
        }
        
        // 기존 textarea 업데이트 (호환성 유지)
        const userInput = document.getElementById('user-input');
        if (userInput) {
            userInput.value = '';
        }
        
        // 타이머 초기화 (00:00으로 표시)
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.textContent = '00:00';
        }
        
        // 초기 라인 하이라이트 (Monaco Editor 방식)
        this.highlightLines();
    }
    
    // 코드 정규화 함수 추가
    normalizeCode(code) {
        if (!code) return '';
        
        // 1. 각 줄의 끝 공백 제거
        // 2. Windows(\r\n), Mac(\r), Unix(\n) 줄바꿈을 Unix 스타일로 통일
        // 3. 마지막 빈 줄 제거
        return code
            .replace(/\r\n/g, '\n')  // Windows 줄바꿈을 Unix로
            .replace(/\r/g, '\n')    // Mac 줄바꿈을 Unix로
            .split('\n')             // 줄별로 분할
            .map(line => line.trimEnd())  // 각 줄의 끝 공백 제거
            .join('\n')              // 다시 합치기
            .replace(/\n+$/, '');    // 마지막 빈 줄들 제거
    }
    
    startTimer() {
        if (AppState.gameTimer) {
            clearInterval(AppState.gameTimer);
        }
        AppState.gameTimer = setInterval(() => {
            if (this.startTime && !this.isPaused) {
                const elapsed = Math.floor((Date.now() - this.startTime - this.pausedTime) / 1000);
                
                // 안전하게 타이머 업데이트
                const timerElement = document.getElementById('timer');
                if (timerElement) {
                    timerElement.textContent = formatTime(elapsed);
                }
                
                // 실시간 통계 업데이트
                this.updateStats();
            }
        }, 100);
    }
    
    // 타이머 일시정지
    pauseTimer() {
        if (!this.isPaused) {
            this.isPaused = true;
            this.pauseStartTime = Date.now();
            console.log('⏸️ 타이머 일시정지');
        }
    }
    
    // 타이머 재개
    resumeTimer() {
        if (this.isPaused) {
            this.pausedTime += Date.now() - this.pauseStartTime;
            this.isPaused = false;
            this.pauseStartTime = null;
            console.log('▶️ 타이머 재개');
        }
    }
    
    handleEditorChange() {
        if (this.isComplete) return;
        
        const rawUserText = this.userEditor.getValue();
        const normalizedUserText = this.normalizeCode(rawUserText);
        const targetText = this.targetText;
        
        console.log('✏️ 사용자 입력 변경:', JSON.stringify(rawUserText));
        console.log('✏️ 정규화된 사용자 입력:', JSON.stringify(normalizedUserText));
        
        // 첫 번째 입력 시 타이머 시작
        if (!this.startTime && rawUserText.length > 0) {
            this.startTime = Date.now();
            this.startTimer();
        }
        
        // 길이 제한 (원본 텍스트 길이 기준)
        if (rawUserText.length > targetText.length + 10) { // 여유분 추가
            this.userEditor.setValue(rawUserText.substring(0, targetText.length + 10));
            return;
        }
        
        // 기존 textarea 동기화 (호환성 유지)
        const userInputElement = document.getElementById('user-input');
        if (userInputElement) {
            userInputElement.value = rawUserText;
        }
        
        // 실시간 라인별 하이라이팅
        this.highlightLines();
        
        // 정규화된 텍스트로 완료 여부 검사
        this.checkFinalCompletion(normalizedUserText, targetText);
        
        // 실시간 통계 업데이트 (원본 텍스트 사용)
        this.updateStats();
    }
    
    highlightLines() {
        // 커스텀 에디터의 라인 하이라이팅은 updateLineHighlighting에서 처리
        this.updateLineHighlighting();
    }
    
    getStatusColor(lineClass) {
        switch (lineClass) {
            case 'line-correct': return '#48bb78';
            case 'line-error': return '#f56565';
            case 'line-current': return '#4299e1';
            case 'line-incomplete': return '#ed8936';
            default: return '#718096';
        }
    }
    
    handleInput(e) {
        // 기존 textarea 호환성을 위해 유지
        if (this.isComplete) return;
        
        const rawUserText = e.target.value;
        const normalizedUserText = this.normalizeCode(rawUserText);
        const targetText = this.targetText;
        
        console.log('✏️ textarea 입력 변경:', JSON.stringify(rawUserText));
        console.log('✏️ 정규화된 textarea 입력:', JSON.stringify(normalizedUserText));
        
        // 첫 번째 입력 시 타이머 시작
        if (!this.startTime && rawUserText.length > 0) {
            this.startTime = Date.now();
            this.startTimer();
        }
        
        // 길이 제한
        if (rawUserText.length > targetText.length + 10) { // 여유분 추가
            e.target.value = rawUserText.substring(0, targetText.length + 10);
            return;
        }
        
        // 실시간 하이라이팅 (원본 텍스트 사용)
        this.highlightText(rawUserText, targetText);
        
        // 정규화된 텍스트로 완료 여부 검사
        this.checkFinalCompletion(normalizedUserText, targetText);
    }
    
    handleKeyDown(e) {
        // 붙여넣기 방지
        if (e.ctrlKey && e.key === 'v') {
            e.preventDefault();
        }
        
        // Tab 키 처리
        if (e.key === 'Tab') {
            e.preventDefault();
            
            const textarea = e.target;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            
            // 탭 문자 삽입 (4개의 공백 사용)
            const tabChar = '    '; // 4개의 공백
            
            // 현재 텍스트의 앞부분 + 탭 + 뒷부분
            const beforeCursor = textarea.value.substring(0, start);
            const afterCursor = textarea.value.substring(end);
            
            // 새로운 값 설정
            textarea.value = beforeCursor + tabChar + afterCursor;
            
            // 커서 위치를 탭 문자 뒤로 이동
            textarea.selectionStart = textarea.selectionEnd = start + tabChar.length;
            
            // 입력 이벤트 트리거 (실시간 업데이트를 위해)
            textarea.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }
    
    highlightText(userText, targetText) {
        const codeDisplay = document.getElementById('target-code');
        
        // 요소가 존재하지 않으면 하이라이팅 건너뛰기
        if (!codeDisplay) {
            console.warn('⚠️ target-code 요소를 찾을 수 없습니다.');
            return;
        }
        
        let highlightedText = '';
        
        for (let i = 0; i < targetText.length; i++) {
            const targetChar = targetText[i];
            const userChar = userText[i];
            
            if (i < userText.length) {
                if (userChar === targetChar) {
                    highlightedText += `<span class="highlight-correct">${this.escapeHtml(targetChar)}</span>`;
                } else {
                    highlightedText += `<span class="highlight-error">${this.escapeHtml(targetChar)}</span>`;
                }
            } else if (i === userText.length) {
                highlightedText += `<span class="highlight-current">${this.escapeHtml(targetChar)}</span>`;
            } else {
                highlightedText += this.escapeHtml(targetChar);
            }
        }
        
        try {
            codeDisplay.innerHTML = highlightedText;
        } catch (error) {
            console.error('❌ 하이라이팅 적용 실패:', error);
        }
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    updateStats() {
        if (!this.startTime) return;
        
        // 사용자 입력 텍스트 가져오기
        let rawUserText = '';
        if (this.userEditor) {
            rawUserText = this.userEditor.getValue();
        } else {
            const userInput = document.getElementById('user-input');
            rawUserText = userInput ? userInput.value : '';
        }
        
        // 비교를 위해 정규화된 텍스트 사용
        const normalizedUserText = this.normalizeCode(rawUserText);
        
        const timeElapsed = Math.floor((Date.now() - this.startTime - this.pausedTime) / 1000);
        
        // 라인별 정확도 계산
        const targetLines = this.targetText.split('\n');
        const userLines = normalizedUserText.split('\n');
        
        let correctChars = 0;
        let errorCount = 0;
        let totalTypedChars = normalizedUserText.length;
        
        // 문자별 정확도 계산 (정규화된 텍스트 사용)
        for (let i = 0; i < normalizedUserText.length; i++) {
            if (normalizedUserText[i] === this.targetText[i]) {
                correctChars++;
            } else {
                errorCount++;
            }
        }
        
        // 라인별 완성도 계산
        let completedLines = 0;
        let totalLines = targetLines.length;
        
        for (let i = 0; i < targetLines.length; i++) {
            const targetLine = targetLines[i];
            const userLine = userLines[i] || '';
            
            if (userLine === targetLine) {
                completedLines++;
            }
        }
        
        // CPM 계산 (분당 타수 - 정확한 글자 수 기준)
        const wpm = timeElapsed > 0 ? Math.round((correctChars * 60) / timeElapsed) : 0;
        
        // 정확도 계산
        const accuracy = totalTypedChars > 0 ? Math.round((correctChars / totalTypedChars) * 100) : 100;
        
        // 게임 데이터 업데이트
        AppState.gameData = {
            wpm: wpm,
            accuracy: accuracy,
            errors: errorCount,
            timeElapsed: timeElapsed,
            correctChars: correctChars,
            totalChars: totalTypedChars,
            completedLines: completedLines,
            totalLines: totalLines,
            lineCompletion: Math.round((completedLines / totalLines) * 100)
        };
        
        // UI 업데이트 - 안전하게
        this.updateStatElement('wpm', wpm);
        this.updateStatElement('accuracy', accuracy);
        this.updateStatElement('errors', errorCount);
    }
    
    updateStatElement(elementId, value) {
        try {
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = value;
            } else {
                console.warn(`⚠️ 통계 요소 '${elementId}'를 찾을 수 없습니다.`);
            }
        } catch (error) {
            console.error(`❌ 통계 업데이트 실패 (${elementId}):`, error);
        }
    }
    
    completeGame() {
        this.isComplete = true;
        if (AppState.gameTimer) {
            clearInterval(AppState.gameTimer);
            AppState.gameTimer = null;
        }
        
        // 최종 통계 업데이트
        this.updateStats();
        
        // 기록 저장
        StorageManager.saveGameRecord(
            AppState.currentDifficulty,
            AppState.currentCode.id,
            AppState.gameData
        );
        
        // 결과 화면으로 전환
        setTimeout(() => {
            this.showResult();
        }, 1000);
    }
    
    async showResult() {
        const data = AppState.gameData;
        
        // 결과 아이콘 및 메시지 설정
        const resultIcon = document.getElementById('result-icon');
        const resultTitle = document.getElementById('result-title');
        const resultSubtitle = document.getElementById('result-subtitle');
        
        if (resultIcon && resultTitle && resultSubtitle) {
            if (data.accuracy >= 95) {
                resultIcon.innerHTML = '<i class="fas fa-trophy"></i>';
                resultIcon.style.background = 'var(--success-gradient)';
                resultTitle.textContent = '완벽해요! 🏆';
                resultSubtitle.textContent = '놀라운 정확도입니다!';
            } else if (data.accuracy >= 80) {
                resultIcon.innerHTML = '<i class="fas fa-star"></i>';
                resultIcon.style.background = 'var(--warning-gradient)';
                resultTitle.textContent = '잘했어요! ⭐';
                resultSubtitle.textContent = '좋은 성과입니다!';
            } else {
                resultIcon.innerHTML = '<i class="fas fa-redo"></i>';
                resultIcon.style.background = 'var(--secondary-gradient)';
                resultTitle.textContent = '다시 도전! 💪';
                resultSubtitle.textContent = '연습하면 더 잘할 수 있어요!';
            }
        } else {
            console.warn('⚠️ 결과 표시 요소를 일부 찾을 수 없습니다.');
        }
        
        // 통계 표시 - 안전하게
        this.updateResultStat('final-wpm', data.wpm);
        this.updateResultStat('final-accuracy', data.accuracy + '%');
        this.updateResultStat('final-lines', (data.lineCompletion || 0) + '%');
        this.updateResultStat('final-time', data.timeElapsed + 's');
        
        // 사용자가 입력한 코드 표시 (정규화된 버전)
        let rawUserInput = '';
        if (this.userEditor) {
            rawUserInput = this.userEditor.getValue();
        } else {
            const inputElement = document.getElementById('user-input');
            rawUserInput = inputElement ? inputElement.value : '';
        }
        
        // 결과 표시용으로는 정규화된 코드 사용
        const userInput = this.normalizeCode(rawUserInput);
        
        const codeDisplay = document.getElementById('user-code-display');
        const codePreview = document.getElementById('code-preview');
        
        if (codeDisplay) {
            // 코드 내용 설정
            codeDisplay.textContent = userInput;
            
            // 코드 포맷팅을 위한 스타일 적용
            codeDisplay.style.whiteSpace = 'pre-wrap';
            codeDisplay.style.wordBreak = 'break-word';
            codeDisplay.style.fontFamily = "'Fira Code', monospace";
            codeDisplay.style.fontSize = '1rem';
            codeDisplay.style.lineHeight = '1.6';
            codeDisplay.style.color = '#f7fafc';
        }
        
        if (codePreview) {
            // 코드 미리보기 컨테이너 스타일 강제 적용
            codePreview.style.maxHeight = 'none';
            codePreview.style.overflowY = 'visible';
            codePreview.style.height = 'auto';
        }
        
        // 결과 화면의 동일한 레벨 버튼 추가/업데이트
        await this.updateResultButtons();
        
        showScreen('result-screen');
        
        // 코드 실행
        await this.executeUserCode(userInput);
    }
    
    updateResultStat(elementId, value) {
        try {
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = value;
            } else {
                console.warn(`⚠️ 결과 통계 요소 '${elementId}'를 찾을 수 없습니다.`);
            }
        } catch (error) {
            console.error(`❌ 결과 통계 업데이트 실패 (${elementId}):`, error);
        }
    }
    
    async executeUserCode(code) {
        const loadingElement = document.getElementById('execution-loading');
        const outputElement = document.getElementById('result-output');
        const errorElement = document.getElementById('result-error');
        
        // 요소 존재 확인
        if (!loadingElement || !outputElement || !errorElement) {
            console.error('❌ 코드 실행 결과 표시 요소를 찾을 수 없습니다.');
            return;
        }
        
        // 초기 상태 설정
        loadingElement.style.display = 'flex';
        outputElement.style.display = 'none';
        errorElement.style.display = 'none';
        
        try {
            // 빈 코드 체크
            if (!code || code.trim() === '') {
                loadingElement.style.display = 'none';
                errorElement.textContent = '⚠️ 실행할 코드가 없습니다.';
                errorElement.style.display = 'block';
                return;
            }
            
            console.log('🔄 사용자 코드 실행 시도...');
            
            // 코드 실행
            const result = await executePythonCode(code);
            
            // 로딩 숨기기
            loadingElement.style.display = 'none';
            
            if (result.success) {
                // 성공적으로 실행됨
                outputElement.textContent = result.output;
                outputElement.style.display = 'block';
                console.log('✅ 코드 실행 결과 표시 완료');
            } else {
                // 에러 발생
                errorElement.textContent = result.error;
                errorElement.style.display = 'block';
                console.log('⚠️ 코드 실행 에러 표시 완료');
            }
        } catch (error) {
            // 예외 처리
            console.error('❌ 코드 실행 중 예외 발생:', error);
            loadingElement.style.display = 'none';
            errorElement.textContent = `❌ 예상치 못한 오류: ${error.message}`;
            errorElement.style.display = 'block';
        }
    }

    // 최종 완료 검사 메서드
    checkFinalCompletion(userText, targetText) {
        // 디버깅용 로그 추가
        console.log('🔍 문자열 비교 디버깅:');
        console.log('사용자 텍스트 길이:', userText.length, '타겟 텍스트 길이:', targetText.length);
        console.log('사용자 텍스트:', JSON.stringify(userText));
        console.log('타겟 텍스트:', JSON.stringify(targetText));
        console.log('완전 일치 여부:', userText === targetText);
        
        // 문자별 비교 (처음 5개 다른 문자만 표시)
        let differences = [];
        const maxLength = Math.max(userText.length, targetText.length);
        for (let i = 0; i < maxLength && differences.length < 5; i++) {
            const userChar = userText[i] || '';
            const targetChar = targetText[i] || '';
            if (userChar !== targetChar) {
                differences.push({
                    position: i,
                    user: userChar,
                    target: targetChar,
                    userCode: userChar.charCodeAt(0) || 'undefined',
                    targetCode: targetChar.charCodeAt(0) || 'undefined'
                });
            }
        }
        
        if (differences.length > 0) {
            console.log('🔍 발견된 차이점들:', differences);
        }
        
        // 먼저 100% 일치 여부를 확인 (수정 모드와 관계없이 우선 체크)
        if (userText === targetText) {
            // 완벽하게 일치하면 바로 완료
            this.isEditingAfterError = false; // 수정 완료 상태로 리셋
            console.log('🎉 코드 100% 완성! 결과창으로 이동');
            this.completeGame();
            return; // 완료되었으므로 더 이상 진행하지 않음
        }
        
        // 100% 일치하지 않는 경우에만 오탈자 처리
        // 길이가 목표와 같을 때만 오탈자 검사 (중간 입력 중에는 팝업 표시하지 않음)
        if (userText.length === targetText.length) {
            // 수정 중이면 팝업을 표시하지 않음
            if (this.isEditingAfterError) {
                console.log('✏️ 수정 중이므로 오류 팝업 표시하지 않음');
                return;
            }
            
            // 처음 오탈자를 발견했을 때만 팝업 표시
            const errors = this.findTypingErrors(userText, targetText);
            if (errors.length > 0) {
                this.showFinalErrorPopup(errors);
            }
        }
    }
    
    // 오탈자 찾기 메서드 (새로 추가)
    findTypingErrors(userText, targetText) {
        const errors = [];
        const targetLines = targetText.split('\n');
        const userLines = userText.split('\n');
        
        let userPosition = 0;
        let targetPosition = 0;
        
        for (let lineIndex = 0; lineIndex < Math.max(targetLines.length, userLines.length); lineIndex++) {
            const targetLine = targetLines[lineIndex] || '';
            const userLine = userLines[lineIndex] || '';
            
            // 한 글자씩 비교
            for (let charIndex = 0; charIndex < Math.max(targetLine.length, userLine.length); charIndex++) {
                const targetChar = targetLine[charIndex];
                const userChar = userLine[charIndex];
                
                if (targetChar !== userChar) {
                    errors.push({
                        line: lineIndex + 1,
                        position: targetPosition,
                        expected: targetChar || '(문자 없음)',
                        actual: userChar || '(문자 없음)',
                        context: {
                            line: targetLine,
                            position: charIndex
                        }
                    });
                }
                
                if (targetChar) targetPosition++;
            }
            
            // 줄바꿈 처리
            if (lineIndex < targetLines.length - 1) {
                targetPosition++; // 줄바꿈 문자 카운트
            }
        }
        
        return errors;
    }

    // 오류가 있는 라인들만 추출 (중복 제거)
    getErrorLines(errors) {
        const uniqueLines = [...new Set(errors.map(error => error.line))];
        return uniqueLines.sort((a, b) => a - b);
    }

    // 오탈자 팝업 표시 메서드
    showFinalErrorPopup(errors) {
        // 타이머 일시정지
        this.pauseTimer();
        
        // 기존 팝업이 있으면 제거
        this.hideErrorPopup();
        
        const popup = document.createElement('div');
        popup.id = 'error-popup';
        popup.className = 'error-popup';
        
        const firstError = errors[0];
        
        popup.innerHTML = `
            <div class="error-popup-content">
                <div class="error-header">
                    <i class="fas fa-search"></i>
                    <h3>거의 다 왔어요! 🔍</h3>
                    <button class="close-btn" id="error-popup-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="error-body">
                    <div class="error-message">
                        <p><strong>🔍 코드를 다시 한번 확인해보세요!</strong></p>
                        <p>거의 다 완성되었어요. 몇 곳만 체크하면 완벽한 코드가 됩니다!</p>
                    </div>
                    
                    <div class="code-requirement">
                        <div class="requirement-item">
                            <i class="fas fa-exclamation-circle"></i>
                            <span><strong>오탈자가 있으면 코드가 실행되지 않아요!</strong> 정확성이 프로그래밍의 핵심입니다.</span>
                        </div>
                        <div class="requirement-item">
                            <i class="fas fa-target"></i>
                            <span><strong>정확도 100%에 도전해보세요!</strong> 완벽한 코드를 작성할 수 있어요!</span>
                        </div>
                    </div>
                    
                    <div class="error-details">
                        <h4>📍 확인이 필요한 라인:</h4>
                        <div class="error-lines">
                            ${this.getErrorLines(errors).map(line => `
                                <div class="error-line-item">
                                    <i class="fas fa-arrow-right"></i>
                                    <span><strong>${line}번째 줄</strong>을 다시 확인해보세요</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="error-tips">
                        <h4>🔎 찾기 팁:</h4>
                        <ul>
                            <li><strong>빨간색으로 표시된 부분</strong>을 자세히 살펴보세요</li>
                            <li><strong>괄호, 따옴표, 콤마</strong> 같은 특수문자를 꼼꼼히 확인해보세요</li>
                            <li><strong>공백이나 들여쓰기</strong>도 중요해요</li>
                            <li>수정하고 나면 <strong>자동으로 다시 검사</strong>해드릴게요!</li>
                        </ul>
                    </div>
                </div>
                
                <div class="error-actions">
                    <button class="btn btn-primary" id="fix-errors-btn">
                        <i class="fas fa-edit"></i> 수정하러 가기
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        // 이벤트 리스너 추가
        const primaryBtn = popup.querySelector('#fix-errors-btn');
        const closeBtn = popup.querySelector('#error-popup-close');
        
        // 수정하러 가기 버튼
        primaryBtn.addEventListener('click', () => {
            this.isEditingAfterError = true; // 수정 중 상태로 설정
            this.focusFirstErrorLine(this.getErrorLines(errors)[0]);
            this.hideErrorPopup();
            this.resumeTimer(); // 타이머 재개
            console.log('✏️ 오류 수정 모드 시작');
        });
        
        // 닫기 버튼
        closeBtn.addEventListener('click', () => {
            this.isEditingAfterError = true; // 수정 중 상태로 설정 (팝업을 닫아도 수정 모드 유지)
            this.hideErrorPopup();
            this.resumeTimer(); // 타이머 재개
            console.log('✏️ 팝업 닫기 - 오류 수정 모드 유지');
        });
        
        // ESC 키로 닫기
        const handleEscKey = (e) => {
            if (e.key === 'Escape') {
                this.isEditingAfterError = true; // ESC로 닫아도 수정 모드 유지
                this.hideErrorPopup();
                this.resumeTimer();
                document.removeEventListener('keydown', handleEscKey);
                console.log('✏️ ESC로 팝업 닫기 - 오류 수정 모드 유지');
            }
        };
        document.addEventListener('keydown', handleEscKey);
        
        // 애니메이션으로 표시
        setTimeout(() => {
            popup.classList.add('show');
        }, 100);
    }

    // 첫 번째 오류 라인으로 커서 이동
    focusFirstErrorLine(lineNumber) {
        // 커스텀 에디터 사용 시
        if (this.userEditor) {
            const textarea = document.getElementById('user-code-input');
            if (textarea) {
                textarea.focus();
                
                if (lineNumber) {
                    // 해당 라인의 시작 위치 계산
                    const lines = textarea.value.split('\n');
                    let position = 0;
                    
                    for (let i = 0; i < Math.min(lineNumber - 1, lines.length); i++) {
                        position += lines[i].length + 1; // +1 for newline character
                    }
                    
                    // 커서를 해당 라인 시작으로 이동
                    textarea.setSelectionRange(position, position);
                    
                    // 해당 라인이 보이도록 스크롤
                    const lineHeight = 20; // 대략적인 줄 높이
                    textarea.scrollTop = Math.max(0, (lineNumber - 1) * lineHeight - textarea.clientHeight / 2);
                }
            }
        } else {
            // 기존 textarea 사용 시
            const userInput = document.getElementById('user-input');
            if (userInput) {
                userInput.focus();
                
                if (lineNumber) {
                    // 해당 라인의 시작 위치 계산
                    const lines = userInput.value.split('\n');
                    let position = 0;
                    
                    for (let i = 0; i < Math.min(lineNumber - 1, lines.length); i++) {
                        position += lines[i].length + 1; // +1 for newline character
                    }
                    
                    // 커서를 해당 라인 시작으로 이동
                    userInput.setSelectionRange(position, position);
                    
                    // 해당 라인이 보이도록 스크롤
                    userInput.scrollTop = Math.max(0, (lineNumber - 1) * 20 - userInput.clientHeight / 2);
                }
            }
        }
        
        console.log(`🎯 ${lineNumber}번째 라인으로 포커스 이동 완료`);
    }

    // 첫 번째 오류 위치로 커서 이동 (기존 메서드 유지)
    focusFirstError(firstError) {
        // 커스텀 에디터 사용 시
        if (this.userEditor) {
            const textarea = document.getElementById('user-code-input');
            if (textarea) {
                textarea.focus();
                
                if (firstError) {
                    // 오류 위치로 커서 이동
                    const errorPosition = Math.max(0, firstError.position);
                    textarea.setSelectionRange(errorPosition, errorPosition);
                    
                    // 해당 위치가 보이도록 스크롤
                    const lineHeight = 20; // 대략적인 줄 높이
                    textarea.scrollTop = Math.max(0, (firstError.line - 1) * lineHeight - textarea.clientHeight / 2);
                }
            }
        } else {
            // 기존 textarea 사용 시
            const userInput = document.getElementById('user-input');
            if (userInput) {
                userInput.focus();
                
                if (firstError) {
                    // 오류 위치로 커서 이동
                    const errorPosition = Math.max(0, firstError.position);
                    userInput.setSelectionRange(errorPosition, errorPosition);
                    
                    // 해당 위치가 보이도록 스크롤
                    userInput.scrollTop = Math.max(0, (firstError.line - 1) * 20 - userInput.clientHeight / 2);
                }
            }
        }
        
        console.log('🎯 첫 번째 오류 위치로 포커스 이동 완료');
    }
    
    // 오류 팝업 숨기기 메서드 (새로 추가)
    hideErrorPopup() {
        const existingPopup = document.getElementById('error-popup');
        if (existingPopup) {
            existingPopup.remove();
            // 팝업이 숨겨질 때 타이머 재개 (만약 아직 재개되지 않았다면)
            if (this.isPaused) {
                this.resumeTimer();
            }
        }
    }
    
    // 결과 화면 버튼 업데이트
    async updateResultButtons() {
        try {
            // 기존 결과 화면 버튼 컨테이너 찾기
            const resultActions = document.querySelector('.result-actions');
            if (!resultActions) return;
            
            // 기본 버튼들
            let buttonsHTML = `
                <button class="btn btn-primary" onclick="retryGame()">
                    <i class="fas fa-redo"></i> 다시 도전
                </button>
            `;
            
            // 동일한 레벨 버튼 (다른 예제가 있을 때만)
            const hasOtherExamples = await this.hasOtherExamples();
            if (hasOtherExamples) {
                buttonsHTML += `
                    <button class="btn btn-secondary" onclick="sameLevelChallenge()">
                        <i class="fas fa-random"></i> 동일한 레벨 도전
                    </button>
                `;
            }
            
            // 다음 단계 버튼
            const hasNextLevel = await this.hasNextLevel();
            if (hasNextLevel) {
                buttonsHTML += `
                    <button class="btn btn-success" onclick="nextLevel()">
                        <i class="fas fa-arrow-right"></i> 다음 단계
                    </button>
                `;
            }
            
            // 목록으로 돌아가기 버튼
            buttonsHTML += `
                <button class="btn btn-outline" onclick="exitGame()">
                    <i class="fas fa-list"></i> 목록으로 돌아가기
                </button>
            `;
            
            resultActions.innerHTML = buttonsHTML;
        } catch (error) {
            console.error('❌ updateResultButtons 오류:', error);
            // 오류 발생 시 기본 버튼만 표시
            const resultActions = document.querySelector('.result-actions');
            if (resultActions) {
                resultActions.innerHTML = `
                    <button class="btn btn-primary" onclick="retryGame()">
                        <i class="fas fa-redo"></i> 다시 도전
                    </button>
                    <button class="btn btn-outline" onclick="exitGame()">
                        <i class="fas fa-list"></i> 목록으로 돌아가기
                    </button>
                `;
            }
        }
    }
    
    // 같은 레벨의 다른 예제가 있는지 확인
    async hasOtherExamples() {
        try {
            if (!AppState.currentDifficulty || !AppState.currentLength || !AppState.currentCode) {
                return false;
            }
            
            const metadata = await window.loadMetadata();
            const allCodes = metadata[AppState.currentDifficulty]?.[AppState.currentLength];
            return allCodes && allCodes.length > 1; // 현재 코드 외에 다른 코드가 있는지
        } catch (error) {
            console.error('❌ hasOtherExamples 오류:', error);
            return false;
        }
    }
    
    // 다음 레벨이 있는지 확인
    async hasNextLevel() {
        try {
            if (!AppState.currentDifficulty || !AppState.currentLength || !AppState.currentCode) {
                return false;
            }
            
            const metadata = await window.loadMetadata();
            const codes = metadata[AppState.currentDifficulty]?.[AppState.currentLength];
            
            if (!codes) {
                return false;
            }
            
            const currentIndex = codes.findIndex(c => c.id === AppState.currentCode.id);
            
            // 같은 길이의 다음 코드가 있는지
            if (currentIndex < codes.length - 1) {
                return true;
            }
            
            // 다음 길이로 이동
            const lengthOrder = ['short', 'medium', 'long'];
            const currentLengthIndex = lengthOrder.indexOf(AppState.currentLength);
            
            if (currentLengthIndex < lengthOrder.length - 1) {
                const nextLength = lengthOrder[currentLengthIndex + 1];
                const nextLengthCodes = metadata[AppState.currentDifficulty]?.[nextLength];
                if (nextLengthCodes && nextLengthCodes.length > 0) {
                    return true;
                }
            }
            
                         // 다음 난이도가 있는지
             if (AppState.currentDifficulty === 'beginner' || AppState.currentDifficulty === 'intermediate') {
                 return true;
             }
             
             return false;
        } catch (error) {
            console.error('❌ hasNextLevel 오류:', error);
            return false;
        }
     }
}

// ===== 화면 전환 함수들 =====
async function showDifficulty(difficulty) {
    AppState.currentDifficulty = difficulty;
    
    // 제목 업데이트 - 코드 길이 선택 화면으로
    const titles = {
        beginner: '초급 레벨 - 코드 길이 선택',
        intermediate: '중급 레벨 - 코드 길이 선택',  
        advanced: '고급 레벨 - 코드 길이 선택'
    };
    updateProgressElement('difficulty-title', titles[difficulty]);
    
    // 화면 전환
    showScreen('difficulty-screen');
    
    // 코드 길이 선택 화면 로드
    await loadLengthSelection(difficulty);
}

// 코드 길이 선택 화면 로드
async function loadLengthSelection(difficulty) {
    console.log(`📋 코드 길이 선택 화면 로드 시작: ${difficulty}`);
    
    const codeList = document.getElementById('code-list');
    if (!codeList) {
        console.error('❌ code-list 요소를 찾을 수 없습니다.');
        return;
    }
    
    try {
        // 난이도별 설명 업데이트
        const descriptions = {
            beginner: '파이썬의 기본 문법과 간단한 출력문을 연습합니다',
            intermediate: '조건문, 반복문, 함수 등 중급 문법을 학습합니다',
            advanced: '클래스, 모듈, 복잡한 알고리즘을 마스터합니다'
        };
        
        console.log(`📝 설명 업데이트: ${descriptions[difficulty]}`);
        updateProgressElement('difficulty-description', descriptions[difficulty]);
        
        // 전체 진행률 계산 (모든 길이 포함)
        console.log(`📊 전체 진행률 계산 중...`);
        const totalProgress = await getTotalProgress(difficulty);
        updateProgressElement('progress-text', `${totalProgress.completed}/${totalProgress.total} 완료`);
        updateProgressElement('progress-percentage', `${totalProgress.percentage}%`);
    
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
            progressFill.style.width = `${totalProgress.percentage}%`;
        } else {
            console.warn('⚠️ progress-fill 요소를 찾을 수 없습니다.');
        }
    
        // 코드 길이별 카드 생성
        console.log(`🎨 길이별 카드 생성 시작`);
        const lengthCardsArray = await Promise.all(['short', 'medium', 'long'].map(async length => {
            console.log(`📊 ${length} 진행률 계산 중...`);
            const lengthProgress = await getProgressByLength(difficulty, length);
            
            // DifficultyDescriptions 전역 객체 접근
            const difficultyDesc = (window.DifficultyDescriptions && window.DifficultyDescriptions[difficulty]) 
                ? window.DifficultyDescriptions[difficulty] 
                : {
                    short: '기본 문법을 빠르게 익히는 짧은 코드',
                    medium: '여러 문법을 조합한 중간 길이 코드', 
                    long: '실전에서 사용할 수 있는 완성된 프로그램'
                };
            
            const lengthInfo = {
                short: { 
                    title: '짧은 코드 연습', 
                    subtitle: '기본 문법 (1-3줄)',
                    icon: 'fas fa-bolt',
                    description: difficultyDesc.short
                },
                medium: { 
                    title: '중간 코드 연습', 
                    subtitle: '조합 문법 (4-8줄)',
                    icon: 'fas fa-code',
                    description: difficultyDesc.medium
                },
                long: { 
                    title: '긴 코드 연습', 
                    subtitle: '실전 프로젝트 (9줄 이상)',
                    icon: 'fas fa-project-diagram',
                    description: difficultyDesc.long
                }
            };
            
            return `
                <div class="code-length-card" onclick="showCodeLength('${difficulty}', '${length}')">
                    <div class="length-card-header">
                        <div class="length-icon">
                            <i class="${lengthInfo[length].icon}"></i>
                        </div>
                        <div class="length-info">
                            <h3>${lengthInfo[length].title}</h3>
                            <p class="length-subtitle">${lengthInfo[length].subtitle}</p>
                        </div>
                    </div>
                    <div class="length-card-body">
                        <p class="length-description">${lengthInfo[length].description}</p>
                        <div class="length-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${lengthProgress.percentage}%"></div>
                            </div>
                            <span class="progress-text">${lengthProgress.completed}/${lengthProgress.total} 완료</span>
                        </div>
                    </div>
                    <div class="length-card-footer">
                        <span class="difficulty-badge ${difficulty}">${getDifficultyKorean(difficulty)}</span>
                        <span class="completion-badge ${lengthProgress.percentage === 100 ? 'complete' : ''}">
                            ${lengthProgress.percentage === 100 ? '완료!' : '진행중'}
                        </span>
                    </div>
                </div>
            `;
        }));
        
        const lengthCards = lengthCardsArray.join('');
    
        // 길이 선택 화면에서는 length-selection-container 클래스 사용 (가운데 정렬을 위해)
        codeList.className = 'length-selection-container';
        codeList.innerHTML = `
            <div class="length-selection-header">
                <h2>원하는 코드 길이를 선택하세요</h2>
                <p>각 카테고리마다 다양한 예제가 준비되어 있습니다</p>
            </div>
            <div class="length-cards-grid">
                ${lengthCards}
            </div>
        `;
        
    } catch (error) {
        console.error('❌ 코드 길이 선택 로드 실패:', error);
        const codeList = document.getElementById('code-list');
        if (codeList) {
            codeList.innerHTML = `
                <div class="error-message">
                    <h3>코드 목록을 불러올 수 없습니다</h3>
                    <p>잠시 후 다시 시도해주세요.</p>
                    <button class="btn btn-primary" onclick="loadLengthSelection('${difficulty}')">다시 시도</button>
                </div>
            `;
        }
    }
}

// 특정 길이의 코드 목록 표시
async function showCodeLength(difficulty, length) {
    console.log(`📋 showCodeLength() 호출됨: ${difficulty} - ${length}`);
    
    AppState.currentDifficulty = difficulty;
    AppState.currentLength = length;
    
    // 제목 업데이트
    const lengthTitles = {
        short: '짧은 코드',
        medium: '중간 코드', 
        long: '긴 코드'
    };
    const difficultyTitles = {
        beginner: '초급',
        intermediate: '중급',
        advanced: '고급'
    };
    
    updateProgressElement('difficulty-title', `${difficultyTitles[difficulty]} - ${lengthTitles[length]} 연습`);
    
    // 화면 전환 (먼저 화면 전환)
    console.log(`📱 difficulty-screen으로 화면 전환 중...`);
    showScreen('difficulty-screen');
    
    // 해당 길이의 코드 목록 로드
    await loadCodeList(difficulty, length);
}

async function loadCodeList(difficulty, length) {
    const codeList = document.getElementById('code-list');
    
    try {
        // 파일 기반 시스템에서 메타데이터 가져오기
        console.log(`📋 코드 목록 로드 시작: ${difficulty}/${length}`);
        
        // 코드 시스템이 초기화되었는지 확인
        await window.ensureCodeSystemInitialized();
        
        // 메타데이터에서 코드 목록 가져오기
        const metadata = await window.loadMetadata();
        const allCodes = metadata[difficulty][length];
        
        if (!allCodes || allCodes.length === 0) {
            throw new Error(`${difficulty}/${length}에 대한 코드가 없습니다.`);
        }
        
        console.log(`📊 발견된 코드 수: ${allCodes.length}`);
        const progress = JSON.parse(localStorage.getItem('gameProgress') || '{}');
        
        // 레벨별로 대표 예제 하나씩만 선택 (각 levelGroup의 첫 번째 예제)
        const representativeCodes = getRepresentativeCodesByLevel(allCodes);
    
    // 일반 코드 목록에서는 code-grid 클래스 사용 (그리드 레이아웃을 위해)
    codeList.className = 'code-grid';
    
    // 난이도별 설명 업데이트 (전역 객체 접근)
    const difficultyDesc = (window.DifficultyDescriptions && window.DifficultyDescriptions[difficulty]) 
        ? window.DifficultyDescriptions[difficulty] 
        : {
            short: '기본 문법을 빠르게 익히는 짧은 코드',
            medium: '여러 문법을 조합한 중간 길이 코드', 
            long: '실전에서 사용할 수 있는 완성된 프로그램'
        };
    
    const lengthDescriptions = {
        short: difficultyDesc.short,
        medium: difficultyDesc.medium,
        long: difficultyDesc.long
    };
    
    updateProgressElement('difficulty-description', lengthDescriptions[length]);
    
    // 전체 코드 기준으로 진행률 계산 (모든 예제 포함)
    const progressData = await getProgressByLength(difficulty, length);
    updateProgressElement('progress-text', `${progressData.completed}/${progressData.total} 완료`);
    updateProgressElement('progress-percentage', `${progressData.percentage}%`);
    
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = `${progressData.percentage}%`;
    } else {
        console.warn('⚠️ progress-fill 요소를 찾을 수 없습니다.');
    }
    
    // 뒤로가기 버튼 추가
    const backButton = `
        <div class="back-navigation">
            <button class="btn btn-secondary" onclick="showDifficulty('${difficulty}')">
                <i class="fas fa-arrow-left"></i> 코드 길이 선택으로 돌아가기
            </button>
        </div>
    `;
    
    codeList.innerHTML = backButton + representativeCodes.map((code, index) => {
        // 같은 레벨의 모든 예제 완료 여부 확인
        const sameLevelCodes = allCodes.filter(c => c.levelGroup === code.levelGroup);
        const completedSameLevelCount = sameLevelCodes.filter(c => 
            progress[difficulty] && progress[difficulty][c.id] && progress[difficulty][c.id].completed
        ).length;
        const isLevelCompleted = completedSameLevelCount === sameLevelCodes.length;
        const hasPartialProgress = completedSameLevelCount > 0;
        
        const isLocked = false; // 모든 코드 해금
        const levelNumber = code.levelGroup || (index + 1);
        
        // 상태 결정 (레벨 전체 완료 여부 기준)
        let statusClass, statusIcon;
        if (isLevelCompleted) {
            statusClass = 'completed';
            statusIcon = '<i class="fas fa-check"></i>';
        } else if (hasPartialProgress) {
            statusClass = 'partial';
            statusIcon = '<i class="fas fa-play-circle"></i>';
        } else if (isLocked) {
            statusClass = 'locked';
            statusIcon = '<i class="fas fa-lock"></i>';
        } else {
            statusClass = 'available';
            statusIcon = '<i class="fas fa-play"></i>';
        }
        
        // 카테고리 한글명 (전역 객체 접근)
        const categoryName = (window.CategoryDescriptions && window.CategoryDescriptions[code.category]) 
            ? window.CategoryDescriptions[code.category] 
            : code.category;
        
        // 난이도 별표 생성 (레벨 그룹에 따라)
        const difficultyLevel = getDifficultyLevelByLevelGroup(difficulty, length, code.levelGroup || (index + 1));
        const difficultyStars = Array.from({length: 5}, (_, i) => {
            const starClass = i < difficultyLevel ? 'filled' : 'empty';
            return `<div class="difficulty-star ${starClass}"></div>`;
        }).join('');
        
        const completedClass = isLevelCompleted ? 'completed' : '';
        const clickHandler = isLocked ? '' : `onclick="startGame('${difficulty}', '${length}', '${code.id}')"`;
        
        // 같은 레벨 예제 개수 표시
        const exampleCountBadge = sameLevelCodes.length > 1 ? 
            `<span class="example-count-badge">${sameLevelCodes.length}개 예제</span>` : '';
        
        return `
            <div class="code-item ${completedClass}" ${clickHandler}>
                <div class="code-item-header">
                    <div class="code-level-badge">Level ${levelNumber}</div>
                    <div class="code-status">
                        <div class="status-icon ${statusClass}">${statusIcon}</div>
                        ${hasPartialProgress && !isLevelCompleted ? 
                            `<span class="progress-badge">${completedSameLevelCount}/${sameLevelCodes.length}</span>` : ''}
                    </div>
                </div>
                <div class="code-item-content">
                    <h4>${code.title}</h4>
                    <p>${code.description}</p>
                    <div class="code-category">
                        <span class="category-badge">${categoryName}</span>
                        ${exampleCountBadge}
                    </div>
                    <pre class="code-preview">파이썬 코드 예제를 클릭하여 시작하세요</pre>
                </div>
                <div class="code-item-footer">
                    <div class="code-difficulty">
                        <span>난이도:</span>
                        <div class="difficulty-stars">${difficultyStars}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    } catch (error) {
        console.error('❌ 코드 목록 로드 실패:', error);
        codeList.innerHTML = `
            <div class="error-message">
                <h3>코드 목록을 불러올 수 없습니다</h3>
                <p>잠시 후 다시 시도해주세요.</p>
                <button class="btn btn-primary" onclick="loadCodeList('${difficulty}', '${length}')">다시 시도</button>
            </div>
        `;
    }
}

// 난이도 레벨 계산 함수 (기존 호환성용)
function getDifficultyLevel(difficulty, index) {
    const baseLevels = {
        beginner: 1,
        intermediate: 2,
        advanced: 4
    };
    
    const baseLevel = baseLevels[difficulty];
    const variation = Math.floor(index / 3); // 3개마다 난이도 증가
    
    return Math.min(5, baseLevel + variation);
}

// 길이별 난이도 레벨 계산 함수
function getDifficultyLevelByLength(difficulty, length, index) {
    const baseLevels = {
        beginner: { short: 1, medium: 2, long: 3 },
        intermediate: { short: 2, medium: 3, long: 4 },
        advanced: { short: 3, medium: 4, long: 5 }
    };
    
    const baseLevel = baseLevels[difficulty][length];
    const variation = Math.floor(index / 4); // 4개마다 난이도 증가
    
    return Math.min(5, baseLevel + variation);
}

// 레벨 그룹별 난이도 레벨 계산 함수
function getDifficultyLevelByLevelGroup(difficulty, length, levelGroup) {
    const baseLevels = {
        beginner: { short: 1, medium: 2, long: 3 },
        intermediate: { short: 2, medium: 3, long: 4 },
        advanced: { short: 3, medium: 4, long: 5 }
    };
    
    const baseLevel = baseLevels[difficulty][length];
    
    // 레벨 그룹에 따른 난이도 증가 (각 레벨 그룹은 동일한 난이도)
    return Math.min(5, baseLevel + Math.floor((levelGroup - 1) / 3));
}

// 특정 길이의 진행률 계산
async function getProgressByLength(difficulty, length) {
    try {
        console.log(`📊 진행률 계산 시작: ${difficulty}/${length}`);
        
        // 코드 시스템이 초기화되었는지 확인
        await window.ensureCodeSystemInitialized();
        
        // 메타데이터에서 코드 목록 가져오기
        const metadata = await window.loadMetadata();
        
        if (!metadata || !metadata[difficulty] || !metadata[difficulty][length]) {
            console.warn(`⚠️ 코드 데이터가 없습니다: ${difficulty}/${length}`);
            return { completed: 0, total: 0, percentage: 0 };
        }
        
        const progress = JSON.parse(localStorage.getItem('gameProgress') || '{}');
        const codes = metadata[difficulty][length];
        
        console.log(`📊 총 ${codes.length}개 코드 발견`);
        
        const completed = codes.filter(code => 
            progress[difficulty] && progress[difficulty][code.id] && progress[difficulty][code.id].completed
        ).length;
        
        const result = {
            completed: completed,
            total: codes.length,
            percentage: Math.round((completed / codes.length) * 100)
        };
        
        console.log(`📊 진행률 계산 완료:`, result);
        return result;
    } catch (error) {
        console.error('❌ 진행률 계산 실패:', error);
        return { completed: 0, total: 0, percentage: 0 };
    }
}

// 전체 진행률 계산 (모든 길이 포함)
async function getTotalProgress(difficulty) {
    let totalCompleted = 0;
    let totalCodes = 0;
    
    try {
        console.log(`📊 전체 진행률 계산 시작: ${difficulty}`);
        
        for (const length of ['short', 'medium', 'long']) {
            try {
                const lengthProgress = await getProgressByLength(difficulty, length);
                totalCompleted += lengthProgress.completed;
                totalCodes += lengthProgress.total;
                console.log(`📊 ${length}: ${lengthProgress.completed}/${lengthProgress.total}`);
            } catch (error) {
                console.warn(`⚠️ ${length} 진행률 계산 실패:`, error);
            }
        }
        
        const result = {
            completed: totalCompleted,
            total: totalCodes,
            percentage: totalCodes > 0 ? Math.round((totalCompleted / totalCodes) * 100) : 0
        };
        
        console.log(`📊 전체 진행률 계산 완료:`, result);
        return result;
    } catch (error) {
        console.error('❌ 전체 진행률 계산 실패:', error);
        return { completed: 0, total: 0, percentage: 0 };
    }
}

// 한국어 난이도명
function getDifficultyKorean(difficulty) {
    const korean = {
        beginner: '초급',
        intermediate: '중급',
        advanced: '고급'
    };
    return korean[difficulty] || difficulty;
}

async function startGame(difficulty, length, codeId) {
    console.log('🎮 startGame 호출됨:', { difficulty, length, codeId });
    
    try {
        const code = await findCodeById(codeId);
        if (!code) {
            console.error('❌ 코드를 찾을 수 없습니다:', difficulty, length, codeId);
            return;
        }
        
        console.log('📋 선택된 코드 정보:', {
            id: code.id,
            title: code.title,
            category: code.category,
            levelGroup: code.levelGroup
        });
        
        // 현재 난이도, 길이, 코드 설정
        AppState.currentDifficulty = difficulty;
        AppState.currentLength = length;
        AppState.currentCode = code;
        
        // 게임 화면 설정
        const levelNumber = code.levelGroup || 1;
        
        console.log('🎯 레벨 정보:', {
            levelNumber: levelNumber,
            levelGroup: code.levelGroup,
            difficulty: difficulty,
            length: length
        });
        
        updateGameHeader('current-level', `Level ${levelNumber}`);
        updateGameHeader('current-title', code.title);
        
        // 게임 시작
        const game = new TypingGame();
        AppState.gameSession = game;
        game.start(code.code);
        
        showScreen('game-screen');
        console.log('✅ 게임 시작 완료:', {
            difficulty,
            length,
            title: code.title,
            level: levelNumber
        });
    } catch (error) {
        console.error('❌ 게임 시작 실패:', error);
        alert('게임을 시작할 수 없습니다. 페이지를 새로고침 해주세요.');
    }
}

function updateGameHeader(elementId, value) {
    try {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = value;
        } else {
            console.warn(`⚠️ 게임 헤더 요소 '${elementId}'를 찾을 수 없습니다.`);
        }
    } catch (error) {
        console.error(`❌ 게임 헤더 업데이트 실패 (${elementId}):`, error);
    }
}

function exitGame() {
    console.log('🚪 exitGame() 함수 호출됨');
    console.log('현재 상태:', {
        difficulty: AppState.currentDifficulty,
        length: AppState.currentLength,
        timer: AppState.gameTimer
    });
    
    try {
        if (AppState.gameTimer) {
            clearInterval(AppState.gameTimer);
            AppState.gameTimer = null;
            console.log('⏰ 게임 타이머 정리 완료');
        }
        
        // 현재 난이도와 길이가 설정되어 있으면 해당 화면으로, 없으면 메인 메뉴로
        if (AppState.currentDifficulty && AppState.currentLength) {
            console.log('📂 코드 길이 선택 화면으로 이동');
            showCodeLength(AppState.currentDifficulty, AppState.currentLength);
        } else if (AppState.currentDifficulty) {
            console.log('📚 난이도 선택 화면으로 이동');
            showDifficulty(AppState.currentDifficulty);
        } else {
            console.log('🏠 메인 메뉴로 이동');
            showScreen('main-menu');
        }
        
        console.log('✅ exitGame() 함수 실행 완료');
    } catch (error) {
        console.error('❌ exitGame() 실행 중 오류:', error);
        // 오류 발생 시 강제로 메인 메뉴로 이동
        showScreen('main-menu');
    }
}

function retryGame() {
    if (AppState.currentCode && AppState.currentDifficulty && AppState.currentLength) {
        startGame(AppState.currentDifficulty, AppState.currentLength, AppState.currentCode.id);
    }
}

async function sameLevelChallenge() {
    console.log('🎲 동일한 레벨 도전 시작!');
    
    // 동일한 레벨 도전 시 게임 데이터 초기화
    AppState.gameData = {
        wpm: 0,
        accuracy: 100,
        errors: 0,
        timeElapsed: 0,
        correctChars: 0,
        totalChars: 0
    };
    
    console.log('현재 상태:', {
        difficulty: AppState.currentDifficulty,
        length: AppState.currentLength,
        currentCode: AppState.currentCode?.id,
        levelGroup: AppState.currentCode?.levelGroup
    });
    
    if (AppState.currentDifficulty && AppState.currentLength && AppState.currentCode) {
        const currentLevelGroup = AppState.currentCode.levelGroup;
        
        console.log(`🎯 현재 레벨 그룹: ${currentLevelGroup}`);
        
        try {
            // 1차: 같은 레벨 그룹에서 다른 예제 선택
            const sameLevelCode = await getRandomCodeBySameLevel(
                AppState.currentDifficulty, 
                AppState.currentLength, 
                currentLevelGroup,
                AppState.currentCode.id
            );
            
            if (sameLevelCode) {
                console.log('✨ 같은 레벨에서 선택됨:', {
                    id: sameLevelCode.id,
                    title: sameLevelCode.title,
                    levelGroup: sameLevelCode.levelGroup
                });
                await startGame(AppState.currentDifficulty, AppState.currentLength, sameLevelCode.id);
                return;
            }
        } catch (error) {
            console.warn('⚠️ 같은 레벨에서 선택 실패:', error);
        }
        
        try {
            // 2차: 같은 카테고리에서 선택 (같은 레벨이 없을 때)
            console.log('⚠️ 같은 레벨 없음, 같은 카테고리에서 선택 중...');
            const randomCode = await getRandomCodeByCategory(
                AppState.currentDifficulty, 
                AppState.currentLength, 
                AppState.currentCode.category,
                AppState.currentCode.id
            );
            
            if (randomCode) {
                console.log('🔄 같은 카테고리에서 선택됨:', {
                    id: randomCode.id,
                    title: randomCode.title,
                    category: randomCode.category,
                    levelGroup: randomCode.levelGroup
                });
                await startGame(AppState.currentDifficulty, AppState.currentLength, randomCode.id);
                return;
            }
        } catch (error) {
            console.warn('⚠️ 같은 카테고리에서 선택 실패:', error);
        }
        
        try {
            // 3차: 전체에서 랜덤 선택 (최후 수단)
            console.log('⚠️ 같은 카테고리도 없음, 전체에서 선택 중...');
            const randomCodeAny = await getRandomCode(
                AppState.currentDifficulty, 
                AppState.currentLength, 
                AppState.currentCode.id
            );
            
            if (randomCodeAny) {
                console.log('🔀 전체에서 선택됨:', {
                    id: randomCodeAny.id,
                    title: randomCodeAny.title,
                    category: randomCodeAny.category,
                    levelGroup: randomCodeAny.levelGroup
                });
                await startGame(AppState.currentDifficulty, AppState.currentLength, randomCodeAny.id);
            } else {
                console.log('❌ 선택 가능한 다른 코드가 없음');
                alert('다른 예제가 없습니다.');
                exitGame();
            }
        } catch (error) {
            console.error('❌ 전체에서 선택 실패:', error);
            alert('다른 예제를 찾을 수 없습니다.');
            exitGame();
        }
    } else {
        console.error('❌ 현재 게임 상태가 유효하지 않음');
    }
}

async function nextLevel() {
    try {
        // 현재 레벨 그룹의 다음 레벨로 이동
        const currentLevelGroup = AppState.currentCode.levelGroup || 1;
        const nextLevelGroup = currentLevelGroup + 1;
        
        // 같은 길이의 다음 레벨 시도
        try {
            const nextLevelCode = await getRandomCodeBySameLevel(
                AppState.currentDifficulty, 
                AppState.currentLength, 
                nextLevelGroup
            );
            
            if (nextLevelCode) {
                await startGame(AppState.currentDifficulty, AppState.currentLength, nextLevelCode.id);
                return;
            }
        } catch (error) {
            console.log('같은 길이의 다음 레벨이 없음');
        }
        
        // 다음 길이로 이동
        const lengthOrder = ['short', 'medium', 'long'];
        const currentLengthIndex = lengthOrder.indexOf(AppState.currentLength);
        
        if (currentLengthIndex < lengthOrder.length - 1) {
            const nextLength = lengthOrder[currentLengthIndex + 1];
            try {
                const nextCode = await getRandomCode(AppState.currentDifficulty, nextLength);
                if (nextCode) {
                    await startGame(AppState.currentDifficulty, nextLength, nextCode.id);
                    return;
                }
            } catch (error) {
                console.log('다음 길이가 없음');
            }
        }
        
        // 다음 난이도로 이동
        moveToNextDifficulty();
        
    } catch (error) {
        console.error('❌ 다음 레벨 이동 실패:', error);
        moveToNextDifficulty();
    }
}

function moveToNextDifficulty() {
    if (AppState.currentDifficulty === 'beginner') {
        showDifficulty('intermediate');
    } else if (AppState.currentDifficulty === 'intermediate') {
        showDifficulty('advanced');
    } else {
        showScreen('main-menu');
    }
}

function showStats() {
    const stats = StorageManager.getAllStats();
    
    // 안전하게 통계 업데이트
    updateStatElement('total-games', stats.totalGames);
    updateStatElement('best-wpm', stats.bestWPM);
    updateStatElement('avg-accuracy', stats.averageAccuracy + '%');
    
    showScreen('stats-screen');
}

function updateStatElement(elementId, value) {
    try {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = value;
        } else {
            console.warn(`⚠️ 통계 요소 '${elementId}'를 찾을 수 없습니다.`);
        }
    } catch (error) {
        console.error(`❌ 통계 업데이트 실패 (${elementId}):`, error);
    }
}

function showSettings() {
    showScreen('settings-screen');
}

// ===== 다크 모드 토글 =====
function toggleDarkMode() {
    const isDark = document.body.hasAttribute('data-theme');
    
    if (isDark) {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('darkMode', 'false');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'true');
    }
    
    // 커스텀 에디터 테마 업데이트
    updateCustomEditorTheme();
}

function updateCustomEditorTheme() {
    // 커스텀 에디터는 CSS 변수를 통해 자동으로 테마가 적용됨
    console.log('🎨 커스텀 에디터 테마 업데이트 완료');
}

// ===== 초기화 =====
async function initializePythonTypeAcademy() {
    console.log('🐍 Python Type Academy 초기화 시작...');
    
    try {
        // 의존성 대기 (python-codes.js의 객체들이 로드될 때까지)
        await waitForDependencies();
        
        // 코드 시스템 초기화 (최우선)
        if (typeof initializeCodeSystem === 'function') {
            await initializeCodeSystem();
        } else {
            console.warn('⚠️ initializeCodeSystem 함수를 찾을 수 없습니다.');
        }
        
        // 다크 모드 설정 복원
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (isDarkMode) {
            document.body.setAttribute('data-theme', 'dark');
            if (darkModeToggle) darkModeToggle.checked = true;
        }
        
        // 사운드 설정 복원
        const isSoundEnabled = localStorage.getItem('soundEnabled') !== 'false';
        const soundToggle = document.getElementById('sound-toggle');
        if (soundToggle) soundToggle.checked = isSoundEnabled;
        
        // 모든 레벨이 처음부터 해금되어 있습니다
        console.log('📚 모든 레벨이 해금된 상태로 시작합니다');
        
        // 이벤트 리스너 설정
        if (darkModeToggle) {
            darkModeToggle.addEventListener('change', toggleDarkMode);
        }
        
        if (soundToggle) {
            soundToggle.addEventListener('change', function() {
                localStorage.setItem('soundEnabled', this.checked);
            });
        }
        
        // 키보드 단축키
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && AppState.currentScreen !== 'main-menu') {
                if (AppState.currentScreen === 'game-screen') {
                    exitGame();
                } else {
                    showScreen('main-menu');
                }
            }
        });
        
        // X 버튼 이벤트 리스너 추가 (추가 안전장치)
        const gameBackBtn = document.querySelector('#game-screen .back-btn');
        if (gameBackBtn) {
            gameBackBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🖱️ X 버튼 클릭됨 (이벤트 리스너)');
                exitGame();
            });
            console.log('🔗 X 버튼 이벤트 리스너 등록 완료');
        } else {
            console.warn('⚠️ X 버튼을 찾을 수 없습니다');
        }
        
        // 앱 상태 초기화
        AppState.currentScreen = 'main-menu';
        
        console.log('✅ Python Type Academy 로드 완료!');
        
        // Pyodide 미리 로드 (백그라운드에서)
        if (window.libraryLoadStatus && window.libraryLoadStatus.pyodide !== false) {
            initPyodide().then(() => {
                console.log('🚀 파이썬 엔진이 준비되었습니다!');
            }).catch(error => {
                console.warn('⚠️ 파이썬 엔진 로드 실패 (코드 실행 기능이 제한될 수 있습니다):', error);
            });
        } else {
            console.warn('⚠️ Pyodide를 사용할 수 없습니다. 코드 실행 기능이 제한됩니다.');
        }
        
    } catch (error) {
        console.error('❌ 초기화 중 오류 발생:', error);
        alert('앱 초기화 중 오류가 발생했습니다. 페이지를 새로고침해주세요.');
    }
}

// ===== 초기화 관리 =====
let isInitialized = false;

async function initializeAppSafely() {
    if (isInitialized) {
        console.log('⚠️ 이미 초기화되었습니다.');
        return;
    }
    
    try {
        isInitialized = true;
        await initializePythonTypeAcademy();
    } catch (error) {
        isInitialized = false;
        throw error;
    }
}

// HTML에서 호출할 수 있도록 전역 함수로 등록 (HTML의 initializeApp을 덮어씀)
window.initializeApp = initializeAppSafely;

// DOM 로드 완료 시 자동 초기화
document.addEventListener('DOMContentLoaded', async function() {
    // 짧은 지연 후 초기화 (python-codes.js가 완전히 로드되기를 기다림)
    setTimeout(async () => {
        if (!isInitialized) {
            console.log('🚀 DOM 로드 완료 - 앱 초기화 시작');
            await initializeAppSafely();
        }
    }, 100);
});

// ===== 전역 함수 (HTML에서 호출) =====
// 원본 함수들을 먼저 저장
const _showDifficulty = showDifficulty;
const _showCodeLength = showCodeLength;
const _startGame = startGame;
const _sameLevelChallenge = sameLevelChallenge;
const _nextLevel = nextLevel;

// 전역 래퍼 함수들 정의
window.showScreen = showScreen;
window.showDifficulty = (difficulty) => {
    _showDifficulty(difficulty).catch(error => {
        console.error('❌ showDifficulty 실행 오류:', error);
        alert('난이도 화면 로드 중 오류가 발생했습니다. 페이지를 새로고침해주세요.');
    });
};
window.showCodeLength = (difficulty, length) => {
    _showCodeLength(difficulty, length).catch(error => {
        console.error('❌ showCodeLength 실행 오류:', error);
        alert('코드 길이 선택 화면 로드 중 오류가 발생했습니다. 페이지를 새로고침해주세요.');
    });
};
window.startGame = (difficulty, length, codeId) => {
    _startGame(difficulty, length, codeId).catch(error => {
        console.error('❌ startGame 실행 오류:', error);
        alert('게임 시작 중 오류가 발생했습니다. 페이지를 새로고침해주세요.');
    });
};
window.exitGame = exitGame;
window.retryGame = retryGame;
window.sameLevelChallenge = () => {
    _sameLevelChallenge().catch(error => {
        console.error('❌ sameLevelChallenge 실행 오류:', error);
        alert('같은 레벨 문제 로드 중 오류가 발생했습니다. 페이지를 새로고침해주세요.');
    });
};
window.nextLevel = () => {
    _nextLevel().catch(error => {
        console.error('❌ nextLevel 실행 오류:', error);
        alert('다음 레벨 로드 중 오류가 발생했습니다. 페이지를 새로고침해주세요.');
    });
};
window.showStats = showStats;
window.showSettings = showSettings; 