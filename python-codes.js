// ===== 파이썬 코드 데이터베이스 v2.0 =====
// 각 레벨마다 여러 예제와 짧은/긴 코드 연습 포함

const PythonCodes = {
    beginner: {
        short: [
            // Level 1: 기본 출력문 (3개 예제)
            {
                id: 'b_s1_1',
                title: '기본 출력문',
                code: 'print("Hello, World!")',
                description: '파이썬의 가장 기본적인 출력문입니다.',
                category: 'basic',
                levelGroup: 1
            },
            {
                id: 'b_s1_2',
                title: '환영 메시지',
                code: 'print("파이썬에 오신 것을 환영합니다!")',
                description: '환영 메시지를 출력하는 기본 예제입니다.',
                category: 'basic',
                levelGroup: 1
            },
            {
                id: 'b_s1_3',
                title: '간단한 인사',
                code: 'print("안녕하세요, 파이썬!")',
                description: '한국어로 인사하는 기본 출력문입니다.',
                category: 'basic',
                levelGroup: 1
            },
            
            // Level 2: 여러 줄 출력 (3개 예제)
            {
                id: 'b_s2_1',
                title: '인사말 출력',
                code: 'print("안녕하세요!")\nprint("파이썬을 배워봅시다!")',
                description: '여러 줄의 인사말을 출력합니다.',
                category: 'basic',
                levelGroup: 2
            },
            {
                id: 'b_s2_2',
                title: '프로그램 소개',
                code: 'print("Python Type Academy")\nprint("타자 연습을 시작합니다!")',
                description: '프로그램을 소개하는 메시지를 출력합니다.',
                category: 'basic',
                levelGroup: 2
            },
            {
                id: 'b_s2_3',
                title: '일일 인사',
                code: 'print("좋은 아침입니다!")\nprint("오늘도 열심히 코딩해요!")',
                description: '일일 인사와 격려 메시지를 출력합니다.',
                category: 'basic',
                levelGroup: 2
            },
            
            // Level 3: 간단한 계산 (3개 예제)
            {
                id: 'b_s3_1',
                title: '덧셈 계산',
                code: 'result = 5 + 3\nprint(result)',
                description: '간단한 덧셈을 계산하고 출력합니다.',
                category: 'arithmetic',
                levelGroup: 3
            },
            {
                id: 'b_s3_2',
                title: '곱셈 계산',
                code: 'result = 7 * 4\nprint(result)',
                description: '간단한 곱셈을 계산하고 출력합니다.',
                category: 'arithmetic',
                levelGroup: 3
            },
            {
                id: 'b_s3_3',
                title: '나눗셈 계산',
                code: 'result = 10 / 2\nprint(result)',
                description: '간단한 나눗셈을 계산하고 출력합니다.',
                category: 'arithmetic',
                levelGroup: 3
            },
            
            // Level 4: 변수 선언 (3개 예제)
            {
                id: 'b_s4_1',
                title: '문자열 변수',
                code: 'name = "Python"\nprint(name)',
                description: '문자열 변수를 선언하고 출력합니다.',
                category: 'variables',
                levelGroup: 4
            },
            {
                id: 'b_s4_2',
                title: '좋아하는 언어',
                code: 'language = "Python"\nprint("좋아하는 언어:", language)',
                description: '좋아하는 프로그래밍 언어를 변수로 저장합니다.',
                category: 'variables',
                levelGroup: 4
            },
            {
                id: 'b_s4_3',
                title: '학교 이름',
                code: 'school = "Python Academy"\nprint("학교:", school)',
                description: '학교 이름을 변수로 저장하고 출력합니다.',
                category: 'variables',
                levelGroup: 4
            },
            
            // Level 5: 숫자 변수 (3개 예제)
            {
                id: 'b_s5_1',
                title: '나이 변수',
                code: 'age = 25\nprint("나이:", age)',
                description: '숫자 변수를 사용하여 나이를 저장합니다.',
                category: 'variables',
                levelGroup: 5
            },
            {
                id: 'b_s5_2',
                title: '점수 변수',
                code: 'score = 95\nprint("점수:", score)',
                description: '시험 점수를 변수로 저장하고 출력합니다.',
                category: 'variables',
                levelGroup: 5
            },
            {
                id: 'b_s5_3',
                title: '온도 변수',
                code: 'temperature = 23\nprint("온도:", temperature, "도")',
                description: '현재 온도를 변수로 저장하고 출력합니다.',
                category: 'variables',
                levelGroup: 5
            }
        ],
        medium: [
            // 중간 코드 (4-8줄)
            {
                id: 'b_m1',
                title: '사용자 정보 출력',
                code: 'name = "김파이썬"\nage = 25\nprint("안녕하세요, " + name + "님!")\nprint(f"당신의 나이는 {age}세입니다.")',
                description: '변수를 활용하여 개인정보를 출력합니다.',
                category: 'variables'
            },
            {
                id: 'b_m2',
                title: '계산기 기초',
                code: 'a = 10\nb = 20\nsum_result = a + b\ndiff_result = a - b\nprint("합:", sum_result)\nprint("차:", diff_result)',
                description: '두 숫자의 합과 차이를 계산합니다.',
                category: 'arithmetic'
            },
            {
                id: 'b_m3',
                title: '리스트 다루기',
                code: 'colors = ["빨강", "파랑", "노랑"]\nprint("색깔 목록:", colors)\nprint("첫 번째 색깔:", colors[0])\nprint("색깔 개수:", len(colors))',
                description: '리스트의 요소에 접근하고 길이를 확인합니다.',
                category: 'data_structures'
            },
            {
                id: 'b_m4',
                title: '문자열 정보',
                code: 'text = "Python Programming"\nlength = len(text)\nuppercase = text.upper()\nprint(f"문자열: {text}")\nprint(f"길이: {length}")\nprint(f"대문자: {uppercase}")',
                description: '문자열의 다양한 정보를 출력합니다.',
                category: 'strings'
            },
            {
                id: 'b_m5',
                title: '타입 확인',
                code: 'number = 42\ntext = "Hello"\nmy_list = [1, 2, 3]\nprint(f"숫자의 타입: {type(number).__name__}")\nprint(f"문자열의 타입: {type(text).__name__}")\nprint(f"리스트의 타입: {type(my_list).__name__}")',
                description: '다양한 변수의 데이터 타입을 확인합니다.',
                category: 'basic'
            }
        ],
        long: [
            // 긴 코드 (9줄 이상) - 실전 예제
            {
                id: 'b_l1',
                title: '학생 성적 관리',
                code: 'student_name = "김철수"\nkorean = 85\nenglish = 92\nmath = 78\n\ntotal = korean + english + math\naverage = total / 3\n\nprint("=== 성적표 ===")\nprint(f"학생 이름: {student_name}")\nprint(f"국어: {korean}점")\nprint(f"영어: {english}점")\nprint(f"수학: {math}점")\nprint(f"총점: {total}점")\nprint(f"평균: {average:.1f}점")',
                description: '학생의 성적을 관리하는 프로그램입니다.',
                category: 'practical'
            },
            {
                id: 'b_l2',
                title: '쇼핑 목록 관리',
                code: 'shopping_list = ["우유", "빵", "계란", "사과", "바나나"]\nprices = [2500, 3000, 4000, 1500, 2000]\n\nprint("=== 쇼핑 목록 ===")\ntotal_cost = 0\n\nfor i in range(len(shopping_list)):\n    item = shopping_list[i]\n    price = prices[i]\n    print(f"{i+1}. {item}: {price}원")\n    total_cost += price\n\nprint(f"\\n총 비용: {total_cost}원")\nprint(f"평균 가격: {total_cost / len(shopping_list):.0f}원")',
                description: '쇼핑 목록과 가격을 관리하는 프로그램입니다.',
                category: 'practical'
            },
            {
                id: 'b_l3',
                title: '도서관 책 정보',
                code: 'books = [\n    ["파이썬 입문", "김코딩", 2023],\n    ["데이터 과학", "이분석", 2022],\n    ["웹 개발", "박웹마스터", 2024]\n]\n\nprint("=== 도서관 책 목록 ===")\nfor i, book in enumerate(books):\n    title, author, year = book\n    print(f"{i+1}. 제목: {title}")\n    print(f"   저자: {author}")\n    print(f"   출판년도: {year}년")\n    print()\n\nprint(f"총 {len(books)}권의 책이 있습니다.")',
                description: '도서관의 책 정보를 관리하는 프로그램입니다.',
                category: 'practical'
            }
        ]
    },
    intermediate: {
        short: [
            {
                id: 'i_s1',
                title: '조건문 기본',
                code: 'age = 18\nif age >= 18:\n    print("성인입니다")\nelse:\n    print("미성년자입니다")',
                description: '나이에 따라 다른 메시지를 출력합니다.',
                category: 'conditionals'
            },
            {
                id: 'i_s2',
                title: '간단한 반복',
                code: 'for i in range(3):\n    print(f"반복 {i+1}번째")',
                description: '간단한 for 반복문을 사용합니다.',
                category: 'loops'
            },
            {
                id: 'i_s3',
                title: 'while 기본',
                code: 'count = 0\nwhile count < 3:\n    print(f"카운트: {count}")\n    count += 1',
                description: 'while 반복문의 기본 사용법입니다.',
                category: 'loops'
            },
            {
                id: 'i_s4',
                title: '함수 정의',
                code: 'def greet(name):\n    return f"안녕하세요, {name}님!"\n\nmessage = greet("파이썬")\nprint(message)',
                description: '간단한 함수를 정의하고 호출합니다.',
                category: 'functions'
            },
            {
                id: 'i_s5',
                title: '리스트 반복',
                code: 'colors = ["빨강", "파랑", "노랑"]\nfor color in colors:\n    print(f"색깔: {color}")',
                description: '리스트의 각 요소를 순회합니다.',
                category: 'loops'
            }
        ],
        medium: [
            {
                id: 'i_m1',
                title: '성적 등급 계산',
                code: 'score = 85\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelse:\n    grade = "F"\nprint(f"점수: {score}, 등급: {grade}")',
                description: '점수에 따라 등급을 계산합니다.',
                category: 'conditionals'
            },
            {
                id: 'i_m2',
                title: '딕셔너리 활용',
                code: 'student = {"이름": "김철수", "나이": 20, "전공": "컴퓨터공학"}\nprint("학생 정보:")\nfor key, value in student.items():\n    print(f"  {key}: {value}")\nprint(f"\\n{student[\"이름\"]}님은 {student[\"나이\"]}세입니다.")',
                description: '딕셔너리를 생성하고 정보를 출력합니다.',
                category: 'data_structures'
            },
            {
                id: 'i_m3',
                title: '리스트 컴프리헨션',
                code: 'numbers = [1, 2, 3, 4, 5]\nsquares = [x**2 for x in numbers]\neven_squares = [x**2 for x in numbers if x % 2 == 0]\nprint("제곱수:", squares)\nprint("짝수의 제곱:", even_squares)',
                description: '리스트 컴프리헨션으로 새로운 리스트를 생성합니다.',
                category: 'data_structures'
            },
            {
                id: 'i_m4',
                title: '예외 처리',
                code: 'def safe_divide(a, b):\n    try:\n        result = a / b\n        return f"{a} ÷ {b} = {result}"\n    except ZeroDivisionError:\n        return "0으로 나눌 수 없습니다"\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))',
                description: '안전한 나눗셈을 위한 예외 처리입니다.',
                category: 'error_handling'
            }
        ],
        long: [
            {
                id: 'i_l1',
                title: '간단한 게임: 숫자 맞추기',
                code: 'import random\n\ndef number_guessing_game():\n    target = random.randint(1, 10)\n    attempts = 0\n    max_attempts = 3\n    \n    print("=== 숫자 맞추기 게임 ===")\n    print("1부터 10 사이의 숫자를 맞춰보세요!")\n    print(f"기회는 {max_attempts}번입니다.")\n    \n    for attempt in range(max_attempts):\n        guess = int(input(f"시도 {attempt + 1}: "))\n        attempts += 1\n        \n        if guess == target:\n            print(f"정답! {attempts}번 만에 맞췄습니다!")\n            return\n        elif guess < target:\n            print("더 큰 수입니다.")\n        else:\n            print("더 작은 수입니다.")\n    \n    print(f"게임 종료! 정답은 {target}이었습니다.")\n\nnumber_guessing_game()',
                description: '랜덤 숫자를 맞추는 간단한 게임입니다.',
                category: 'games'
            },
            {
                id: 'i_l2',
                title: '은행 계좌 관리 시스템',
                code: 'class BankAccount:\n    def __init__(self, name, initial_balance=0):\n        self.name = name\n        self.balance = initial_balance\n        self.transactions = []\n    \n    def deposit(self, amount):\n        self.balance += amount\n        self.transactions.append(f"입금: +{amount}원")\n        print(f"{amount}원이 입금되었습니다.")\n    \n    def withdraw(self, amount):\n        if self.balance >= amount:\n            self.balance -= amount\n            self.transactions.append(f"출금: -{amount}원")\n            print(f"{amount}원이 출금되었습니다.")\n        else:\n            print("잔액이 부족합니다.")\n    \n    def show_balance(self):\n        print(f"현재 잔액: {self.balance}원")\n    \n    def show_transactions(self):\n        print("=== 거래 내역 ===")\n        for transaction in self.transactions:\n            print(transaction)\n\n# 계좌 생성 및 사용\naccount = BankAccount("김은행", 10000)\naccount.show_balance()\naccount.deposit(5000)\naccount.withdraw(3000)\naccount.show_balance()\naccount.show_transactions()',
                description: '간단한 은행 계좌 관리 시스템입니다.',
                category: 'practical'
            },
            {
                id: 'i_l3',
                title: '할일 목록 관리자',
                code: 'class TodoManager:\n    def __init__(self):\n        self.todos = []\n        self.completed = []\n    \n    def add_todo(self, task):\n        self.todos.append(task)\n        print(f"할일 추가: {task}")\n    \n    def complete_todo(self, index):\n        if 0 <= index < len(self.todos):\n            completed_task = self.todos.pop(index)\n            self.completed.append(completed_task)\n            print(f"완료: {completed_task}")\n        else:\n            print("잘못된 번호입니다.")\n    \n    def show_todos(self):\n        print("\\n=== 할일 목록 ===")\n        if not self.todos:\n            print("할일이 없습니다!")\n        else:\n            for i, todo in enumerate(self.todos):\n                print(f"{i + 1}. {todo}")\n        \n        print("\\n=== 완료된 할일 ===")\n        for task in self.completed:\n            print(f"✓ {task}")\n\n# 할일 관리자 사용\ntodo_manager = TodoManager()\ntodo_manager.add_todo("파이썬 공부하기")\ntodo_manager.add_todo("운동하기")\ntodo_manager.add_todo("책 읽기")\ntodo_manager.show_todos()\ntodo_manager.complete_todo(0)\ntodo_manager.show_todos()',
                description: '할일 목록을 관리하는 프로그램입니다.',
                category: 'practical'
            }
        ]
    },
    advanced: {
        short: [
            {
                id: 'a_s1',
                title: '람다 함수',
                code: 'numbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))\nprint(squared)',
                description: '람다 함수와 map을 함께 사용합니다.',
                category: 'functional'
            },
            {
                id: 'a_s2',
                title: '클래스 기본',
                code: 'class Calculator:\n    def add(self, a, b):\n        return a + b\n\ncalc = Calculator()\nresult = calc.add(5, 3)\nprint(result)',
                description: '간단한 클래스를 정의하고 사용합니다.',
                category: 'oop'
            },
            {
                id: 'a_s3',
                title: '제너레이터 기본',
                code: 'def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor num in countdown(3):\n    print(num)',
                description: '간단한 제너레이터를 만들고 사용합니다.',
                category: 'generators'
            }
        ],
        medium: [
            {
                id: 'a_m1',
                title: '상속과 다형성',
                code: 'class Animal:\n    def speak(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        return "멍멍!"\n\nclass Cat(Animal):\n    def speak(self):\n        return "야옹!"\n\nanimals = [Dog(), Cat()]\nfor animal in animals:\n    print(animal.speak())',
                description: '상속과 다형성을 활용한 예제입니다.',
                category: 'oop'
            },
            {
                id: 'a_m2',
                title: '데코레이터',
                code: 'def timer(func):\n    def wrapper(*args, **kwargs):\n        print("함수 시작")\n        result = func(*args, **kwargs)\n        print("함수 종료")\n        return result\n    return wrapper\n\n@timer\ndef greet(name):\n    print(f"안녕, {name}!")\n\ngreet("파이썬")',
                description: '데코레이터를 사용하여 함수를 장식합니다.',
                category: 'decorators'
            },
            {
                id: 'a_m3',
                title: '컨텍스트 매니저',
                code: 'class FileManager:\n    def __enter__(self):\n        print("파일 열기")\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print("파일 닫기")\n        return False\n\nwith FileManager() as fm:\n    print("파일 작업 중...")\nprint("작업 완료")',
                description: 'with문을 위한 컨텍스트 매니저를 구현합니다.',
                category: 'context_managers'
            }
        ],
        long: [
            {
                id: 'a_l1',
                title: '웹 스크래핑 시뮬레이터',
                code: 'import re\nfrom urllib.parse import urlparse\n\nclass WebScraper:\n    def __init__(self):\n        self.scraped_data = []\n        self.patterns = {\n            "email": r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",\n            "phone": r"\\d{3}-\\d{4}-\\d{4}",\n            "url": r"https?://[\\w\\.-]+\\.[a-zA-Z]{2,}[\\w\\.-]*/?[\\w\\.-]*"\n        }\n    \n    def extract_data(self, text, data_type):\n        if data_type in self.patterns:\n            pattern = self.patterns[data_type]\n            matches = re.findall(pattern, text)\n            return matches\n        return []\n    \n    def scrape_sample_data(self):\n        sample_text = """\n        연락처: 010-1234-5678, 이메일: test@example.com\n        웹사이트: https://www.python.org\n        또 다른 연락처: 010-9876-5432\n        이메일: admin@company.co.kr\n        """\n        \n        print("=== 웹 스크래핑 결과 ===")\n        \n        for data_type in self.patterns:\n            extracted = self.extract_data(sample_text, data_type)\n            print(f"{data_type.upper()}: {extracted}")\n            self.scraped_data.extend(extracted)\n        \n        print(f"\\n총 {len(self.scraped_data)}개의 데이터를 추출했습니다.")\n        return self.scraped_data\n\n# 웹 스크래퍼 사용\nscraper = WebScraper()\nresults = scraper.scrape_sample_data()',
                description: '정규표현식을 활용한 웹 스크래핑 시뮬레이터입니다.',
                category: 'web'
            },
            {
                id: 'a_l2',
                title: '데이터 분석 도구',
                code: 'import statistics\nfrom collections import Counter\n\nclass DataAnalyzer:\n    def __init__(self, data):\n        self.data = data\n        self.analysis_results = {}\n    \n    def basic_statistics(self):\n        if not self.data:\n            return "데이터가 없습니다."\n        \n        results = {\n            "평균": statistics.mean(self.data),\n            "중앙값": statistics.median(self.data),\n            "최댓값": max(self.data),\n            "최솟값": min(self.data),\n            "범위": max(self.data) - min(self.data),\n            "표준편차": statistics.stdev(self.data) if len(self.data) > 1 else 0\n        }\n        \n        self.analysis_results["기본통계"] = results\n        return results\n    \n    def frequency_analysis(self):\n        frequency = Counter(self.data)\n        most_common = frequency.most_common(3)\n        \n        self.analysis_results["빈도분석"] = {\n            "전체빈도": dict(frequency),\n            "상위3개": most_common\n        }\n        \n        return frequency\n    \n    def generate_report(self):\n        print("=== 데이터 분석 보고서 ===")\n        print(f"데이터 개수: {len(self.data)}")\n        print(f"원본 데이터: {self.data}\\n")\n        \n        # 기본 통계\n        basic_stats = self.basic_statistics()\n        print("📊 기본 통계:")\n        for key, value in basic_stats.items():\n            if isinstance(value, float):\n                print(f"  {key}: {value:.2f}")\n            else:\n                print(f"  {key}: {value}")\n        \n        # 빈도 분석\n        frequency = self.frequency_analysis()\n        print("\\n📈 빈도 분석:")\n        for value, count in frequency.most_common():\n            print(f"  {value}: {count}번")\n\n# 샘플 데이터로 분석 실행\nsample_data = [85, 92, 78, 95, 88, 85, 90, 78, 92, 85, 88, 95]\nanalyzer = DataAnalyzer(sample_data)\nanalyzer.generate_report()',
                description: '통계 분석을 수행하는 데이터 분석 도구입니다.',
                category: 'data_science'
            },
            {
                id: 'a_l3',
                title: 'API 클라이언트 시뮬레이터',
                code: 'import json\nfrom datetime import datetime\n\nclass APIClient:\n    def __init__(self, base_url="https://api.example.com"):\n        self.base_url = base_url\n        self.headers = {"Content-Type": "application/json"}\n        self.session_data = {}\n        \n    def simulate_get_request(self, endpoint, params=None):\n        # 실제 API 요청 시뮬레이션\n        mock_responses = {\n            "/users": [\n                {"id": 1, "name": "김개발", "email": "kim@dev.com"},\n                {"id": 2, "name": "이코딩", "email": "lee@code.com"}\n            ],\n            "/posts": [\n                {"id": 1, "title": "Python 학습법", "author_id": 1},\n                {"id": 2, "title": "API 설계 패턴", "author_id": 2}\n            ]\n        }\n        \n        print(f"GET {self.base_url}{endpoint}")\n        response_data = mock_responses.get(endpoint, {})\n        \n        return {\n            "status_code": 200,\n            "data": response_data,\n            "timestamp": datetime.now().isoformat()\n        }\n    \n    def simulate_post_request(self, endpoint, data):\n        print(f"POST {self.base_url}{endpoint}")\n        print(f"요청 데이터: {json.dumps(data, ensure_ascii=False, indent=2)}")\n        \n        # 가상의 성공 응답\n        return {\n            "status_code": 201,\n            "data": {"id": 3, **data},\n            "message": "성공적으로 생성되었습니다.",\n            "timestamp": datetime.now().isoformat()\n        }\n    \n    def handle_response(self, response):\n        print(f"\\n응답 상태: {response[\'status_code\']}")\n        print(f"응답 시간: {response[\'timestamp\']}")\n        print(f"응답 데이터:")\n        print(json.dumps(response[\'data\'], ensure_ascii=False, indent=2))\n        \n        if \'message\' in response:\n            print(f"메시지: {response[\'message\']}")\n\n# API 클라이언트 사용 예제\nclient = APIClient()\n\n# 사용자 목록 조회\nprint("=== 사용자 목록 조회 ===")\nusers_response = client.simulate_get_request("/users")\nclient.handle_response(users_response)\n\n# 새 사용자 생성\nprint("\\n=== 새 사용자 생성 ===")\nnew_user = {"name": "박신규", "email": "park@new.com"}\ncreate_response = client.simulate_post_request("/users", new_user)\nclient.handle_response(create_response)',
                description: 'REST API 통신을 시뮬레이션하는 클라이언트입니다.',
                category: 'api'
            }
        ]
    }
};

