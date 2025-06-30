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
        }
        
        return { 
            success: false, 
            error: `❌ 실행 오류: ${errorMessage}` 
        };
    }
}

// ===== 파이썬 코드 데이터 =====
const PythonCodes = {
    beginner: [
        {
            id: 'b1',
            title: '기본 출력문',
            code: 'print("Hello, World!")',
            description: '파이썬의 가장 기본적인 출력문입니다.'
        },
        {
            id: 'b2',
            title: '변수 선언',
            code: 'name = "Python"\nage = 30\nprint("프로그래밍 언어:", name)\nprint("출시 연도:", 2024 - age)',
            description: '문자열과 숫자 변수를 선언하고 출력합니다.'
        },
        {
            id: 'b3',
            title: '숫자 계산',
            code: 'a = 10\nb = 20\nresult = a + b\nprint(result)',
            description: '간단한 덧셈 계산을 수행합니다.'
        },
        {
            id: 'b4',
            title: '문자열 연결',
            code: 'first_name = "홍"\nlast_name = "길동"\nfull_name = first_name + last_name\nprint(full_name)',
            description: '문자열을 연결하여 새로운 문자열을 만듭니다.'
        },
        {
            id: 'b5',
            title: '리스트 생성',
            code: 'fruits = ["사과", "바나나", "오렌지"]\nprint("과일 목록:", fruits)\nprint("첫 번째 과일:", fruits[0])\nprint("총 과일 개수:", len(fruits))',
            description: '리스트를 생성하고 다양한 정보를 출력합니다.'
        },
        {
            id: 'b6',
            title: '변수 활용',
            code: 'name = "김파이썬"\nage = 25\nprint("안녕하세요, " + name + "님!")\nprint(f"당신의 나이는 {age}세입니다.")',
            description: '변수를 활용하여 개인정보를 출력합니다.'
        },
        {
            id: 'b7',
            title: '주석 작성',
            code: '# 이것은 주석입니다\nprint("Hello")  # 인라인 주석',
            description: '코드에 주석을 추가하는 방법입니다.'
        },
        {
            id: 'b8',
            title: '여러 줄 출력',
            code: 'print("첫 번째 줄")\nprint("두 번째 줄")\nprint("세 번째 줄")',
            description: '여러 줄에 걸쳐 내용을 출력합니다.'
        },
        {
            id: 'b9',
            title: '길이 계산',
            code: 'text = "Python Programming"\nlength = len(text)\nprint(f"문자열 길이: {length}")',
            description: '문자열의 길이를 계산하고 f-string으로 출력합니다.'
        },
        {
            id: 'b10',
            title: '타입 확인',
            code: 'number = 42\ntext = "Hello"\nmy_list = [1, 2, 3]\nprint(f"숫자 {number}의 타입: {type(number).__name__}")\nprint(f"문자열 \'{text}\'의 타입: {type(text).__name__}")\nprint(f"리스트 {my_list}의 타입: {type(my_list).__name__}")',
            description: '다양한 변수의 데이터 타입을 확인합니다.'
        }
    ],
    intermediate: [
        {
            id: 'i1',
            title: '조건문 기본',
            code: 'age = 18\nif age >= 18:\n    print("성인입니다")\nelse:\n    print("미성년자입니다")',
            description: '나이에 따라 다른 메시지를 출력합니다.'
        },
        {
            id: 'i2',
            title: 'for 반복문',
            code: 'for i in range(5):\n    print(f"숫자: {i}")',
            description: '0부터 4까지 숫자를 순서대로 출력합니다.'
        },
        {
            id: 'i3',
            title: 'while 반복문',
            code: 'count = 0\nwhile count < 3:\n    print(f"카운트: {count}")\n    count += 1',
            description: '조건이 참인 동안 반복합니다.'
        },
        {
            id: 'i4',
            title: '함수 정의',
            code: 'def greet(name):\n    return f"안녕하세요, {name}님!"\n\nmessage = greet("파이썬")\nprint(message)',
            description: '함수를 정의하고 호출하는 방법입니다.'
        },
        {
            id: 'i5',
            title: '리스트 반복',
            code: 'colors = ["빨강", "파랑", "노랑"]\nfor color in colors:\n    print(f"색깔: {color}")',
            description: '리스트의 각 요소를 순회합니다.'
        },
        {
            id: 'i6',
            title: '딕셔너리 사용',
            code: 'student = {"이름": "김철수", "나이": 20, "전공": "컴퓨터공학"}\nprint("학생 정보:")\nfor key, value in student.items():\n    print(f"  {key}: {value}")\nprint(f"\\n{student[\"이름\"]}님은 {student[\"나이\"]}세입니다.")',
            description: '딕셔너리를 생성하고 모든 정보를 출력합니다.'
        },
        {
            id: 'i7',
            title: '리스트 컴프리헨션',
            code: 'numbers = [1, 2, 3, 4, 5]\nsquares = [x**2 for x in numbers]\nprint(squares)',
            description: '리스트 컴프리헨션으로 제곱수 리스트를 생성합니다.'
        },
        {
            id: 'i8',
            title: '예외 처리',
            code: 'def safe_divide(a, b):\n    try:\n        result = a / b\n        return f"{a} ÷ {b} = {result}"\n    except ZeroDivisionError:\n        return "0으로 나눌 수 없습니다"\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))',
            description: '안전한 나눗셈을 위한 예외 처리입니다.'
        },
        {
            id: 'i9',
            title: '다중 조건문',
            code: 'score = 85\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelse:\n    grade = "C"\nprint(f"성적: {grade}")',
            description: '여러 조건을 확인하여 등급을 결정합니다.'
        },
        {
            id: 'i10',
            title: '문자열 메서드',
            code: 'text = "  Python Programming  "\nprint(text.strip())\nprint(text.upper())\nprint(text.replace("Python", "자바"))',
            description: '문자열의 다양한 메서드를 사용합니다.'
        }
    ],
    advanced: [
        {
            id: 'a1',
            title: '클래스 정의',
            code: 'class Calculator:\n    def __init__(self):\n        self.result = 0\n    \n    def add(self, num):\n        self.result += num\n        return self.result\n\ncalc = Calculator()\nprint(calc.add(10))\nprint(calc.add(5))',
            description: '계산기 클래스를 정의하고 사용합니다.'
        },
        {
            id: 'a2',
            title: '상속',
            code: 'class Animal:\n    def speak(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        return "멍멍!"\n\nclass Cat(Animal):\n    def speak(self):\n        return "야옹!"\n\ndog = Dog()\nprint(dog.speak())',
            description: '상속을 사용하여 동물 클래스를 확장합니다.'
        },
        {
            id: 'a3',
            title: '데코레이터',
            code: 'def timer(func):\n    def wrapper(*args, **kwargs):\n        print("시작")\n        result = func(*args, **kwargs)\n        print("끝")\n        return result\n    return wrapper\n\n@timer\ndef greet(name):\n    print(f"안녕, {name}!")\n\ngreet("파이썬")',
            description: '데코레이터를 사용하여 함수를 장식합니다.'
        },
        {
            id: 'a4',
            title: '제너레이터',
            code: 'def countdown(n):\n    print(f"카운트다운 시작: {n}")\n    while n > 0:\n        yield n\n        n -= 1\n    print("카운트다운 완료!")\n\nprint("제너레이터 실행:")\nfor num in countdown(5):\n    print(f"현재 숫자: {num}")',
            description: '제너레이터를 사용하여 카운트다운을 구현합니다.'
        },
        {
            id: 'a5',
            title: '람다 함수',
            code: 'numbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))\neven_numbers = list(filter(lambda x: x % 2 == 0, numbers))\nprint(squared)\nprint(even_numbers)',
            description: '람다 함수와 map, filter를 함께 사용합니다.'
        },
        {
            id: 'a6',
            title: '컨텍스트 매니저',
            code: 'class FileManager:\n    def __enter__(self):\n        print("파일 열기")\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print("파일 닫기")\n\nwith FileManager() as fm:\n    print("파일 작업 중...")',
            description: 'with문을 위한 컨텍스트 매니저를 구현합니다.'
        },
        {
            id: 'a7',
            title: '다중 상속',
            code: 'class Flyable:\n    def fly(self):\n        return "날고 있습니다"\n\nclass Swimmable:\n    def swim(self):\n        return "수영하고 있습니다"\n\nclass Duck(Flyable, Swimmable):\n    def quack(self):\n        return "꽥꽥!"\n\nduck = Duck()\nprint(duck.fly())\nprint(duck.swim())',
            description: '다중 상속을 사용하여 여러 능력을 가진 클래스를 만듭니다.'
        },
        {
            id: 'a8',
            title: '정적 메서드와 클래스 메서드',
            code: 'class Calculator:\n    count = 0  # 클래스 변수\n    \n    def __init__(self, name):\n        self.name = name\n        Calculator.count += 1\n    \n    @staticmethod\n    def add(a, b):\n        return a + b\n    \n    @classmethod\n    def get_count(cls):\n        return cls.count\n\ncalc1 = Calculator("계산기1")\ncalc2 = Calculator("계산기2")\nprint(Calculator.add(5, 3))\nprint(Calculator.get_count())',
            description: '정적 메서드와 클래스 메서드를 활용합니다.'
        },
        {
            id: 'a9',
            title: '모듈과 패키지',
            code: 'import math\nimport random\nfrom datetime import datetime\n\n# 수학 함수 사용\nprint(f"원주율: {math.pi:.2f}")\nprint(f"제곱근: {math.sqrt(16)}")\n\n# 랜덤 함수 사용\nprint(f"랜덤 숫자: {random.randint(1, 10)}")\n\n# 날짜와 시간\nnow = datetime.now()\nprint(f"현재 시간: {now.strftime(\'%Y-%m-%d %H:%M:%S\')}")',
            description: '다양한 모듈을 import하여 사용합니다.'
        },
        {
            id: 'a10',
            title: '프로퍼티 활용',
            code: 'class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    \n    @property\n    def radius(self):\n        return self._radius\n    \n    @radius.setter\n    def radius(self, value):\n        if value > 0:\n            self._radius = value\n        else:\n            print("반지름은 양수여야 합니다")\n    \n    @property\n    def area(self):\n        return 3.14159 * self._radius ** 2\n\ncircle = Circle(5)\nprint(f"반지름: {circle.radius}")\nprint(f"넓이: {circle.area:.2f}")\ncircle.radius = 10\nprint(f"새 넓이: {circle.area:.2f}")',
            description: '프로퍼티를 사용하여 원의 넓이를 계산합니다.'
        }
    ]
};