// 코드 카테고리 설명
const CategoryDescriptions = {
    basic: '기본 문법',
    variables: '변수 사용',
    strings: '문자열 처리',
    arithmetic: '수치 연산',
    data_structures: '자료구조',
    conditionals: '조건문',
    loops: '반복문',
    functions: '함수',
    error_handling: '예외 처리',
    oop: '객체지향 프로그래밍',
    functional: '함수형 프로그래밍',
    generators: '제너레이터',
    decorators: '데코레이터',
    context_managers: '컨텍스트 매니저',
    practical: '실무 활용',
    games: '게임 개발',
    web: '웹 개발',
    data_science: '데이터 사이언스',
    api: 'API 개발'
};

// 난이도별 설명
const DifficultyDescriptions = {
    beginner: {
        short: '기본 문법을 빠르게 익히는 짧은 코드',
        medium: '여러 문법을 조합한 중간 길이 코드',
        long: '실전에서 사용할 수 있는 완성된 프로그램'
    },
    intermediate: {
        short: '조건문, 반복문, 함수의 기본 사용법',
        medium: '다양한 문법을 활용한 실용적 코드',
        long: '실제 프로젝트에서 사용할 수 있는 시스템'
    },
    advanced: {
        short: '고급 문법의 핵심 개념',
        medium: '복잡한 패턴과 디자인 원칙',
        long: '전문적인 개발 기술과 실무 프로젝트'
    }
};

// 랜덤 코드 선택 함수
function getRandomCode(difficulty, length, excludeId = null) {
    console.log(`🎯 getRandomCode 호출: ${difficulty}-${length}, 제외ID: ${excludeId}`);
    
    const codes = PythonCodes[difficulty][length];
    console.log(`📝 전체 코드 수: ${codes.length}`);
    
    let availableCodes = codes.filter(code => code.id !== excludeId);
    console.log(`🔍 선택 가능한 코드 수: ${availableCodes.length}`);
    
    if (availableCodes.length === 0) {
        availableCodes = codes; // 제외할 코드가 없으면 전체에서 선택
        console.log('⚠️ 제외할 코드가 없어서 전체에서 선택');
    }
    
    const randomIndex = Math.floor(Math.random() * availableCodes.length);
    const selectedCode = availableCodes[randomIndex];
    
    console.log(`🎲 선택된 코드:`, {
        index: randomIndex,
        id: selectedCode.id,
        title: selectedCode.title,
        category: selectedCode.category
    });
    
    return selectedCode;
}

// 같은 카테고리의 다른 코드 선택 함수
function getRandomCodeByCategory(difficulty, length, category, excludeId = null) {
    console.log(`🏷️ getRandomCodeByCategory 호출: ${difficulty}-${length}, 카테고리: ${category}, 제외ID: ${excludeId}`);
    
    const codes = PythonCodes[difficulty][length];
    console.log(`📚 전체 코드 수: ${codes.length}`);
    
    let categorycodes = codes.filter(code => 
        code.category === category && code.id !== excludeId
    );
    
    console.log(`🎯 같은 카테고리 코드 수: ${categorycodes.length}`);
    console.log(`📝 같은 카테고리 코드들:`, categorycodes.map(c => ({ id: c.id, title: c.title })));
    
    if (categorycodes.length === 0) {
        // 같은 카테고리가 없으면 전체에서 선택
        console.log('❌ 같은 카테고리 코드가 없음, getRandomCode로 위임');
        return getRandomCode(difficulty, length, excludeId);
    }
    
    const randomIndex = Math.floor(Math.random() * categorycodes.length);
    const selectedCode = categorycodes[randomIndex];
    
    console.log(`✨ 카테고리에서 선택된 코드:`, {
        index: randomIndex,
        id: selectedCode.id,
        title: selectedCode.title,
        category: selectedCode.category
    });
    
    return selectedCode;
}