// ===== 유틸리티 함수 =====
function showScreen(screenId) {
    // 모든 화면 숨기기
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // 요청된 화면 표시
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        AppState.currentScreen = screenId;
        console.log(`화면 전환: ${screenId}`);
    } else {
        console.error(`화면을 찾을 수 없습니다: ${screenId}`);
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
        
        // 새 난이도 해금 체크
        this.checkUnlockLevels();
    }
    
    static checkUnlockLevels() {
        const progress = JSON.parse(localStorage.getItem('gameProgress') || '{}');
        
        // 초급 완료 체크
        const beginnerCodes = PythonCodes.beginner;
        const beginnerCompleted = beginnerCodes.filter(code => 
            progress.beginner && progress.beginner[code.id] && progress.beginner[code.id].completed
        ).length;
        
        // 중급 해금 체크 (초급 70% 이상 완료)
        const intermediateCard = document.querySelector('.difficulty-card.intermediate');
        const wasIntermediateLocked = intermediateCard.classList.contains('locked');
        
        if (beginnerCompleted >= Math.ceil(beginnerCodes.length * 0.7)) {
            intermediateCard.classList.remove('locked');
            const intermediateLock = intermediateCard.querySelector('.lock-overlay');
            if (intermediateLock) {
                intermediateLock.classList.add('unlocked');
                // 완전히 숨기기 위해 애니메이션 후 display none
                setTimeout(() => {
                    intermediateLock.style.display = 'none';
                }, 500);
            }
            
            // 새로 해금된 경우 알림 표시
            if (wasIntermediateLocked) {
                this.showUnlockNotification('중급 레벨이 해금되었습니다! 🔓');
            }
        }
        
        // 중급 완료 체크  
        const intermediateCodes = PythonCodes.intermediate;
        const intermediateCompleted = intermediateCodes.filter(code => 
            progress.intermediate && progress.intermediate[code.id] && progress.intermediate[code.id].completed
        ).length;
        
        // 고급 해금 체크 (중급 70% 이상 완료)
        const advancedCard = document.querySelector('.difficulty-card.advanced');
        const wasAdvancedLocked = advancedCard.classList.contains('locked');
        
        if (intermediateCompleted >= Math.ceil(intermediateCodes.length * 0.7)) {
            advancedCard.classList.remove('locked');
            const advancedLock = advancedCard.querySelector('.lock-overlay');
            if (advancedLock) {
                advancedLock.classList.add('unlocked');
                // 완전히 숨기기 위해 애니메이션 후 display none
                setTimeout(() => {
                    advancedLock.style.display = 'none';
                }, 500);
            }
            
            // 새로 해금된 경우 알림 표시
            if (wasAdvancedLocked) {
                this.showUnlockNotification('고급 레벨이 해금되었습니다! 🔓');
            }
        }
    }
    
    static showUnlockNotification(message) {
        // 기존 알림이 있다면 제거
        const existingNotification = document.getElementById('unlock-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // 새 알림 생성
        const notification = document.createElement('div');
        notification.id = 'unlock-notification';
        notification.className = 'unlock-notification';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // 애니메이션으로 표시
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // 3초 후 자동 제거
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }
    
    static getProgress(difficulty) {
        const progress = JSON.parse(localStorage.getItem('gameProgress') || '{}');
        const codes = PythonCodes[difficulty];
        
        const completed = codes.filter(code => 
            progress[difficulty] && progress[difficulty][code.id] && progress[difficulty][code.id].completed
        ).length;
        
        return {
            completed: completed,
            total: codes.length,
            percentage: Math.round((completed / codes.length) * 100)
        };
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
            
            // 스크롤 동기화
            textarea.addEventListener('scroll', () => {
                this.syncScroll();
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
            
            console.log('✅ 타겟 코드 업데이트 완료 (플레인 텍스트)');
        }
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
        this.updateLineHighlighting();
    }
    
    updateLineHighlighting() {
        const textarea = document.getElementById('user-code-input');
        const userLineNumbers = document.getElementById('user-line-numbers');
        const targetLineNumbers = document.getElementById('target-line-numbers');
        
        if (!textarea || !userLineNumbers || !targetLineNumbers) return;
        
        const userText = textarea.value;
        const targetLines = this.targetText.split('\n');
        const userLines = userText.split('\n');
        
        // 타겟 에디터 라인 상태 업데이트
        const targetLineElems = targetLineNumbers.querySelectorAll('.line-number');
        targetLineElems.forEach((lineElem, index) => {
            const targetLine = targetLines[index] || '';
            const userLine = userLines[index] || '';
            
            // 기존 클래스 제거
            lineElem.classList.remove('line-correct', 'line-error', 'line-current', 'line-incomplete');
            
            if (index >= userLines.length) {
                lineElem.classList.add('line-incomplete');
                lineElem.setAttribute('data-status', '○');
            } else if (userLine === targetLine) {
                lineElem.classList.add('line-correct');
                lineElem.setAttribute('data-status', '✓');
            } else if (userLine.length === 0) {
                lineElem.classList.add('line-current');
                lineElem.setAttribute('data-status', '►');
            } else {
                lineElem.classList.add('line-error');
                lineElem.setAttribute('data-status', '✗');
            }
        });
    }
    
    syncScroll() {
        const textarea = document.getElementById('user-code-input');
        const userLineNumbers = document.getElementById('user-line-numbers');
        
        if (textarea && userLineNumbers) {
            userLineNumbers.scrollTop = textarea.scrollTop;
        }
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
        this.targetText = code;
        this.isPaused = false; // 일시정지 상태 추가
        
        // Monaco Editor 초기화
        this.initializeEditors();
        
        // 타겟 에디터에 코드 설정
        if (this.targetEditor) {
            this.targetEditor.setValue(code);
        }
        
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
        
        const userText = this.userEditor.getValue();
        const targetText = this.targetText;
        
        // 첫 번째 입력 시 타이머 시작
        if (!this.startTime && userText.length > 0) {
            this.startTime = Date.now();
            this.startTimer();
        }
        
        // 길이 제한
        if (userText.length > targetText.length) {
            this.userEditor.setValue(userText.substring(0, targetText.length));
            return;
        }
        
        // 기존 textarea 동기화 (호환성 유지)
        document.getElementById('user-input').value = userText;
        
        // 실시간 라인별 하이라이팅
        this.highlightLines();
        
        // 실시간으로 100% 일치 여부 검사 (수정 모드에서도 동작)
        this.checkFinalCompletion(userText, targetText);
        
        // 길이가 같을 때 추가 검사 (기존 로직 유지)
        if (userText.length === targetText.length) {
            // 이미 위에서 검사했으므로 중복 호출 방지
            // this.checkFinalCompletion(userText, targetText);
        }
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
        
        const userText = e.target.value;
        const targetText = this.targetText;
        
        // 첫 번째 입력 시 타이머 시작
        if (!this.startTime && userText.length > 0) {
            this.startTime = Date.now();
            this.startTimer();
        }
        
        // 길이 제한
        if (userText.length > targetText.length) {
            e.target.value = userText.substring(0, targetText.length);
            return;
        }
        
        // 실시간 하이라이팅
        this.highlightText(userText, targetText);
        
        // 실시간으로 100% 일치 여부 검사 (수정 모드에서도 동작)
        this.checkFinalCompletion(userText, targetText);
        
        // 길이가 같을 때 추가 검사 (기존 로직 유지)
        if (userText.length === targetText.length) {
            // 이미 위에서 검사했으므로 중복 호출 방지
            // this.checkFinalCompletion(userText, targetText);
        }
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
        
        // CodeMirror 에디터에서 텍스트 가져오기 (우선순위)
        let userText = '';
        if (this.userEditor) {
            userText = this.userEditor.getValue();
        } else {
            const userInput = document.getElementById('user-input');
            userText = userInput ? userInput.value : '';
        }
        
        const timeElapsed = Math.floor((Date.now() - this.startTime - this.pausedTime) / 1000);
        
        // 라인별 정확도 계산
        const targetLines = this.targetText.split('\n');
        const userLines = userText.split('\n');
        
        let correctChars = 0;
        let errorCount = 0;
        let totalTypedChars = userText.length;
        
        // 문자별 정확도 계산 (기존 방식 유지)
        for (let i = 0; i < userText.length; i++) {
            if (userText[i] === this.targetText[i]) {
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
        
        // 사용자가 입력한 코드 표시 (CodeMirror 우선, textarea 대안)
        let userInput = '';
        if (this.userEditor) {
            userInput = this.userEditor.getValue();
        } else {
            const inputElement = document.getElementById('user-input');
            userInput = inputElement ? inputElement.value : '';
        }
        
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
}

// ===== 화면 전환 함수들 =====
function showDifficulty(difficulty) {
    if (document.querySelector(`.difficulty-card.${difficulty}`).classList.contains('locked')) {
        return;
    }
    
    AppState.currentDifficulty = difficulty;
    
    // 제목 업데이트
    const titles = {
        beginner: '초급 레벨',
        intermediate: '중급 레벨',  
        advanced: '고급 레벨'
    };
    updateProgressElement('difficulty-title', titles[difficulty]);
    
    // 코드 목록 로드 (진도 업데이트도 함께 처리됨)
    loadCodeList(difficulty);
    showScreen('difficulty-screen');
}

function loadCodeList(difficulty) {
    const codeList = document.getElementById('code-list');
    const codes = PythonCodes[difficulty];
    const progress = JSON.parse(localStorage.getItem('gameProgress') || '{}');
    
    // 난이도별 설명 업데이트
    const descriptions = {
        beginner: '파이썬의 기본 문법과 간단한 출력문을 연습합니다',
        intermediate: '조건문, 반복문, 함수 등 중급 문법을 학습합니다',
        advanced: '클래스, 모듈, 복잡한 알고리즘을 마스터합니다'
    };
    
    updateProgressElement('difficulty-description', descriptions[difficulty]);
    
    // 진행률 업데이트 - 안전하게
    const progressData = StorageManager.getProgress(difficulty);
    updateProgressElement('progress-text', `${progressData.completed}/${progressData.total} 완료`);
    updateProgressElement('progress-percentage', `${progressData.percentage}%`);
    
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = `${progressData.percentage}%`;
    } else {
        console.warn('⚠️ progress-fill 요소를 찾을 수 없습니다.');
    }
    
    codeList.innerHTML = codes.map((code, index) => {
        const isCompleted = progress[difficulty] && progress[difficulty][code.id] && progress[difficulty][code.id].completed;
        const isLocked = false; // 초급은 모두 해금, 다른 레벨은 순차 해금 로직 필요
        const levelNumber = index + 1;
        
        // 상태 결정
        let statusClass, statusIcon;
        if (isCompleted) {
            statusClass = 'completed';
            statusIcon = '<i class="fas fa-check"></i>';
        } else if (isLocked) {
            statusClass = 'locked';
            statusIcon = '<i class="fas fa-lock"></i>';
        } else {
            statusClass = 'available';
            statusIcon = '<i class="fas fa-play"></i>';
        }
        
        // 난이도 별표 생성
        const difficultyLevel = getDifficultyLevel(difficulty, index);
        const difficultyStars = Array.from({length: 5}, (_, i) => {
            const starClass = i < difficultyLevel ? 'filled' : 'empty';
            return `<div class="difficulty-star ${starClass}"></div>`;
        }).join('');
        
        const completedClass = isCompleted ? 'completed' : '';
        const clickHandler = isLocked ? '' : `onclick="startGame('${difficulty}', '${code.id}')"`;
        
        return `
            <div class="code-item ${completedClass}" ${clickHandler}>
                <div class="code-item-header">
                    <div class="code-level-badge">Level ${levelNumber}</div>
                    <div class="code-status">
                        <div class="status-icon ${statusClass}">${statusIcon}</div>
                    </div>
                </div>
                <div class="code-item-content">
                    <h4>${code.title}</h4>
                    <p>${code.description}</p>
                    <pre class="code-preview">${code.code.length > 100 ? code.code.substring(0, 100) + '...' : code.code}</pre>
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
}

// 난이도 레벨 계산 함수
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

function startGame(difficulty, codeId) {
    const code = PythonCodes[difficulty].find(c => c.id === codeId);
    if (!code) {
        console.error('❌ 코드를 찾을 수 없습니다:', difficulty, codeId);
        return;
    }
    
    // 현재 난이도와 코드 설정
    AppState.currentDifficulty = difficulty;
    AppState.currentCode = code;
    
    // 게임 화면 설정 - 안전하게
    const levelNumber = PythonCodes[difficulty].findIndex(c => c.id === codeId) + 1;
    updateGameHeader('current-level', `Level ${levelNumber}`);
    updateGameHeader('current-title', code.title);
    
    // 게임 시작
    try {
        const game = new TypingGame();
        AppState.gameSession = game;
        game.start(code.code);
        
        showScreen('game-screen');
        console.log('✅ 게임 시작:', difficulty, code.title);
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
    if (AppState.gameTimer) {
        clearInterval(AppState.gameTimer);
        AppState.gameTimer = null;
    }
    
    // 현재 난이도가 설정되어 있으면 해당 난이도 화면으로, 없으면 메인 메뉴로
    if (AppState.currentDifficulty) {
        showDifficulty(AppState.currentDifficulty);
    } else {
        showScreen('main-menu');
    }
}

function retryGame() {
    if (AppState.currentCode) {
        startGame(AppState.currentDifficulty, AppState.currentCode.id);
    }
}

function nextLevel() {
    const codes = PythonCodes[AppState.currentDifficulty];
    const currentIndex = codes.findIndex(c => c.id === AppState.currentCode.id);
    
    if (currentIndex < codes.length - 1) {
        const nextCode = codes[currentIndex + 1];
        startGame(AppState.currentDifficulty, nextCode.id);
    } else {
        // 다음 난이도로
        if (AppState.currentDifficulty === 'beginner') {
            showDifficulty('intermediate');
        } else if (AppState.currentDifficulty === 'intermediate') {
            showDifficulty('advanced');
        } else {
            showScreen('main-menu');
        }
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
function initializePythonTypeAcademy() {
    console.log('🐍 Python Type Academy 초기화 시작...');
    
    try {
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
        
        // 진도 기반 레벨 해금
        StorageManager.checkUnlockLevels();
        
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
        
        // 앱 상태 초기화
        AppState.currentScreen = 'main-menu';
        
        console.log('✅ Python Type Academy 로드 완료!');
        console.log('📊 현재 초급 진도:', StorageManager.getProgress('beginner'));
        
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

// HTML에서 호출할 수 있도록 전역 함수로 등록
window.initializeApp = initializePythonTypeAcademy;

// 기존 방식도 유지 (안전장치)
document.addEventListener('DOMContentLoaded', function() {
    // 라이브러리가 아직 로드되지 않았다면 잠시 기다림
    if (window.libraryLoadStatus && !window.libraryLoadStatus.allLoaded) {
        console.log('⏳ 라이브러리 로딩 대기 중...');
        return;
    }
    
    // 직접 초기화 (HTML의 초기화 함수가 호출되지 않은 경우)
    if (typeof window.initializeApp === 'function') {
        window.initializeApp();
    } else {
        initializePythonTypeAcademy();
    }
});

// ===== 전역 함수 (HTML에서 호출) =====
window.showScreen = showScreen;
window.showDifficulty = showDifficulty;
window.startGame = startGame;
window.exitGame = exitGame;
window.retryGame = retryGame;
window.nextLevel = nextLevel;
window.showStats = showStats;
window.showSettings = showSettings; 