// 같은 레벨 그룹의 다른 코드 선택 함수
function getRandomCodeBySameLevel(difficulty, length, levelGroup, excludeId = null) {
    console.log(`🎯 getRandomCodeBySameLevel 호출: ${difficulty}-${length}, 레벨그룹: ${levelGroup}, 제외ID: ${excludeId}`);
    
    const codes = PythonCodes[difficulty][length];
    console.log(`📚 전체 코드 수: ${codes.length}`);
    
    let sameLevelCodes = codes.filter(code => 
        code.levelGroup === levelGroup && code.id !== excludeId
    );
    
    console.log(`🎯 같은 레벨 코드 수: ${sameLevelCodes.length}`);
    console.log(`📝 같은 레벨 코드들:`, sameLevelCodes.map(c => ({ id: c.id, title: c.title })));
    
    if (sameLevelCodes.length === 0) {
        console.log('❌ 같은 레벨의 다른 코드가 없음');
        return null;
    }
    
    const randomIndex = Math.floor(Math.random() * sameLevelCodes.length);
    const selectedCode = sameLevelCodes[randomIndex];
    
    console.log(`✨ 같은 레벨에서 선택된 코드:`, {
        index: randomIndex,
        id: selectedCode.id,
        title: selectedCode.title,
        levelGroup: selectedCode.levelGroup
    });
    
    return selectedCode;
}

// 코드 ID로 찾기 함수
function findCodeById(codeId) {
    for (const difficulty in PythonCodes) {
        for (const length in PythonCodes[difficulty]) {
            const code = PythonCodes[difficulty][length].find(c => c.id === codeId);
            if (code) {
                return { ...code, difficulty, length };
            }
        }
    }
    return null;
}

// 전체 코드 개수 계산
function getTotalCodeCount(difficulty) {
    return Object.values(PythonCodes[difficulty])
        .reduce((total, codes) => total + codes.length, 0);
}

// 완료된 코드 개수 계산
function getCompletedCodeCount(difficulty, progress) {
    let completed = 0;
    for (const length in PythonCodes[difficulty]) {
        PythonCodes[difficulty][length].forEach(code => {
            if (progress[difficulty] && 
                progress[difficulty][code.id] && 
                progress[difficulty][code.id].completed) {
                completed++;
            }
        });
    }
    return completed;
}

// 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PythonCodes,
        CategoryDescriptions,
        DifficultyDescriptions,
        getRandomCode,
        getRandomCodeByCategory,
        getRandomCodeBySameLevel,
        findCodeById,
        getTotalCodeCount,
        getCompletedCodeCount
    };
} 