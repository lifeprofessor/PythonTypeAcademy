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
            // Level 1: 기본 출력과 변수 조합 (3개 예제)
            {
                id: 'b_m1_1',
                title: '사용자 정보 출력',
                code: 'name = "김파이썬"\nage = 25\nprint("안녕하세요, " + name + "님!")\nprint(f"당신의 나이는 {age}세입니다.")',
                description: '변수를 활용하여 개인정보를 출력합니다.',
                category: 'variables',
                levelGroup: 1
            },
            {
                id: 'b_m1_2',
                title: '회사 소개',
                code: 'company = "파이썬 코딩"\nlocation = "서울"\nemployees = 50\nprint(f"회사명: {company}")\nprint(f"위치: {location}")\nprint(f"직원 수: {employees}명")',
                description: '회사 정보를 변수로 저장하고 출력합니다.',
                category: 'variables',
                levelGroup: 1
            },
            {
                id: 'b_m1_3',
                title: '제품 정보',
                code: 'product = "노트북"\nbrand = "파이썬북"\nprice = 1200000\nprint(f"제품: {product}")\nprint(f"브랜드: {brand}")\nprint(f"가격: {price:,}원")',
                description: '제품 정보를 정리하여 출력합니다.',
                category: 'variables',
                levelGroup: 1
            },
            
            // Level 2: 계산과 문자열 처리 (3개 예제)
            {
                id: 'b_m2_1',
                title: '계산기 기초',
                code: 'a = 10\nb = 20\nsum_result = a + b\ndiff_result = a - b\nprint("합:", sum_result)\nprint("차:", diff_result)',
                description: '두 숫자의 합과 차이를 계산합니다.',
                category: 'arithmetic',
                levelGroup: 2
            },
            {
                id: 'b_m2_2',
                title: '문자열 정보',
                code: 'text = "Python Programming"\nlength = len(text)\nuppercase = text.upper()\nprint(f"문자열: {text}")\nprint(f"길이: {length}")\nprint(f"대문자: {uppercase}")',
                description: '문자열의 다양한 정보를 출력합니다.',
                category: 'strings',
                levelGroup: 2
            },
            {
                id: 'b_m2_3',
                title: '원의 넓이 계산',
                code: 'radius = 5\npi = 3.14159\narea = pi * radius * radius\ncircumference = 2 * pi * radius\nprint(f"반지름: {radius}cm")\nprint(f"넓이: {area:.2f}cm²")\nprint(f"둘레: {circumference:.2f}cm")',
                description: '원의 반지름으로 넓이와 둘레를 계산합니다.',
                category: 'arithmetic',
                levelGroup: 2
            },
            
            // Level 3: 리스트 기초 활용 (3개 예제)
            {
                id: 'b_m3_1',
                title: '리스트 다루기',
                code: 'colors = ["빨강", "파랑", "노랑"]\nprint("색깔 목록:", colors)\nprint("첫 번째 색깔:", colors[0])\nprint("색깔 개수:", len(colors))',
                description: '리스트의 요소에 접근하고 길이를 확인합니다.',
                category: 'data_structures',
                levelGroup: 3
            },
            {
                id: 'b_m3_2',
                title: '성적 목록',
                code: 'scores = [85, 92, 78, 96, 88]\nprint("전체 성적:", scores)\nprint("최고 점수:", max(scores))\nprint("최저 점수:", min(scores))\nprint("평균 점수:", sum(scores) / len(scores))',
                description: '성적 리스트에서 최고, 최저, 평균을 구합니다.',
                category: 'data_structures',
                levelGroup: 3
            },
            {
                id: 'b_m3_3',
                title: '과일 장바구니',
                code: 'fruits = ["사과", "바나나", "오렌지"]\nprices = [1500, 2000, 3000]\nprint("=== 과일 가격표 ===")\nfor i in range(len(fruits)):\n    print(f"{fruits[i]}: {prices[i]}원")',
                description: '과일과 가격을 함께 출력합니다.',
                category: 'data_structures',
                levelGroup: 3
            },
            
            // Level 4: 변수와 데이터 타입 (3개 예제)
            {
                id: 'b_m4_1',
                title: '타입 확인',
                code: 'number = 42\ntext = "Hello"\nmy_list = [1, 2, 3]\nprint(f"숫자의 타입: {type(number).__name__}")\nprint(f"문자열의 타입: {type(text).__name__}")\nprint(f"리스트의 타입: {type(my_list).__name__}")',
                description: '다양한 변수의 데이터 타입을 확인합니다.',
                category: 'basic',
                levelGroup: 4
            },
            {
                id: 'b_m4_2',
                title: '타입 변환',
                code: 'str_num = "123"\nnum_str = 456\nfloat_num = 78.9\nprint(f"문자열을 숫자로: {int(str_num)}")\nprint(f"숫자를 문자열로: {str(num_str)}")\nprint(f"실수를 정수로: {int(float_num)}")',
                description: '서로 다른 타입 간의 변환을 수행합니다.',
                category: 'basic',
                levelGroup: 4
            },
            {
                id: 'b_m4_3',
                title: '불린과 비교',
                code: 'a = 10\nb = 20\nresult1 = a > b\nresult2 = a < b\nprint(f"{a} > {b}: {result1}")\nprint(f"{a} < {b}: {result2}")\nprint(f"타입: {type(result1).__name__}")',
                description: '비교 연산의 결과로 불린 타입을 확인합니다.',
                category: 'basic',
                levelGroup: 4
            },
            
            // Level 5: 문자열 메서드와 포맷팅 (3개 예제)
            {
                id: 'b_m5_1',
                title: '문자열 메서드',
                code: 'message = "  Hello Python World  "\nprint(f"원본: \'{message}\'")\nprint(f"공백 제거: \'{message.strip()}\'")\nprint(f"대문자: {message.upper()}")\nprint(f"소문자: {message.lower()}")',
                description: '문자열의 다양한 메서드를 사용합니다.',
                category: 'strings',
                levelGroup: 5
            },
            {
                id: 'b_m5_2',
                title: '문자열 분할과 결합',
                code: 'sentence = "Python-is-awesome"\nwords = sentence.split("-")\nprint("분할된 단어:", words)\nnew_sentence = " ".join(words)\nprint("결합된 문장:", new_sentence)',
                description: '문자열을 분할하고 다시 결합합니다.',
                category: 'strings',
                levelGroup: 5
            },
            {
                id: 'b_m5_3',
                title: '문자열 검색과 교체',
                code: 'text = "Python은 훌륭한 언어입니다. Python을 배워보세요."\ncount = text.count("Python")\nreplaced = text.replace("Python", "파이썬")\nprint(f"Python 개수: {count}개")\nprint(f"교체된 문장: {replaced}")',
                description: '문자열에서 특정 단어를 찾고 교체합니다.',
                category: 'strings',
                levelGroup: 5
            }
        ],
        long: [
            // Level 1: 기본 출력문 확장 (3개 예제)
            {
                id: 'b_l1_1',
                title: '학생 소개 프로그램',
                code: 'print("=== 학생 소개 프로그램 ===")\nprint()\nname = "김파이썬"\ngrade = 2\nsubject = "컴퓨터공학"\nhobby = "코딩"\ndream = "개발자"\n\nprint(f"안녕하세요! 저는 {name}입니다.")\nprint(f"현재 {grade}학년이고, {subject}을 전공하고 있습니다.")\nprint(f"제 취미는 {hobby}이고, 장래희망은 {dream}입니다.")\nprint()\nprint("파이썬을 열심히 공부하고 있어요!")\nprint("함께 코딩해요! 🐍")',
                description: '변수와 출력문을 활용한 학생 소개 프로그램입니다.',
                category: 'basic',
                levelGroup: 1
            },
            {
                id: 'b_l1_2',
                title: '회사 소개 페이지',
                code: 'print("=" * 30)\nprint("    🏢 회사 소개 페이지")\nprint("=" * 30)\nprint()\n\ncompany_name = "파이썬 테크"\nestablished = 2020\nlocation = "서울특별시 강남구"\nemployees = 150\nservices = ["웹 개발", "모바일 앱", "데이터 분석"]\n\nprint(f"회사명: {company_name}")\nprint(f"설립년도: {established}년")\nprint(f"위치: {location}")\nprint(f"직원 수: {employees}명")\nprint()\nprint("주요 서비스:")\nfor i, service in enumerate(services, 1):\n    print(f"  {i}. {service}")\nprint()\nprint("함께 성장할 인재를 찾고 있습니다!")',
                description: '회사 정보를 체계적으로 출력하는 소개 페이지입니다.',
                category: 'basic',
                levelGroup: 1
            },
            {
                id: 'b_l1_3',
                title: '개인 블로그 헤더',
                code: 'print("*" * 40)\nprint("        📝 개인 블로그")\nprint("*" * 40)\nprint()\n\nblogger = "코딩러버"\nblog_title = "파이썬과 함께하는 일상"\ncategories = ["Python 기초", "프로젝트 후기", "개발 팁"]\npost_count = 47\nvisitors = 1250\n\nprint(f"블로거: {blogger}")\nprint(f"블로그 제목: {blog_title}")\nprint(f"총 포스트: {post_count}개")\nprint(f"방문자 수: {visitors:,}명")\nprint()\nprint("주요 카테고리:")\nfor category in categories:\n    print(f"  📂 {category}")\nprint()\nprint("오늘도 좋은 하루 되세요! ✨")',
                description: '개인 블로그의 헤더 정보를 출력하는 프로그램입니다.',
                category: 'basic',
                levelGroup: 1
            },
            
            // Level 2: 계산과 데이터 처리 (3개 예제)
            {
                id: 'b_l2_1',
                title: '학생 성적 관리',
                code: 'print("=== 학생 성적 관리 시스템 ===")\nprint()\n\nstudent_name = "김철수"\nkorean = 85\nenglish = 92\nmath = 78\nscience = 90\nsocial = 88\n\nsubjects = ["국어", "영어", "수학", "과학", "사회"]\nscores = [korean, english, math, science, social]\n\ntotal = sum(scores)\naverage = total / len(scores)\n\nprint(f"학생 이름: {student_name}")\nprint("-" * 25)\nfor i in range(len(subjects)):\n    print(f"{subjects[i]}: {scores[i]:3d}점")\nprint("-" * 25)\nprint(f"총점: {total:3d}점")\nprint(f"평균: {average:5.1f}점")\nprint()\nif average >= 90:\n    print("🏆 우수 학생입니다!")\nelif average >= 80:\n    print("👍 양호한 성적입니다.")\nelse:\n    print("📚 더 열심히 공부해요!")',
                description: '학생의 성적을 계산하고 등급을 평가하는 프로그램입니다.',
                category: 'arithmetic',
                levelGroup: 2
            },
            {
                id: 'b_l2_2',
                title: '쇼핑 목록 관리',
                code: 'print("=== 🛒 쇼핑 목록 관리 ===")\nprint()\n\nshopping_list = ["우유", "빵", "계란", "사과", "바나나", "치킨"]\nprices = [2500, 3000, 4000, 1500, 2000, 15000]\nquantities = [2, 1, 1, 5, 3, 1]\n\nprint("구매 목록:")\nprint("-" * 35)\ntotal_cost = 0\n\nfor i in range(len(shopping_list)):\n    item = shopping_list[i]\n    price = prices[i]\n    qty = quantities[i]\n    subtotal = price * qty\n    total_cost += subtotal\n    \n    print(f"{i+1:2d}. {item:6s} {price:5,d}원 x {qty}개 = {subtotal:6,d}원")\n\nprint("-" * 35)\nprint(f"총 비용: {total_cost:,}원")\nprint(f"평균 단가: {total_cost // len(shopping_list):,}원")\nprint()\nif total_cost > 20000:\n    print("💳 카드 결제를 권장합니다.")\nelse:\n    print("💰 현금 결제 가능합니다.")',
                description: '쇼핑 목록과 수량을 고려한 비용 계산 프로그램입니다.',
                category: 'arithmetic',
                levelGroup: 2
            },
            {
                id: 'b_l2_3',
                title: '급여 계산기',
                code: 'print("=== 💰 월급 계산기 ===")\nprint()\n\nemployee_name = "이개발"\nbase_salary = 3000000\novertime_hours = 10\novertime_rate = 15000\nbonus = 200000\n\n# 추가 수당 계산\novertime_pay = overtime_hours * overtime_rate\ntotal_before_tax = base_salary + overtime_pay + bonus\n\n# 세금 계산 (간단한 예시)\nincome_tax = int(total_before_tax * 0.08)\nhealth_insurance = int(total_before_tax * 0.03)\nfinal_salary = total_before_tax - income_tax - health_insurance\n\nprint(f"직원명: {employee_name}")\nprint("=" * 30)\nprint(f"기본급:      {base_salary:8,d}원")\nprint(f"야근수당:    {overtime_pay:8,d}원 ({overtime_hours}시간)")\nprint(f"성과급:      {bonus:8,d}원")\nprint("-" * 30)\nprint(f"세전 총액:   {total_before_tax:8,d}원")\nprint(f"소득세:      {income_tax:8,d}원")\nprint(f"건강보험:    {health_insurance:8,d}원")\nprint("=" * 30)\nprint(f"실수령액:    {final_salary:8,d}원")',
                description: '기본급과 수당을 포함한 급여 계산 프로그램입니다.',
                category: 'arithmetic',
                levelGroup: 2
            },
            
            // Level 3: 리스트 활용 프로그램 (3개 예제)
            {
                id: 'b_l3_1',
                title: '도서관 책 정보',
                code: 'print("=== 📚 도서관 관리 시스템 ===")\nprint()\n\nbooks = [\n    ["파이썬 입문", "김코딩", 2023, "프로그래밍"],\n    ["데이터 과학", "이분석", 2022, "데이터"],\n    ["웹 개발", "박웹마스터", 2024, "웹"],\n    ["알고리즘", "최알고", 2023, "프로그래밍"],\n    ["머신러닝", "정학습", 2021, "AI"]\n]\n\nprint(f"총 {len(books)}권의 도서가 등록되어 있습니다.")\nprint("=" * 50)\n\nfor i, book in enumerate(books, 1):\n    title, author, year, category = book\n    print(f"{i:2d}. 📖 {title}")\n    print(f"     저자: {author}")\n    print(f"     출판: {year}년")\n    print(f"     분류: {category}")\n    print()\n\n# 카테고리별 통계\ncategories = [book[3] for book in books]\nprint("📊 분야별 도서 현황:")\nfor category in set(categories):\n    count = categories.count(category)\n    print(f"  {category}: {count}권")',
                description: '도서관의 책 정보를 체계적으로 관리하는 프로그램입니다.',
                category: 'data_structures',
                levelGroup: 3
            },
            {
                id: 'b_l3_2',
                title: '학급 학생 관리',
                code: 'print("=== 👥 학급 학생 관리 시스템 ===")\nprint()\n\nstudents = [\n    ["김철수", 17, "남", "축구"],\n    ["이영희", 16, "여", "독서"],\n    ["박민수", 17, "남", "게임"],\n    ["최지연", 16, "여", "음악"],\n    ["정태웅", 17, "남", "농구"]\n]\n\nprint(f"📋 총 {len(students)}명의 학생이 등록되어 있습니다.")\nprint("=" * 40)\n\n# 전체 학생 정보 출력\nfor i, student in enumerate(students, 1):\n    name, age, gender, hobby = student\n    print(f"{i:2d}번 {name} ({age}세, {gender})")\n    print(f"     취미: {hobby}")\n    print()\n\n# 통계 정보\nmale_count = sum(1 for student in students if student[2] == "남")\nfemale_count = len(students) - male_count\naverage_age = sum(student[1] for student in students) / len(students)\n\nprint("📊 학급 통계:")\nprint(f"  남학생: {male_count}명")\nprint(f"  여학생: {female_count}명")\nprint(f"  평균 나이: {average_age:.1f}세")',
                description: '학급 학생들의 정보를 관리하고 통계를 제공하는 프로그램입니다.',
                category: 'data_structures',
                levelGroup: 3
            },
            {
                id: 'b_l3_3',
                title: '음식점 메뉴판',
                code: 'print("=== 🍽️ 파이썬 레스토랑 ===")\nprint()\n\nmenu = [\n    ["김치찌개", 8000, "한식", True],\n    ["스파게티", 12000, "양식", True],\n    ["짜장면", 6000, "중식", True],\n    ["초밥", 15000, "일식", False],\n    ["피자", 18000, "양식", True],\n    ["비빔밥", 9000, "한식", True]\n]\n\nprint("🍴 오늘의 메뉴")\nprint("=" * 35)\n\n# 메뉴 출력\nfor i, item in enumerate(menu, 1):\n    name, price, cuisine, available = item\n    status = "⭕" if available else "❌"\n    print(f"{i}. {name:8s} {price:6,d}원 [{cuisine}] {status}")\n\nprint("=" * 35)\n\n# 메뉴 통계\navailable_items = [item for item in menu if item[3]]\ntotal_items = len(menu)\navailable_count = len(available_items)\naverage_price = sum(item[1] for item in available_items) / available_count\n\nprint(f"📊 메뉴 현황:")\nprint(f"  전체 메뉴: {total_items}개")\nprint(f"  주문 가능: {available_count}개")\nprint(f"  평균 가격: {average_price:,.0f}원")\nprint()\nprint("⭕ 주문가능  ❌ 품절")',
                description: '음식점 메뉴와 가격 정보를 관리하는 프로그램입니다.',
                category: 'data_structures',
                levelGroup: 3
            },
            
            // Level 4: 문자열 처리 프로그램 (3개 예제)
            {
                id: 'b_l4_1',
                title: '문자열 분석기',
                code: 'print("=== 📝 문자열 분석기 ===")\nprint()\n\ntext = "Python Programming Language"\nprint(f"분석할 문자열: \\"{text}\\"")\nprint("=" * 40)\n\n# 기본 정보\nlength = len(text)\nwords = text.split()\nword_count = len(words)\n\nprint("📊 기본 정보:")\nprint(f"  전체 길이: {length}자")\nprint(f"  단어 개수: {word_count}개")\nprint(f"  공백 개수: {text.count(\' \')}개")\nprint()\n\n# 문자 빈도 분석\nprint("🔍 문자 빈도 분석:")\nuppercase_count = sum(1 for c in text if c.isupper())\nlowercase_count = sum(1 for c in text if c.islower())\ndigit_count = sum(1 for c in text if c.isdigit())\n\nprint(f"  대문자: {uppercase_count}개")\nprint(f"  소문자: {lowercase_count}개")\nprint(f"  숫자: {digit_count}개")\nprint()\n\n# 변환 결과\nprint("🔄 변환 결과:")\nprint(f"  대문자: {text.upper()}")\nprint(f"  소문자: {text.lower()}")\nprint(f"  첫글자 대문자: {text.title()}")\nprint(f"  역순: {text[::-1]}")',
                description: '문자열의 다양한 정보를 분석하고 변환하는 프로그램입니다.',
                category: 'strings',
                levelGroup: 4
            },
            {
                id: 'b_l4_2',
                title: '이름 형식 변환기',
                code: 'print("=== 👤 이름 형식 변환기 ===")\nprint()\n\nnames = ["kim cheol su", "lee young hee", "park min su", "choi ji yeon"]\nkorean_names = ["김철수", "이영희", "박민수", "최지연"]\n\nprint("📋 이름 목록 처리 결과:")\nprint("=" * 50)\n\nfor i in range(len(names)):\n    english_name = names[i]\n    korean_name = korean_names[i]\n    \n    # 영어 이름 처리\n    name_parts = english_name.split()\n    title_case = english_name.title()\n    initials = \"\".join([part[0].upper() for part in name_parts])\n    \n    print(f"{i+1}. 한국어: {korean_name}")\n    print(f"   영어(원본): {english_name}")\n    print(f"   영어(정식): {title_case}")\n    print(f"   이니셜: {initials}")\n    print(f"   성: {name_parts[0].title()}")\n    print(f"   이름: {name_parts[1].title()} {name_parts[2].title()}")\n    print()\n\n# 통계 정보\nprint("📊 처리 통계:")\nprint(f"  총 인원: {len(names)}명")\nprint(f"  평균 이름 길이: {sum(len(name) for name in names) / len(names):.1f}자")\nmost_common_last = max(set(name.split()[0] for name in names), \n                      key=lambda x: [name.split()[0] for name in names].count(x))\nprint(f"  가장 많은 성: {most_common_last.title()}")',
                description: '다양한 형식의 이름을 처리하고 변환하는 프로그램입니다.',
                category: 'strings',
                levelGroup: 4
            },
            {
                id: 'b_l4_3',
                title: '이메일 주소 검증기',
                code: 'print("=== 📧 이메일 주소 검증기 ===")\nprint()\n\nemails = [\n    "user@example.com",\n    "test.email@domain.co.kr",\n    "invalid-email",\n    "admin@company.org",\n    "user@",\n    "hello@world.net"\n]\n\nprint("📋 이메일 검증 결과:")\nprint("=" * 45)\n\nvalid_count = 0\ninvalid_count = 0\n\nfor i, email in enumerate(emails, 1):\n    # 간단한 이메일 검증\n    is_valid = \"@\" in email and \".\" in email.split(\"@\")[-1]\n    \n    if is_valid:\n        parts = email.split(\"@\")\n        username = parts[0]\n        domain = parts[1]\n        \n        print(f"{i}. ✅ {email}")\n        print(f"     사용자명: {username}")\n        print(f"     도메인: {domain}")\n        print(f"     길이: {len(email)}자")\n        valid_count += 1\n    else:\n        print(f"{i}. ❌ {email}")\n        print(f"     상태: 유효하지 않은 형식")\n        invalid_count += 1\n    print()\n\nprint("📊 검증 통계:")\nprint(f"  총 이메일: {len(emails)}개")\nprint(f"  유효한 이메일: {valid_count}개")\nprint(f"  무효한 이메일: {invalid_count}개")\nprint(f"  유효율: {(valid_count/len(emails)*100):.1f}%")',
                description: '이메일 주소의 유효성을 검증하고 분석하는 프로그램입니다.',
                category: 'strings',
                levelGroup: 4
            },
            
            // Level 5: 종합 프로그램 (3개 예제)
            {
                id: 'b_l5_1',
                title: '개인 정보 관리 시스템',
                code: 'print("=== 👤 개인 정보 관리 시스템 ===")\nprint()\n\n# 개인 정보 데이터\nperson_info = {\n    "name": "김파이썬",\n    "age": 25,\n    "email": "python@example.com",\n    "phone": "010-1234-5678",\n    "address": "서울특별시 강남구",\n    "hobbies": ["코딩", "독서", "영화감상"],\n    "skills": ["Python", "JavaScript", "HTML/CSS"]\n}\n\n# 기본 정보 출력\nprint("📋 기본 정보:")\nprint("-" * 30)\nprint(f"이름: {person_info[\'name\']}")\nprint(f"나이: {person_info[\'age\']}세")\nprint(f"이메일: {person_info[\'email\']}")\nprint(f"전화번호: {person_info[\'phone\']}")\nprint(f"주소: {person_info[\'address\']}")\nprint()\n\n# 취미 목록\nprint("🎯 취미 목록:")\nfor i, hobby in enumerate(person_info[\'hobbies\'], 1):\n    print(f"  {i}. {hobby}")\nprint()\n\n# 기술 스택\nprint("💻 보유 기술:")\nfor i, skill in enumerate(person_info[\'skills\'], 1):\n    print(f"  {i}. {skill}")\nprint()\n\n# 추가 정보\nphone_clean = person_info[\'phone\'].replace(\"-\", \"\")\nemail_domain = person_info[\'email\'].split(\"@\")[1]\ntotal_hobbies = len(person_info[\'hobbies\'])\ntotal_skills = len(person_info[\'skills\'])\n\nprint("📊 추가 정보:")\nprint(f"  전화번호(숫자만): {phone_clean}")\nprint(f"  이메일 도메인: {email_domain}")\nprint(f"  취미 개수: {total_hobbies}개")\nprint(f"  보유 기술: {total_skills}개")',
                description: '개인 정보를 체계적으로 관리하고 분석하는 종합 프로그램입니다.',
                category: 'practical',
                levelGroup: 5
            },
            {
                id: 'b_l5_2',
                title: '가계부 관리 시스템',
                code: 'print("=== 💰 가계부 관리 시스템 ===")\nprint()\n\n# 수입/지출 데이터\nincome = [\n    ["급여", 3000000],\n    ["부업", 500000],\n    ["기타", 100000]\n]\n\nexpenses = [\n    ["식비", 600000],\n    ["교통비", 150000],\n    ["통신비", 80000],\n    ["생활용품", 200000],\n    ["여가", 300000]\n]\n\n# 수입 내역\nprint("📈 이번 달 수입:")\nprint("-" * 25)\ntotal_income = 0\nfor category, amount in income:\n    print(f"{category:8s}: {amount:8,d}원")\n    total_income += amount\nprint("-" * 25)\nprint(f"총 수입: {total_income:10,d}원")\nprint()\n\n# 지출 내역\nprint("📉 이번 달 지출:")\nprint("-" * 25)\ntotal_expense = 0\nfor category, amount in expenses:\n    print(f"{category:8s}: {amount:8,d}원")\n    total_expense += amount\nprint("-" * 25)\nprint(f"총 지출: {total_expense:10,d}원")\nprint()\n\n# 수지 분석\nbalance = total_income - total_expense\nsavings_rate = (balance / total_income) * 100 if total_income > 0 else 0\n\nprint("💡 수지 분석:")\nprint("=" * 30)\nprint(f"총 수입:   {total_income:10,d}원")\nprint(f"총 지출:   {total_expense:10,d}원")\nprint(f"잔액:     {balance:10,d}원")\nprint(f"저축률:   {savings_rate:9.1f}%")\nprint()\n\nif balance > 0:\n    print("✅ 이번 달은 흑자입니다!")\nelse:\n    print("⚠️ 이번 달은 적자입니다. 지출을 줄여보세요.")',
                description: '월별 수입과 지출을 관리하고 분석하는 가계부 시스템입니다.',
                category: 'practical',
                levelGroup: 5
            },
            {
                id: 'b_l5_3',
                title: '날씨 정보 시스템',
                code: 'print("=== 🌤️ 주간 날씨 정보 시스템 ===")\nprint()\n\n# 일주일 날씨 데이터\nweather_data = [\n    ["월요일", 22, 15, "맑음", 30],\n    ["화요일", 25, 18, "구름많음", 60],\n    ["수요일", 20, 12, "비", 90],\n    ["목요일", 23, 16, "흐림", 70],\n    ["금요일", 26, 19, "맑음", 20],\n    ["토요일", 28, 21, "맑음", 10],\n    ["일요일", 24, 17, "구름조금", 40]\n]\n\nprint("📅 이번 주 날씨 예보:")\nprint("=" * 55)\nprint("요일      최고  최저  날씨      강수확률")\nprint("-" * 55)\n\n# 날씨 정보 출력\nmax_temps = []\nmin_temps = []\nfor day, max_temp, min_temp, weather, rain_prob in weather_data:\n    print(f"{day:8s} {max_temp:3d}°C {min_temp:3d}°C {weather:8s} {rain_prob:3d}%")\n    max_temps.append(max_temp)\n    min_temps.append(min_temp)\n\nprint("=" * 55)\n\n# 날씨 통계\navg_max = sum(max_temps) / len(max_temps)\navg_min = sum(min_temps) / len(min_temps)\nhighest_temp = max(max_temps)\nlowest_temp = min(min_temps)\n\n# 비 오는 날 계산\nrainy_days = [day for day, _, _, weather, _ in weather_data if "비" in weather]\nrainy_count = len(rainy_days)\n\nprint("📊 주간 날씨 통계:")\nprint(f"  평균 최고기온: {avg_max:.1f}°C")\nprint(f"  평균 최저기온: {avg_min:.1f}°C")\nprint(f"  최고 기온: {highest_temp}°C")\nprint(f"  최저 기온: {lowest_temp}°C")\nprint(f"  비 오는 날: {rainy_count}일")\nprint()\n\n# 옷차림 추천\nif avg_max >= 25:\n    print("👔 얇은 옷차림을 추천합니다.")\nelif avg_max >= 20:\n    print("👕 가벼운 겉옷을 준비하세요.")\nelse:\n    print("🧥 따뜻한 옷을 입으세요.")',
                description: '일주일 날씨 정보를 분석하고 통계를 제공하는 시스템입니다.',
                category: 'practical',
                levelGroup: 5
            }
        ]
    },
    intermediate: {
        short: [
            // Level 1: 조건문 기초 (3개 예제)
            {
                id: 'i_s1_1',
                title: '나이 확인',
                code: 'age = 18\nif age >= 18:\n    print("성인입니다")\nelse:\n    print("미성년자입니다")',
                description: '나이에 따라 다른 메시지를 출력합니다.',
                category: 'conditionals',
                levelGroup: 1
            },
            {
                id: 'i_s1_2',
                title: '점수 평가',
                code: 'score = 85\nif score >= 80:\n    print("우수한 성적입니다!")\nelse:\n    print("더 노력해주세요!")',
                description: '점수에 따라 평가 메시지를 출력합니다.',
                category: 'conditionals',
                levelGroup: 1
            },
            {
                id: 'i_s1_3',
                title: '온도 판단',
                code: 'temperature = 25\nif temperature > 30:\n    print("더운 날씨입니다")\nelse:\n    print("시원한 날씨입니다")',
                description: '온도에 따라 날씨를 판단합니다.',
                category: 'conditionals',
                levelGroup: 1
            },
            
            // Level 2: 복합 조건문 (3개 예제)
            {
                id: 'i_s2_1',
                title: '성적 등급',
                code: 'score = 85\nif score >= 90:\n    print("A등급")\nelif score >= 80:\n    print("B등급")\nelse:\n    print("C등급")',
                description: '점수에 따라 등급을 매깁니다.',
                category: 'conditionals',
                levelGroup: 2
            },
            {
                id: 'i_s2_2',
                title: '계절 판단',
                code: 'month = 7\nif month in [12, 1, 2]:\n    print("겨울")\nelif month in [3, 4, 5]:\n    print("봄")\nelif month in [6, 7, 8]:\n    print("여름")\nelse:\n    print("가을")',
                description: '월에 따라 계절을 판단합니다.',
                category: 'conditionals',
                levelGroup: 2
            },
            {
                id: 'i_s2_3',
                title: '비밀번호 강도',
                code: 'password = "abc123"\nlength = len(password)\nif length >= 10:\n    print("강한 비밀번호")\nelif length >= 6:\n    print("보통 비밀번호")\nelse:\n    print("약한 비밀번호")',
                description: '비밀번호 길이에 따라 강도를 평가합니다.',
                category: 'conditionals',
                levelGroup: 2
            },
            
            // Level 3: for 반복문 (3개 예제)
            {
                id: 'i_s3_1',
                title: '숫자 출력',
                code: 'for i in range(5):\n    print(f"숫자: {i}")',
                description: '0부터 4까지 숫자를 출력합니다.',
                category: 'loops',
                levelGroup: 3
            },
            {
                id: 'i_s3_2',
                title: '과일 목록',
                code: 'fruits = ["사과", "바나나", "오렌지"]\nfor fruit in fruits:\n    print(f"과일: {fruit}")',
                description: '리스트의 각 과일을 출력합니다.',
                category: 'loops',
                levelGroup: 3
            },
            {
                id: 'i_s3_3',
                title: '구구단 일부',
                code: 'dan = 3\nfor i in range(1, 6):\n    result = dan * i\n    print(f"{dan} x {i} = {result}")',
                description: '3단의 일부를 출력합니다.',
                category: 'loops',
                levelGroup: 3
            },
            
            // Level 4: while 반복문과 함수 기초 (3개 예제)
            {
                id: 'i_s4_1',
                title: '카운트다운',
                code: 'count = 3\nwhile count > 0:\n    print(f"카운트: {count}")\n    count -= 1\nprint("종료!")',
                description: '3부터 카운트다운을 합니다.',
                category: 'loops',
                levelGroup: 4
            },
            {
                id: 'i_s4_2',
                title: '간단한 함수',
                code: 'def greet(name):\n    return f"안녕하세요, {name}님!"\n\nmessage = greet("파이썬")\nprint(message)',
                description: '인사말을 반환하는 함수를 만듭니다.',
                category: 'functions',
                levelGroup: 4
            },
            {
                id: 'i_s4_3',
                title: '계산 함수',
                code: 'def add_numbers(a, b):\n    return a + b\n\nresult = add_numbers(10, 20)\nprint(f"결과: {result}")',
                description: '두 숫자를 더하는 함수를 만듭니다.',
                category: 'functions',
                levelGroup: 4
            },
            
            // Level 5: 리스트와 딕셔너리 기초 (3개 예제)
            {
                id: 'i_s5_1',
                title: '리스트 다루기',
                code: 'numbers = [1, 2, 3, 4, 5]\nprint(f"첫 번째: {numbers[0]}")\nprint(f"마지막: {numbers[-1]}")\nprint(f"길이: {len(numbers)}")',
                description: '리스트의 요소에 접근하고 길이를 확인합니다.',
                category: 'data_structures',
                levelGroup: 5
            },
            {
                id: 'i_s5_2',
                title: '딕셔너리 기초',
                code: 'person = {"이름": "김철수", "나이": 25}\nprint(f"이름: {person[\'이름\']}")\nprint(f"나이: {person[\'나이\']}세")',
                description: '딕셔너리에서 값을 가져와 출력합니다.',
                category: 'data_structures',
                levelGroup: 5
            },
            {
                id: 'i_s5_3',
                title: '리스트 메서드',
                code: 'colors = ["빨강", "파랑"]\ncolors.append("노랑")\ncolors.insert(1, "초록")\nprint(colors)\nprint(f"총 {len(colors)}개의 색깔")',
                description: '리스트에 요소를 추가하는 방법을 학습합니다.',
                category: 'data_structures',
                levelGroup: 5
            }
        ],
        medium: [
            // Level 1: 조건문 활용 (3개 예제)
            {
                id: 'i_m1_1',
                title: '성적 등급 계산',
                code: 'score = 85\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelif score >= 70:\n    grade = "C"\nelse:\n    grade = "F"\nprint(f"점수: {score}, 등급: {grade}")',
                description: '점수에 따라 등급을 계산합니다.',
                category: 'conditionals',
                levelGroup: 1
            },
            {
                id: 'i_m1_2',
                title: 'BMI 계산기',
                code: 'height = 170  # cm\nweight = 65   # kg\n\nbmi = weight / ((height / 100) ** 2)\n\nif bmi < 18.5:\n    status = "저체중"\nelif bmi < 25:\n    status = "정상"\nelif bmi < 30:\n    status = "과체중"\nelse:\n    status = "비만"\n\nprint(f"키: {height}cm, 몸무게: {weight}kg")\nprint(f"BMI: {bmi:.1f} ({status})")',
                description: 'BMI를 계산하고 체중 상태를 판단합니다.',
                category: 'conditionals',
                levelGroup: 1
            },
            {
                id: 'i_m1_3',
                title: '세금 계산기',
                code: 'income = 5000000  # 월소득\n\nif income <= 2000000:\n    tax_rate = 0.05\nelif income <= 4000000:\n    tax_rate = 0.10\nelif income <= 8000000:\n    tax_rate = 0.15\nelse:\n    tax_rate = 0.20\n\ntax = income * tax_rate\nnet_income = income - tax\n\nprint(f"월소득: {income:,}원")\nprint(f"세율: {tax_rate*100}%")\nprint(f"세금: {tax:,.0f}원")\nprint(f"실수령액: {net_income:,.0f}원")',
                description: '소득에 따른 세금을 계산합니다.',
                category: 'conditionals',
                levelGroup: 1
            },
            
            // Level 2: 반복문 활용 (3개 예제)
            {
                id: 'i_m2_1',
                title: '구구단 생성기',
                code: 'dan = 7\nprint(f"=== {dan}단 ===")\nfor i in range(1, 10):\n    result = dan * i\n    print(f"{dan} × {i} = {result:2d}")\n\n# 짝수 결과만 별도 출력\nprint("\\n짝수 결과:")\nfor i in range(1, 10):\n    result = dan * i\n    if result % 2 == 0:\n        print(f"{dan} × {i} = {result}")',
                description: '구구단을 생성하고 짝수 결과를 필터링합니다.',
                category: 'loops',
                levelGroup: 2
            },
            {
                id: 'i_m2_2',
                title: '소수 찾기',
                code: 'def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nstart, end = 10, 30\nprimes = []\n\nfor num in range(start, end + 1):\n    if is_prime(num):\n        primes.append(num)\n\nprint(f"{start}부터 {end}까지의 소수:")\nprint(primes)\nprint(f"총 {len(primes)}개")',
                description: '지정된 범위의 소수를 찾아 출력합니다.',
                category: 'loops',
                levelGroup: 2
            },
            {
                id: 'i_m2_3',
                title: '팩토리얼 계산',
                code: 'def factorial(n):\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result\n\nnumbers = [3, 5, 7, 10]\nprint("팩토리얼 계산 결과:")\n\nfor num in numbers:\n    fact = factorial(num)\n    print(f"{num}! = {fact:,}")\n\n# 가장 큰 팩토리얼 찾기\nmax_num = max(numbers)\nmax_fact = factorial(max_num)\nprint(f"\\n가장 큰 값: {max_num}! = {max_fact:,}")',
                description: '여러 숫자의 팩토리얼을 계산하고 비교합니다.',
                category: 'loops',
                levelGroup: 2
            },
            
            // Level 3: 함수 활용 (3개 예제)
            {
                id: 'i_m3_1',
                title: '온도 변환기',
                code: 'def celsius_to_fahrenheit(celsius):\n    return (celsius * 9/5) + 32\n\ndef fahrenheit_to_celsius(fahrenheit):\n    return (fahrenheit - 32) * 5/9\n\ntemperatures_c = [0, 25, 37, 100]\nprint("섭씨 → 화씨 변환:")\nfor temp in temperatures_c:\n    fahrenheit = celsius_to_fahrenheit(temp)\n    print(f"{temp}°C = {fahrenheit:.1f}°F")\n\nprint("\\n화씨 → 섭씨 변환:")\ntemperatures_f = [32, 77, 98.6, 212]\nfor temp in temperatures_f:\n    celsius = fahrenheit_to_celsius(temp)\n    print(f"{temp}°F = {celsius:.1f}°C")',
                description: '섭씨와 화씨 온도를 상호 변환하는 함수들입니다.',
                category: 'functions',
                levelGroup: 3
            },
            {
                id: 'i_m3_2',
                title: '문자열 처리 함수',
                code: 'def count_vowels(text):\n    vowels = "aeiouAEIOU"\n    return sum(1 for char in text if char in vowels)\n\ndef reverse_words(text):\n    words = text.split()\n    return " ".join(word[::-1] for word in words)\n\ndef is_palindrome(text):\n    clean_text = text.replace(" ", "").lower()\n    return clean_text == clean_text[::-1]\n\ntest_strings = ["Hello World", "Python Programming", "A man a plan a canal Panama"]\n\nfor text in test_strings:\n    vowel_count = count_vowels(text)\n    reversed_text = reverse_words(text)\n    is_pal = is_palindrome(text)\n    \n    print(f"원본: {text}")\n    print(f"  모음 개수: {vowel_count}")\n    print(f"  단어 뒤집기: {reversed_text}")\n    print(f"  회문 여부: {is_pal}")\n    print()',
                description: '문자열을 다양한 방식으로 처리하는 함수들입니다.',
                category: 'functions',
                levelGroup: 3
            },
            {
                id: 'i_m3_3',
                title: '수학 계산 함수',
                code: 'def gcd(a, b):\n    while b:\n        a, b = b, a % b\n    return a\n\ndef lcm(a, b):\n    return abs(a * b) // gcd(a, b)\n\ndef perfect_number(n):\n    divisors = [i for i in range(1, n) if n % i == 0]\n    return sum(divisors) == n\n\nnumber_pairs = [(12, 18), (15, 25), (8, 12)]\nprint("최대공약수와 최소공배수:")\nfor a, b in number_pairs:\n    g = gcd(a, b)\n    l = lcm(a, b)\n    print(f"{a}, {b}: GCD={g}, LCM={l}")\n\nprint("\\n완전수 확인 (1~30):")\nfor num in range(1, 31):\n    if perfect_number(num):\n        print(f"{num}은 완전수입니다.")',
                description: '최대공약수, 최소공배수, 완전수를 계산하는 수학 함수들입니다.',
                category: 'functions',
                levelGroup: 3
            },
            
            // Level 4: 데이터구조 활용 (3개 예제)
            {
                id: 'i_m4_1',
                title: '딕셔너리 활용',
                code: 'student = {"이름": "김철수", "나이": 20, "전공": "컴퓨터공학", "학점": 3.7}\nprint("학생 정보:")\nfor key, value in student.items():\n    print(f"  {key}: {value}")\n\n# 학생 정보 업데이트\nstudent["학년"] = 3\nstudent["나이"] += 1\nstudent["학점"] = round(student["학점"] + 0.2, 1)\n\nprint(f"\\n업데이트 후:")\nfor key, value in student.items():\n    print(f"  {key}: {value}")\n\n# 학점에 따른 등급 판정\nif student["학점"] >= 3.5:\n    grade = "우수"\nelif student["학점"] >= 3.0:\n    grade = "양호"\nelse:\n    grade = "보통"\n\nprint(f"\\n{student[\"이름\"]}님의 성적 등급: {grade}")',
                description: '딕셔너리를 생성하고 정보를 동적으로 업데이트합니다.',
                category: 'data_structures',
                levelGroup: 4
            },
            {
                id: 'i_m4_2',
                title: '리스트 컴프리헨션',
                code: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# 다양한 리스트 컴프리헨션\nsquares = [x**2 for x in numbers]\neven_squares = [x**2 for x in numbers if x % 2 == 0]\nodd_cubes = [x**3 for x in numbers if x % 2 == 1]\nfiltered = [x for x in numbers if x > 5 and x < 9]\n\nprint("원본 리스트:", numbers)\nprint("제곱수:", squares)\nprint("짝수의 제곱:", even_squares)\nprint("홀수의 세제곱:", odd_cubes)\nprint("필터링된 수 (5 < x < 9):", filtered)\n\n# 중첩 리스트 컴프리헨션\nmatrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]\nprint("\\n곱셈표 (3x3):")\nfor row in matrix:\n    print(row)',
                description: '리스트 컴프리헨션으로 다양한 패턴의 새로운 리스트를 생성합니다.',
                category: 'data_structures',
                levelGroup: 4
            },
            {
                id: 'i_m4_3',
                title: '중첩 자료구조',
                code: 'students = [\n    {"이름": "김철수", "과목": {"수학": 85, "영어": 92, "과학": 78}},\n    {"이름": "이영희", "과목": {"수학": 95, "영어": 88, "과학": 91}},\n    {"이름": "박민수", "과목": {"수학": 76, "영어": 82, "과학": 89}}\n]\n\nprint("학생별 성적 분석:")\nfor student in students:\n    name = student["이름"]\n    subjects = student["과목"]\n    \n    total = sum(subjects.values())\n    average = total / len(subjects)\n    best_subject = max(subjects, key=subjects.get)\n    \n    print(f"\\n{name}:")\n    for subject, score in subjects.items():\n        print(f"  {subject}: {score}점")\n    print(f"  평균: {average:.1f}점")\n    print(f"  최고 과목: {best_subject} ({subjects[best_subject]}점)")',
                description: '중첩된 딕셔너리와 리스트로 복잡한 데이터를 처리합니다.',
                category: 'data_structures',
                levelGroup: 4
            },
            
            // Level 5: 예외처리 및 종합 (3개 예제)
            {
                id: 'i_m5_1',
                title: '예외 처리',
                code: 'def safe_divide(a, b):\n    try:\n        result = a / b\n        return f"{a} ÷ {b} = {result}"\n    except ZeroDivisionError:\n        return "0으로 나눌 수 없습니다"\n    except TypeError:\n        return "숫자만 입력 가능합니다"\n\ndef safe_list_access(lst, index):\n    try:\n        return f"인덱스 {index}: {lst[index]}"\n    except IndexError:\n        return f"인덱스 {index}는 범위를 벗어났습니다"\n    except TypeError:\n        return "리스트와 인덱스를 확인해주세요"\n\n# 테스트\nprint("나눗셈 테스트:")\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))\nprint(safe_divide("a", 2))\n\nprint("\\n리스트 접근 테스트:")\nmy_list = [1, 2, 3, 4, 5]\nprint(safe_list_access(my_list, 2))\nprint(safe_list_access(my_list, 10))\nprint(safe_list_access(my_list, "a"))',
                description: '다양한 예외 상황을 처리하는 안전한 함수들입니다.',
                category: 'error_handling',
                levelGroup: 5
            },
            {
                id: 'i_m5_2',
                title: '파일 처리 시뮬레이션',
                code: 'import os\n\ndef simulate_file_operations():\n    # 가상의 파일 데이터\n    files = {\n        "data.txt": "Python Programming\\nHello World\\nFile Processing",\n        "numbers.txt": "1\\n2\\n3\\n4\\n5",\n        "empty.txt": ""\n    }\n    \n    for filename, content in files.items():\n        try:\n            lines = content.split("\\n") if content else []\n            \n            print(f"파일: {filename}")\n            print(f"  라인 수: {len(lines)}")\n            print(f"  문자 수: {len(content)}")\n            \n            if lines:\n                print(f"  첫 번째 라인: {lines[0]}")\n                print(f"  마지막 라인: {lines[-1]}")\n            else:\n                print("  빈 파일입니다.")\n            \n            # 숫자 파일 처리\n            if filename == "numbers.txt":\n                numbers = [int(line) for line in lines if line.strip()]\n                print(f"  숫자 합계: {sum(numbers)}")\n            \n            print()\n            \n        except ValueError as e:\n            print(f"  오류: 숫자 변환 실패 - {e}")\n        except Exception as e:\n            print(f"  오류: {e}")\n\nsimulate_file_operations()',
                description: '파일 처리를 시뮬레이션하며 예외 상황을 다룹니다.',
                category: 'error_handling',
                levelGroup: 5
            },
            {
                id: 'i_m5_3',
                title: '데이터 검증 시스템',
                code: 'def validate_user_data(data):\n    errors = []\n    \n    # 이름 검증\n    if "name" not in data or not data["name"].strip():\n        errors.append("이름은 필수입니다")\n    elif len(data["name"]) < 2:\n        errors.append("이름은 2자 이상이어야 합니다")\n    \n    # 나이 검증\n    if "age" not in data:\n        errors.append("나이는 필수입니다")\n    elif not isinstance(data["age"], int) or data["age"] < 0:\n        errors.append("나이는 0 이상의 정수여야 합니다")\n    \n    # 이메일 검증\n    if "email" in data and data["email"]:\n        if "@" not in data["email"] or "." not in data["email"]:\n            errors.append("올바른 이메일 형식이 아닙니다")\n    \n    return errors\n\n# 테스트 데이터\ntest_users = [\n    {"name": "김철수", "age": 25, "email": "kim@example.com"},\n    {"name": "", "age": 30, "email": "invalid-email"},\n    {"name": "이", "age": -5, "email": "lee@test.com"},\n    {"name": "박영희", "age": 22}\n]\n\nfor i, user in enumerate(test_users, 1):\n    print(f"사용자 {i}: {user}")\n    errors = validate_user_data(user)\n    \n    if errors:\n        print("  검증 실패:")\n        for error in errors:\n            print(f"    - {error}")\n    else:\n        print("  ✅ 검증 성공")\n    print()',
                description: '사용자 데이터의 유효성을 검증하는 시스템입니다.',
                category: 'error_handling',
                levelGroup: 5
            }
        ],
        long: [
            // Level 1: 조건문과 반복문 종합 (3개 예제)
            {
                id: 'i_l1_1',
                title: '학생 성적 분석 시스템',
                code: 'def analyze_student_grades():\n    print("=== 학생 성적 분석 시스템 ===")\n    \n    students = [\n        {"name": "김철수", "scores": [85, 92, 78], "class": "A"},\n        {"name": "이영희", "scores": [95, 88, 90], "class": "A"},\n        {"name": "박민수", "scores": [76, 82, 85], "class": "B"},\n        {"name": "최지연", "scores": [88, 94, 92], "class": "A"},\n        {"name": "정태웅", "scores": [82, 79, 88], "class": "B"}\n    ]\n    \n    print("개별 학생 분석:")\n    print("-" * 50)\n    \n    for student in students:\n        name = student["name"]\n        scores = student["scores"]\n        class_name = student["class"]\n        \n        total = sum(scores)\n        average = total / len(scores)\n        \n        # 등급 계산\n        if average >= 90:\n            grade = "우수"\n        elif average >= 80:\n            grade = "양호"\n        elif average >= 70:\n            grade = "보통"\n        else:\n            grade = "노력 필요"\n        \n        print(f"이름: {name} (반: {class_name})")\n        print(f"점수: {scores}")\n        print(f"평균: {average:.1f}점 ({grade})")\n        print()\n    \n    # 반별 통계\n    print("반별 통계:")\n    print("-" * 30)\n    \n    for class_name in ["A", "B"]:\n        class_students = [s for s in students if s["class"] == class_name]\n        class_averages = [sum(s["scores"])/len(s["scores"]) for s in class_students]\n        \n        if class_averages:\n            class_avg = sum(class_averages) / len(class_averages)\n            print(f"{class_name}반 평균: {class_avg:.1f}점 ({len(class_students)}명)")\n\nanalyze_student_grades()',
                description: '조건문과 반복문을 활용한 학생 성적 분석 시스템입니다.',
                category: 'educational',
                levelGroup: 1
            },
            {
                id: 'i_l1_2',
                title: '쇼핑몰 주문 처리 시스템',
                code: 'def process_orders():\n    print("=== 쇼핑몰 주문 처리 시스템 ===")\n    \n    products = {\n        "노트북": {"price": 1200000, "stock": 5},\n        "마우스": {"price": 25000, "stock": 20},\n        "키보드": {"price": 80000, "stock": 15},\n        "모니터": {"price": 300000, "stock": 8}\n    }\n    \n    orders = [\n        {"customer": "김고객", "items": [("노트북", 1), ("마우스", 2)]},\n        {"customer": "이구매", "items": [("키보드", 1), ("모니터", 2)]},\n        {"customer": "박쇼핑", "items": [("노트북", 3), ("마우스", 1)]}\n    ]\n    \n    print("주문 처리 결과:")\n    print("=" * 50)\n    \n    total_revenue = 0\n    \n    for order in orders:\n        customer = order["customer"]\n        items = order["items"]\n        \n        print(f"\\n고객: {customer}")\n        print("-" * 30)\n        \n        order_total = 0\n        order_success = True\n        \n        # 재고 확인\n        for product_name, quantity in items:\n            if product_name in products:\n                available_stock = products[product_name]["stock"]\n                if quantity <= available_stock:\n                    price = products[product_name]["price"]\n                    subtotal = price * quantity\n                    order_total += subtotal\n                    \n                    print(f"✅ {product_name} x{quantity}: {subtotal:,}원")\n                else:\n                    print(f"❌ {product_name}: 재고 부족 (요청: {quantity}, 재고: {available_stock})")\n                    order_success = False\n            else:\n                print(f"❌ {product_name}: 상품 없음")\n                order_success = False\n        \n        if order_success:\n            print(f"주문 총액: {order_total:,}원")\n            print("주문 완료!")\n            total_revenue += order_total\n            \n            # 재고 차감\n            for product_name, quantity in items:\n                products[product_name]["stock"] -= quantity\n        else:\n            print("주문 실패!")\n    \n    print(f"\\n=== 최종 결과 ===")\n    print(f"총 매출: {total_revenue:,}원")\n    print("\\n남은 재고:")\n    for product, info in products.items():\n        print(f"{product}: {info[\'stock\']}개")\n\nprocess_orders()',
                description: '조건문과 반복문을 활용한 쇼핑몰 주문 처리 시스템입니다.',
                category: 'business',
                levelGroup: 1
            },
            {
                id: 'i_l1_3',
                title: '날씨 데이터 분석기',
                code: 'def analyze_weather_data():\n    print("=== 날씨 데이터 분석기 ===")\n    \n    weather_data = [\n        {"date": "2024-01-01", "temp": 5, "humidity": 60, "condition": "맑음"},\n        {"date": "2024-01-02", "temp": 3, "humidity": 65, "condition": "구름많음"},\n        {"date": "2024-01-03", "temp": -2, "humidity": 70, "condition": "눈"},\n        {"date": "2024-01-04", "temp": 8, "humidity": 55, "condition": "맑음"},\n        {"date": "2024-01-05", "temp": 12, "humidity": 75, "condition": "비"},\n        {"date": "2024-01-06", "temp": 15, "humidity": 80, "condition": "흐림"},\n        {"date": "2024-01-07", "temp": 18, "humidity": 45, "condition": "맑음"}\n    ]\n    \n    print("일별 날씨 정보:")\n    print("=" * 50)\n    \n    for day in weather_data:\n        date = day["date"]\n        temp = day["temp"]\n        humidity = day["humidity"]\n        condition = day["condition"]\n        \n        # 온도에 따른 체감 분류\n        if temp >= 25:\n            feel = "더움"\n        elif temp >= 15:\n            feel = "따뜻함"\n        elif temp >= 5:\n            feel = "시원함"\n        else:\n            feel = "추움"\n        \n        print(f"{date}: {temp}°C ({feel}), 습도 {humidity}%, {condition}")\n    \n    # 통계 분석\n    print("\\n=== 주간 통계 ===")\n    temperatures = [day["temp"] for day in weather_data]\n    humidities = [day["humidity"] for day in weather_data]\n    \n    avg_temp = sum(temperatures) / len(temperatures)\n    max_temp = max(temperatures)\n    min_temp = min(temperatures)\n    avg_humidity = sum(humidities) / len(humidities)\n    \n    print(f"평균 기온: {avg_temp:.1f}°C")\n    print(f"최고 기온: {max_temp}°C")\n    print(f"최저 기온: {min_temp}°C")\n    print(f"평균 습도: {avg_humidity:.1f}%")\n    \n    # 날씨 조건별 분석\n    conditions = {}\n    for day in weather_data:\n        condition = day["condition"]\n        if condition in conditions:\n            conditions[condition] += 1\n        else:\n            conditions[condition] = 1\n    \n    print("\\n날씨 조건 분포:")\n    for condition, count in conditions.items():\n        percentage = (count / len(weather_data)) * 100\n        print(f"{condition}: {count}일 ({percentage:.1f}%)")\n    \n    # 권장사항\n    print("\\n=== 주간 요약 및 권장사항 ===")\n    if avg_temp > 20:\n        print("🌞 따뜻한 한 주였습니다. 가벼운 옷차림을 추천합니다.")\n    elif avg_temp > 10:\n        print("🌤️ 온화한 한 주였습니다. 적당한 겉옷을 준비하세요.")\n    else:\n        print("❄️ 추운 한 주였습니다. 따뜻한 옷을 입으세요.")\n    \n    if avg_humidity > 70:\n        print("💧 습도가 높았습니다. 제습에 신경 쓰세요.")\n    elif avg_humidity < 40:\n        print("🏜️ 건조했습니다. 가습기 사용을 권장합니다.")\n\nanalyze_weather_data()',
                description: '조건문과 반복문을 활용한 날씨 데이터 분석기입니다.',
                category: 'data_analysis',
                levelGroup: 1
            },
            
            // Level 2: 함수 중심 프로그램 (3개 예제)
            {
                id: 'i_l2_1',
                title: '도서관 대출 관리 시스템',
                code: 'def create_library_system():\n    books = {\n        "파이썬 입문": {"author": "김파이썬", "available": True},\n        "웹 개발": {"author": "이웹마스터", "available": False},\n        "데이터 과학": {"author": "박데이터", "available": True}\n    }\n    \n    def display_books():\n        print("=== 도서 목록 ===")\n        for title, info in books.items():\n            status = "대출가능" if info["available"] else "대출중"\n            print(f"{title}: {info[\'author\']} - {status}")\n    \n    def borrow_book(title):\n        if title in books:\n            if books[title]["available"]:\n                books[title]["available"] = False\n                print(f"✅ {title} 도서가 대출되었습니다.")\n            else:\n                print(f"❌ {title} 도서는 현재 대출중입니다.")\n        else:\n            print(f"❌ {title} 도서를 찾을 수 없습니다.")\n    \n    def return_book(title):\n        if title in books:\n            if not books[title]["available"]:\n                books[title]["available"] = True\n                print(f"✅ {title} 도서가 반납되었습니다.")\n            else:\n                print(f"❌ {title} 도서는 이미 반납된 상태입니다.")\n        else:\n            print(f"❌ {title} 도서를 찾을 수 없습니다.")\n    \n    print("=== 도서관 대출 관리 시스템 ===")\n    display_books()\n    \n    print("\\n=== 대출 처리 ===")\n    borrow_book("파이썬 입문")\n    borrow_book("웹 개발")\n    \n    print("\\n=== 대출 후 도서 상태 ===")\n    display_books()\n    \n    print("\\n=== 반납 처리 ===")\n    return_book("웹 개발")\n    \n    print("\\n=== 반납 후 도서 상태 ===")\n    display_books()\n\ncreate_library_system()',
                description: '함수를 활용한 도서관 대출 관리 시스템입니다.',
                category: 'management',
                levelGroup: 2
            },
            {
                id: 'i_l2_2',
                title: '온라인 퀴즈 시스템',
                code: 'def create_quiz_system():\n    quiz_data = [\n        {"question": "파이썬에서 리스트를 만드는 기호는?", "options": ["()", "[]", "{}", "<>"], "answer": 1},\n        {"question": "파이썬에서 주석을 표시하는 기호는?", "options": ["//", "/*", "#", "--"], "answer": 2},\n        {"question": "파이썬에서 문자열 포맷팅에 사용되는 것은?", "options": ["f-string", "%-formatting", ".format()", "모두 정답"], "answer": 3}\n    ]\n    \n    def display_question(question_data, question_num):\n        print(f"문제 {question_num}: {question_data['question']}")\n        for i, option in enumerate(question_data['options']):\n            print(f"  {i+1}. {option}")\n    \n    def calculate_grade(score, total):\n        percentage = (score / total) * 100\n        if percentage >= 90:\n            return "A", "우수"\n        elif percentage >= 80:\n            return "B", "양호"\n        else:\n            return "C", "보통"\n    \n    print("=== 파이썬 기초 퀴즈 ===")\n    print(f"총 {len(quiz_data)}문제가 출제됩니다.")\n    \n    correct_count = 0\n    \n    for i, question in enumerate(quiz_data):\n        display_question(question, i + 1)\n        # 예시 답안 (실제로는 사용자 입력)\n        user_answer = question["answer"]  # 정답으로 시뮬레이션\n        \n        if user_answer == question["answer"]:\n            correct_count += 1\n            print("정답입니다!")\n        else:\n            print("틀렸습니다.")\n    \n    total_questions = len(quiz_data)\n    percentage = (correct_count / total_questions) * 100\n    grade, comment = calculate_grade(correct_count, total_questions)\n    \n    print("\\n=== 퀴즈 결과 ===")\n    print(f"정답 수: {correct_count}/{total_questions}문제")\n    print(f"정답률: {percentage:.1f}%")\n    print(f"등급: {grade} ({comment})")\n\ncreate_quiz_system()',
                description: '함수를 활용한 온라인 퀴즈 시스템입니다.',
                category: 'educational',
                levelGroup: 2
            },
            {
                id: 'i_l2_3',
                title: '식당 주문 관리 시스템',
                code: 'def create_restaurant_system():\n    menu = {\n        "한식": {\n            "김치찌개": {"price": 8000, "ingredients": ["김치", "돼지고기", "두부"], "cooking_time": 15},\n            "비빔밥": {"price": 9000, "ingredients": ["쌀", "나물", "고추장"], "cooking_time": 10},\n            "불고기": {"price": 15000, "ingredients": ["소고기", "양파", "당근"], "cooking_time": 20}\n        },\n        "양식": {\n            "스파게티": {"price": 12000, "ingredients": ["면", "토마토소스", "치즈"], "cooking_time": 18},\n            "피자": {"price": 18000, "ingredients": ["도우", "치즈", "토마토소스"], "cooking_time": 25},\n            "스테이크": {"price": 25000, "ingredients": ["소고기", "감자", "브로콜리"], "cooking_time": 30}\n        }\n    }\n    \n    def display_menu():\n        print("=== 레스토랑 메뉴 ===")\n        for category, dishes in menu.items():\n            print(f"\\n📍 {category}")\n            print("-" * 40)\n            for dish_name, info in dishes.items():\n                ingredients_str = ", ".join(info["ingredients"])\n                print(f"{dish_name:<10} {info['price']:>8,}원")\n                print(f"           재료: {ingredients_str}")\n                print(f"           조리시간: {info['cooking_time']}분")\n                print()\n    \n    def calculate_order_total(orders):\n        total_price = 0\n        total_time = 0\n        order_details = []\n        \n        for dish_name, quantity in orders.items():\n            dish_found = False\n            for category, dishes in menu.items():\n                if dish_name in dishes:\n                    dish_info = dishes[dish_name]\n                    subtotal = dish_info["price"] * quantity\n                    total_price += subtotal\n                    # 동일 요리는 병렬로 조리 가능하다고 가정\n                    total_time = max(total_time, dish_info["cooking_time"])\n                    \n                    order_details.append({\n                        "name": dish_name,\n                        "quantity": quantity,\n                        "unit_price": dish_info["price"],\n                        "subtotal": subtotal,\n                        "cooking_time": dish_info["cooking_time"]\n                    })\n                    dish_found = True\n                    break\n            \n            if not dish_found:\n                print(f"⚠️ '{dish_name}'은 메뉴에 없습니다.")\n        \n        return order_details, total_price, total_time\n    \n    def process_payment(total_price, payment_method, paid_amount=None):\n        print(f"\\n=== 결제 처리 ===")\n        print(f"총 금액: {total_price:,}원")\n        \n        if payment_method == "현금":\n            if paid_amount is None:\n                return False, "현금 결제시 지불 금액을 입력해야 합니다."\n            if paid_amount < total_price:\n                return False, f"금액이 부족합니다. (부족: {total_price - paid_amount:,}원)"\n            change = paid_amount - total_price\n            return True, f"결제 완료! 거스름돈: {change:,}원"\n        elif payment_method == "카드":\n            return True, "카드 결제 완료!"\n        else:\n            return False, "지원하지 않는 결제 방법입니다."\n    \n    def generate_receipt(order_details, total_price, cooking_time, payment_info):\n        print("\\n" + "="*40)\n        print("          🍽️ 주문 영수증")\n        print("="*40)\n        print(f"주문 시간: 2024-01-15 14:30")\n        print("-"*40)\n        \n        for item in order_details:\n            print(f"{item['name']:<12} x{item['quantity']}")\n            print(f"              {item['unit_price']:,}원 x {item['quantity']} = {item['subtotal']:,}원")\n        \n        print("-"*40)\n        print(f"총 금액:      {total_price:,}원")\n        print(f"예상 조리시간: {cooking_time}분")\n        print(f"결제 방법:    {payment_info}")\n        print("="*40)\n        print("    맛있게 드세요! 😊")\n        print("="*40)\n    \n    # 시스템 실행 시뮬레이션\n    display_menu()\n    \n    # 샘플 주문\n    sample_orders = {\n        "김치찌개": 2,\n        "스파게티": 1,\n        "피자": 1\n    }\n    \n    print("\\n=== 주문 처리 ===")\n    print("주문 내역:", sample_orders)\n    \n    order_details, total_price, cooking_time = calculate_order_total(sample_orders)\n    \n    if order_details:\n        print("\\n주문 상세:")\n        for item in order_details:\n            print(f"- {item['name']} x{item['quantity']}: {item['subtotal']:,}원")\n        \n        print(f"\\n총 금액: {total_price:,}원")\n        print(f"예상 조리시간: {cooking_time}분")\n        \n        # 결제 처리\n        success, message = process_payment(total_price, "카드")\n        \n        if success:\n            generate_receipt(order_details, total_price, cooking_time, message)\n        else:\n            print(f"결제 실패: {message}")\n    else:\n        print("주문할 수 있는 메뉴가 없습니다.")\n\ncreate_restaurant_system()',
                description: '함수를 활용한 식당 주문 관리 시스템입니다.',
                category: 'business',
                levelGroup: 2
            },
            
            // Level 3: 클래스 기초 활용 (3개 예제)
            {
                id: 'i_l3_1',
                title: '은행 계좌 관리 시스템',
                code: 'class BankAccount:\n    def __init__(self, account_number, owner_name, initial_balance=0):\n        self.account_number = account_number\n        self.owner_name = owner_name\n        self.balance = initial_balance\n        self.transaction_history = []\n        self.is_active = True\n        \n        # 초기 잔액이 있다면 거래 내역에 추가\n        if initial_balance > 0:\n            self.transaction_history.append({\n                "type": "개설",\n                "amount": initial_balance,\n                "balance": self.balance,\n                "date": "2024-01-15 09:00:00"\n            })\n    \n    def deposit(self, amount):\n        if not self.is_active:\n            print("❌ 계좌가 비활성화되어 있습니다.")\n            return False\n        \n        if amount <= 0:\n            print("❌ 입금액은 0보다 커야 합니다.")\n            return False\n        \n        self.balance += amount\n        self.transaction_history.append({\n            "type": "입금",\n            "amount": amount,\n            "balance": self.balance,\n            "date": "2024-01-15 14:30:00"\n        })\n        \n        print(f"✅ {amount:,}원이 입금되었습니다.")\n        print(f"   현재 잔액: {self.balance:,}원")\n        return True\n    \n    def withdraw(self, amount):\n        if not self.is_active:\n            print("❌ 계좌가 비활성화되어 있습니다.")\n            return False\n        \n        if amount <= 0:\n            print("❌ 출금액은 0보다 커야 합니다.")\n            return False\n        \n        if amount > self.balance:\n            print(f"❌ 잔액이 부족합니다. (현재 잔액: {self.balance:,}원)")\n            return False\n        \n        self.balance -= amount\n        self.transaction_history.append({\n            "type": "출금",\n            "amount": amount,\n            "balance": self.balance,\n            "date": "2024-01-15 15:45:00"\n        })\n        \n        print(f"✅ {amount:,}원이 출금되었습니다.")\n        print(f"   현재 잔액: {self.balance:,}원")\n        return True\n    \n    def transfer(self, target_account, amount):\n        if not self.is_active:\n            print("❌ 계좌가 비활성화되어 있습니다.")\n            return False\n        \n        if amount <= 0:\n            print("❌ 이체 금액은 0보다 커야 합니다.")\n            return False\n        \n        if amount > self.balance:\n            print(f"❌ 잔액이 부족합니다. (현재 잔액: {self.balance:,}원)")\n            return False\n        \n        # 출금 처리\n        self.balance -= amount\n        self.transaction_history.append({\n            "type": "이체출금",\n            "amount": amount,\n            "balance": self.balance,\n            "target": target_account.account_number,\n            "date": "2024-01-15 16:20:00"\n        })\n        \n        # 대상 계좌에 입금\n        target_account.balance += amount\n        target_account.transaction_history.append({\n            "type": "이체입금",\n            "amount": amount,\n            "balance": target_account.balance,\n            "source": self.account_number,\n            "date": "2024-01-15 16:20:00"\n        })\n        \n        print(f"✅ {target_account.owner_name}님 계좌로 {amount:,}원 이체 완료")\n        print(f"   현재 잔액: {self.balance:,}원")\n        return True\n    \n    def get_balance(self):\n        return self.balance\n    \n    def print_statement(self, limit=10):\n        print(f"\\n=== {self.owner_name}님 계좌 명세서 ===")\n        print(f"계좌번호: {self.account_number}")\n        print(f"현재 잔액: {self.balance:,}원")\n        print(f"계좌 상태: {'활성' if self.is_active else '비활성'}")\n        print("\\n거래 내역 (최근 {}건):".format(min(limit, len(self.transaction_history))))\n        print("-" * 60)\n        \n        recent_transactions = self.transaction_history[-limit:]\n        for transaction in reversed(recent_transactions):\n            t_type = transaction["type"]\n            amount = transaction["amount"]\n            balance = transaction["balance"]\n            date = transaction["date"]\n            \n            if t_type in ["이체출금", "이체입금"]:\n                if t_type == "이체출금":\n                    target_info = f" → {transaction['target']}"\n                else:\n                    target_info = f" ← {transaction['source']}"\n                print(f"{date} {t_type:<8} {amount:>8,}원 잔액:{balance:>10,}원{target_info}")\n            else:\n                print(f"{date} {t_type:<8} {amount:>8,}원 잔액:{balance:>10,}원")\n        print("-" * 60)\n    \n    def deactivate_account(self):\n        self.is_active = False\n        print(f"계좌 {self.account_number}가 비활성화되었습니다.")\n    \n    def activate_account(self):\n        self.is_active = True\n        print(f"계좌 {self.account_number}가 활성화되었습니다.")\n\n# 시스템 사용 예제\nprint("=== 은행 계좌 관리 시스템 ===")\n\n# 계좌 개설\naccount1 = BankAccount("110-123-456789", "김파이썬", 100000)\naccount2 = BankAccount("110-987-654321", "이자바", 50000)\n\nprint("\\n=== 계좌 개설 완료 ===")\nprint(f"1. {account1.owner_name}님 계좌: {account1.account_number} (잔액: {account1.balance:,}원)")\nprint(f"2. {account2.owner_name}님 계좌: {account2.account_number} (잔액: {account2.balance:,}원)")\n\n# 거래 실행\nprint("\\n=== 거래 실행 ===")\naccount1.deposit(50000)\naccount1.withdraw(30000)\naccount1.transfer(account2, 25000)\n\n# 명세서 출력\naccount1.print_statement()\naccount2.print_statement()',
                description: '클래스를 활용한 고급 은행 계좌 관리 시스템입니다.',
                category: 'practical',
                levelGroup: 3
            },
            {
                id: 'i_l3_2',
                title: '학생 관리 시스템',
                code: 'class Student:\n    def __init__(self, student_id, name, grade, subjects=None):\n        self.student_id = student_id\n        self.name = name\n        self.grade = grade\n        self.subjects = subjects if subjects else {}\n        self.attendance = []\n    \n    def add_score(self, subject, score):\n        if subject not in self.subjects:\n            self.subjects[subject] = []\n        self.subjects[subject].append(score)\n        print(f"{self.name} 학생의 {subject} 점수 {score}점이 추가되었습니다.")\n    \n    def get_average(self, subject=None):\n        if subject:\n            if subject in self.subjects and self.subjects[subject]:\n                return sum(self.subjects[subject]) / len(self.subjects[subject])\n            return 0\n        else:\n            all_scores = []\n            for scores in self.subjects.values():\n                all_scores.extend(scores)\n            return sum(all_scores) / len(all_scores) if all_scores else 0\n    \n    def mark_attendance(self, date, status):\n        self.attendance.append({"date": date, "status": status})\n        print(f"{self.name} 학생 {date} 출석: {status}")\n    \n    def get_attendance_rate(self):\n        if not self.attendance:\n            return 0\n        present_days = sum(1 for record in self.attendance if record["status"] == "출석")\n        return (present_days / len(self.attendance)) * 100\n\nclass StudentManager:\n    def __init__(self):\n        self.students = {}\n    \n    def add_student(self, student_id, name, grade):\n        if student_id in self.students:\n            print(f"학번 {student_id}는 이미 존재합니다.")\n            return False\n        \n        self.students[student_id] = Student(student_id, name, grade)\n        print(f"학생 {name}(학번: {student_id})이 등록되었습니다.")\n        return True\n    \n    def get_student(self, student_id):\n        return self.students.get(student_id)\n    \n    def generate_class_report(self, grade=None):\n        print("\\n=== 학급 성적 보고서 ===")\n        \n        target_students = []\n        if grade:\n            target_students = [s for s in self.students.values() if s.grade == grade]\n            print(f"대상: {grade}학년")\n        else:\n            target_students = list(self.students.values())\n            print("대상: 전체 학생")\n        \n        if not target_students:\n            print("해당하는 학생이 없습니다.")\n            return\n        \n        print(f"총 학생 수: {len(target_students)}명")\n        print("-" * 60)\n        \n        # 개별 학생 정보\n        for student in target_students:\n            avg_score = student.get_average()\n            attendance_rate = student.get_attendance_rate()\n            \n            print(f"이름: {student.name} (학번: {student.student_id}, {student.grade}학년)")\n            print(f"  전체 평균: {avg_score:.1f}점")\n            print(f"  출석률: {attendance_rate:.1f}%")\n            \n            if student.subjects:\n                print("  과목별 평균:")\n                for subject in student.subjects:\n                    subject_avg = student.get_average(subject)\n                    print(f"    {subject}: {subject_avg:.1f}점")\n            print()\n        \n        # 전체 통계\n        all_averages = [s.get_average() for s in target_students if s.get_average() > 0]\n        if all_averages:\n            class_average = sum(all_averages) / len(all_averages)\n            print(f"학급 전체 평균: {class_average:.1f}점")\n            print(f"최고 평균: {max(all_averages):.1f}점")\n            print(f"최저 평균: {min(all_averages):.1f}점")\n    \n    def get_top_students(self, n=3):\n        students_with_scores = [(s, s.get_average()) for s in self.students.values() if s.get_average() > 0]\n        students_with_scores.sort(key=lambda x: x[1], reverse=True)\n        \n        print(f"\\n=== 상위 {n}명 학생 ===")\n        for i, (student, avg) in enumerate(students_with_scores[:n]):\n            print(f"{i+1}위: {student.name} (평균: {avg:.1f}점)")\n\n# 시스템 사용 예제\nprint("=== 학생 관리 시스템 ===")\n\n# 학생 관리자 생성\nmanager = StudentManager()\n\n# 학생 등록\nmanager.add_student("2024001", "김철수", 1)\nmanager.add_student("2024002", "이영희", 1)\nmanager.add_student("2024003", "박민수", 2)\nmanager.add_student("2024004", "최지연", 1)\n\n# 성적 입력\nstudents = {\n    "2024001": [("수학", [85, 90, 88]), ("영어", [92, 88, 90]), ("국어", [78, 82, 85])],\n    "2024002": [("수학", [95, 92, 94]), ("영어", [88, 85, 90]), ("국어", [90, 88, 92])],\n    "2024003": [("수학", [76, 80, 78]), ("영어", [82, 79, 85]), ("국어", [88, 85, 90])],\n    "2024004": [("수학", [88, 85, 90]), ("영어", [94, 92, 96]), ("국어", [85, 88, 87])]\n}\n\nprint("\\n=== 성적 입력 ===")\nfor student_id, subjects in students.items():\n    student = manager.get_student(student_id)\n    if student:\n        for subject, scores in subjects:\n            for score in scores:\n                student.add_score(subject, score)\n\n# 출석 기록\nprint("\\n=== 출석 기록 ===")\nattendance_data = {\n    "2024001": [("2024-01-15", "출석"), ("2024-01-16", "출석"), ("2024-01-17", "지각")],\n    "2024002": [("2024-01-15", "출석"), ("2024-01-16", "출석"), ("2024-01-17", "출석")],\n    "2024003": [("2024-01-15", "결석"), ("2024-01-16", "출석"), ("2024-01-17", "출석")],\n    "2024004": [("2024-01-15", "출석"), ("2024-01-16", "출석"), ("2024-01-17", "출석")]\n}\n\nfor student_id, records in attendance_data.items():\n    student = manager.get_student(student_id)\n    if student:\n        for date, status in records:\n            student.mark_attendance(date, status)\n\n# 보고서 생성\nmanager.generate_class_report(1)\nmanager.get_top_students(3)',
                description: '클래스를 활용한 학생 관리 시스템입니다.',
                category: 'educational',
                levelGroup: 3
            },
            {
                id: 'i_l3_3',
                title: '온라인 상점 시스템',
                code: 'class Product:\n    def __init__(self, product_id, name, price, stock, category):\n        self.product_id = product_id\n        self.name = name\n        self.price = price\n        self.stock = stock\n        self.category = category\n        self.reviews = []\n    \n    def add_review(self, rating, comment):\n        self.reviews.append({"rating": rating, "comment": comment})\n        print(f"리뷰가 추가되었습니다: {rating}점 - {comment}")\n    \n    def get_average_rating(self):\n        if not self.reviews:\n            return 0\n        return sum(review["rating"] for review in self.reviews) / len(self.reviews)\n    \n    def update_stock(self, quantity):\n        self.stock += quantity\n        print(f"{self.name} 재고가 {quantity}개 {'증가' if quantity > 0 else '감소'}했습니다. 현재 재고: {self.stock}개")\n\nclass ShoppingCart:\n    def __init__(self):\n        self.items = {}\n    \n    def add_item(self, product, quantity):\n        if product.stock >= quantity:\n            if product.product_id in self.items:\n                self.items[product.product_id]["quantity"] += quantity\n            else:\n                self.items[product.product_id] = {\n                    "product": product,\n                    "quantity": quantity\n                }\n            print(f"{product.name} {quantity}개가 장바구니에 추가되었습니다.")\n            return True\n        else:\n            print(f"재고가 부족합니다. (요청: {quantity}개, 재고: {product.stock}개)")\n            return False\n    \n    def remove_item(self, product_id, quantity=None):\n        if product_id in self.items:\n            if quantity is None or quantity >= self.items[product_id]["quantity"]:\n                removed_item = self.items.pop(product_id)\n                print(f"{removed_item['product'].name}이 장바구니에서 완전히 제거되었습니다.")\n            else:\n                self.items[product_id]["quantity"] -= quantity\n                print(f"{self.items[product_id]['product'].name} {quantity}개가 장바구니에서 제거되었습니다.")\n        else:\n            print("해당 상품이 장바구니에 없습니다.")\n    \n    def get_total(self):\n        total = 0\n        for item in self.items.values():\n            total += item["product"].price * item["quantity"]\n        return total\n    \n    def display_cart(self):\n        if not self.items:\n            print("장바구니가 비어있습니다.")\n            return\n        \n        print("\\n=== 장바구니 내역 ===")\n        total = 0\n        for item in self.items.values():\n            product = item["product"]\n            quantity = item["quantity"]\n            subtotal = product.price * quantity\n            total += subtotal\n            \n            print(f"{product.name} x{quantity}개")\n            print(f"  단가: {product.price:,}원 | 소계: {subtotal:,}원")\n        \n        print(f"\\n총 금액: {total:,}원")\n        return total\n\nclass OnlineStore:\n    def __init__(self, store_name):\n        self.store_name = store_name\n        self.products = {}\n        self.orders = []\n    \n    def add_product(self, product):\n        self.products[product.product_id] = product\n        print(f"상품 '{product.name}'이 등록되었습니다.")\n    \n    def display_products(self, category=None):\n        print(f"\\n=== {self.store_name} 상품 목록 ===")\n        if category:\n            print(f"카테고리: {category}")\n        \n        filtered_products = self.products.values()\n        if category:\n            filtered_products = [p for p in filtered_products if p.category == category]\n        \n        if not filtered_products:\n            print("상품이 없습니다.")\n            return\n        \n        for product in filtered_products:\n            rating = product.get_average_rating()\n            rating_str = f"{rating:.1f}점" if rating > 0 else "리뷰 없음"\n            stock_status = "재고 있음" if product.stock > 0 else "품절"\n            \n            print(f"\\n[{product.product_id}] {product.name}")\n            print(f"  가격: {product.price:,}원 | 재고: {product.stock}개 ({stock_status})")\n            print(f"  카테고리: {product.category} | 평점: {rating_str}")\n    \n    def search_products(self, keyword):\n        print(f"\\n=== '{keyword}' 검색 결과 ===")\n        found_products = []\n        \n        for product in self.products.values():\n            if keyword.lower() in product.name.lower() or keyword.lower() in product.category.lower():\n                found_products.append(product)\n        \n        if found_products:\n            for product in found_products:\n                rating = product.get_average_rating()\n                rating_str = f"{rating:.1f}점" if rating > 0 else "리뷰 없음"\n                print(f"[{product.product_id}] {product.name} - {product.price:,}원 (평점: {rating_str})")\n        else:\n            print("검색 결과가 없습니다.")\n        \n        return found_products\n    \n    def process_order(self, cart):\n        if not cart.items:\n            print("장바구니가 비어있습니다.")\n            return False\n        \n        # 재고 확인\n        for item in cart.items.values():\n            product = item["product"]\n            quantity = item["quantity"]\n            if product.stock < quantity:\n                print(f"주문 실패: {product.name} 재고 부족")\n                return False\n        \n        # 주문 처리\n        order_id = len(self.orders) + 1\n        order = {\n            "order_id": order_id,\n            "items": dict(cart.items),\n            "total": cart.get_total(),\n            "status": "완료"\n        }\n        \n        # 재고 차감\n        for item in cart.items.values():\n            product = item["product"]\n            quantity = item["quantity"]\n            product.update_stock(-quantity)\n        \n        self.orders.append(order)\n        print(f"\\n주문이 완료되었습니다! 주문번호: {order_id}")\n        print(f"총 결제 금액: {order['total']:,}원")\n        \n        # 장바구니 비우기\n        cart.items.clear()\n        return True\n\n# 온라인 상점 시스템 사용 예제\nprint("=== 온라인 상점 시스템 ===")\n\n# 상점 생성\nstore = OnlineStore("파이썬 마켓")\n\n# 상품 등록\nproducts_data = [\n    ("P001", "노트북", 1200000, 10, "전자제품"),\n    ("P002", "마우스", 25000, 50, "전자제품"),\n    ("P003", "키보드", 80000, 30, "전자제품"),\n    ("P004", "모니터", 300000, 15, "전자제품"),\n    ("P005", "책상", 150000, 5, "가구"),\n    ("P006", "의자", 200000, 8, "가구")\n]\n\nfor product_data in products_data:\n    product = Product(*product_data)\n    store.add_product(product)\n\n# 리뷰 추가\nstore.products["P001"].add_review(5, "성능이 뛰어납니다!")\nstore.products["P001"].add_review(4, "가격 대비 좋아요")\nstore.products["P002"].add_review(5, "사용하기 편해요")\n\n# 상품 목록 확인\nstore.display_products("전자제품")\n\n# 상품 검색\nstore.search_products("노트북")\n\n# 장바구니 사용\ncart = ShoppingCart()\ncart.add_item(store.products["P001"], 1)\ncart.add_item(store.products["P002"], 2)\ncart.add_item(store.products["P005"], 1)\n\n# 장바구니 확인 및 주문\ncart.display_cart()\nstore.process_order(cart)',
                description: '클래스를 활용한 온라인 상점 시스템입니다.',
                category: 'business',
                levelGroup: 3
            },
            
            // Level 4: 데이터 구조 활용 (3개 예제)
            {
                id: 'i_l4_1',
                title: '고급 주소록 관리 시스템',
                code: 'def create_advanced_phonebook():\n    contacts = {}\n    groups = {}\n    call_history = []\n    \n    def add_contact(name, phone, email=None, address=None, birthday=None, group="기본"):\n        if name in contacts:\n            print(f"'{name}' 연락처가 이미 존재합니다.")\n            return False\n        \n        contacts[name] = {\n            "phone": phone,\n            "email": email,\n            "address": address,\n            "birthday": birthday,\n            "group": group,\n            "created_date": "2024-01-15",\n            "call_count": 0,\n            "last_contacted": None\n        }\n        \n        # 그룹에 추가\n        if group not in groups:\n            groups[group] = []\n        groups[group].append(name)\n        \n        print(f"연락처 '{name}'이 추가되었습니다.")\n        return True\n    \n    def search_contacts(keyword):\n        results = []\n        keyword_lower = keyword.lower()\n        \n        for name, info in contacts.items():\n            # 이름, 전화번호, 이메일에서 검색\n            if (keyword_lower in name.lower() or \n                keyword_lower in info["phone"] or \n                (info["email"] and keyword_lower in info["email"].lower())):\n                results.append((name, info))\n        \n        return results\n    \n    def display_contacts(group=None, sort_by="name"):\n        target_contacts = contacts\n        \n        if group and group in groups:\n            target_names = groups[group]\n            target_contacts = {name: contacts[name] for name in target_names if name in contacts}\n        \n        if not target_contacts:\n            print("표시할 연락처가 없습니다.")\n            return\n        \n        # 정렬\n        if sort_by == "name":\n            sorted_contacts = sorted(target_contacts.items())\n        elif sort_by == "call_count":\n            sorted_contacts = sorted(target_contacts.items(), key=lambda x: x[1]["call_count"], reverse=True)\n        else:\n            sorted_contacts = list(target_contacts.items())\n        \n        group_text = f" ({group} 그룹)" if group else ""\n        print(f"\\n=== 연락처 목록{group_text} ===")\n        print("-" * 70)\n        \n        for name, info in sorted_contacts:\n            print(f"이름: {name:<10} 전화: {info['phone']:<15} 그룹: {info['group']}")\n            if info["email"]:\n                print(f"      이메일: {info['email']}")\n            if info["call_count"] > 0:\n                print(f"      통화횟수: {info['call_count']}회, 최근통화: {info['last_contacted']}")\n            print()\n    \n    def make_call(name):\n        if name not in contacts:\n            print(f"'{name}' 연락처를 찾을 수 없습니다.")\n            return False\n        \n        # 통화 기록 업데이트\n        contacts[name]["call_count"] += 1\n        contacts[name]["last_contacted"] = "2024-01-15 14:30"\n        \n        # 통화 이력에 추가\n        call_history.append({\n            "name": name,\n            "phone": contacts[name]["phone"],\n            "datetime": "2024-01-15 14:30",\n            "type": "발신"\n        })\n        \n        print(f"📞 {name}({contacts[name]['phone']})에게 전화를 걸었습니다.")\n        return True\n    \n    def show_call_history(limit=10):\n        if not call_history:\n            print("통화 기록이 없습니다.")\n            return\n        \n        print(f"\\n=== 최근 통화 기록 (최근 {limit}건) ===")\n        print("-" * 50)\n        \n        recent_calls = call_history[-limit:]\n        for call in reversed(recent_calls):\n            print(f"{call['datetime']} | {call['type']} | {call['name']} ({call['phone']})")\n    \n    def get_statistics():\n        if not contacts:\n            print("연락처가 없습니다.")\n            return\n        \n        total_contacts = len(contacts)\n        groups_count = len(groups)\n        total_calls = len(call_history)\n        \n        # 가장 많이 통화한 연락처\n        most_called = max(contacts.items(), key=lambda x: x[1]["call_count"])\n        \n        # 그룹별 연락처 수\n        group_stats = {group: len(members) for group, members in groups.items()}\n        \n        print("\\n=== 주소록 통계 ===")\n        print(f"총 연락처: {total_contacts}개")\n        print(f"총 그룹: {groups_count}개")\n        print(f"총 통화: {total_calls}회")\n        \n        if most_called[1]["call_count"] > 0:\n            print(f"최다 통화: {most_called[0]} ({most_called[1]['call_count']}회)")\n        \n        print("\\n그룹별 연락처:")\n        for group, count in group_stats.items():\n            print(f"  {group}: {count}명")\n    \n    def export_contacts():\n        print("\\n=== 연락처 내보내기 ===")\n        export_data = []\n        \n        for name, info in contacts.items():\n            export_data.append({\n                "이름": name,\n                "전화번호": info["phone"],\n                "이메일": info["email"] or "",\n                "주소": info["address"] or "",\n                "그룹": info["group"],\n                "통화횟수": info["call_count"]\n            })\n        \n        # CSV 형태로 출력 (시뮬레이션)\n        print("이름,전화번호,이메일,주소,그룹,통화횟수")\n        for data in export_data:\n            print(f"{data['이름']},{data['전화번호']},{data['이메일']},{data['주소']},{data['그룹']},{data['통화횟수']}")\n        \n        print(f"\\n총 {len(export_data)}개의 연락처를 내보냈습니다.")\n    \n    # 시스템 실행 예제\n    print("=== 고급 주소록 관리 시스템 ===")\n    \n    # 연락처 추가\n    sample_contacts = [\n        ("김철수", "010-1234-5678", "kim@email.com", "서울시 강남구", "1990-05-15", "친구"),\n        ("이영희", "010-2345-6789", "lee@email.com", "서울시 서초구", "1992-08-20", "회사"),\n        ("박민수", "010-3456-7890", None, "부산시 해운대구", "1988-12-03", "친구"),\n        ("최지연", "010-4567-8901", "choi@email.com", None, "1995-03-10", "회사"),\n        ("정태웅", "010-5678-9012", "jung@email.com", "대구시 중구", "1987-11-25", "가족")\n    ]\n    \n    for contact_data in sample_contacts:\n        add_contact(*contact_data)\n    \n    # 연락처 확인\n    display_contacts()\n    \n    # 특정 그룹 확인\n    display_contacts("친구")\n    \n    # 검색 기능\n    print("\\n=== 검색 결과: '김' ===")\n    search_results = search_contacts("김")\n    for name, info in search_results:\n        print(f"검색됨: {name} - {info['phone']}")\n    \n    # 통화 기능\n    print("\\n=== 통화 실행 ===")\n    make_call("김철수")\n    make_call("이영희")\n    make_call("김철수")  # 김철수에게 다시 전화\n    \n    # 통화 기록 확인\n    show_call_history()\n    \n    # 통화 횟수 기준 정렬\n    print("\\n=== 통화 횟수 기준 정렬 ===")\n    display_contacts(sort_by="call_count")\n    \n    # 통계 확인\n    get_statistics()\n    \n    # 연락처 내보내기\n    export_contacts()\n\ncreate_advanced_phonebook()',
                description: '딕셔너리와 리스트를 활용한 고급 주소록 관리 시스템입니다.',
                category: 'management',
                levelGroup: 4
            },
            {
                id: 'i_l4_2',
                title: '재고 관리 시스템',
                code: 'def create_inventory_system():\n    inventory = {}\n    suppliers = {}\n    transactions = []\n    alerts = []\n    \n    def add_supplier(supplier_id, name, contact, email):\n        suppliers[supplier_id] = {\n            "name": name,\n            "contact": contact,\n            "email": email,\n            "products": [],\n            "total_orders": 0\n        }\n        print(f"공급업체 '{name}'이 등록되었습니다.")\n    \n    def add_product(product_id, name, category, price, min_stock, supplier_id, initial_stock=0):\n        if supplier_id not in suppliers:\n            print(f"공급업체 ID '{supplier_id}'를 찾을 수 없습니다.")\n            return False\n        \n        inventory[product_id] = {\n            "name": name,\n            "category": category,\n            "price": price,\n            "current_stock": initial_stock,\n            "min_stock": min_stock,\n            "supplier_id": supplier_id,\n            "total_sold": 0,\n            "total_purchased": initial_stock,\n            "last_restocked": "2024-01-15" if initial_stock > 0 else None\n        }\n        \n        suppliers[supplier_id]["products"].append(product_id)\n        \n        # 초기 재고가 있다면 거래 기록에 추가\n        if initial_stock > 0:\n            transactions.append({\n                "type": "입고",\n                "product_id": product_id,\n                "quantity": initial_stock,\n                "date": "2024-01-15",\n                "supplier": suppliers[supplier_id]["name"],\n                "note": "초기 재고"\n            })\n        \n        print(f"상품 '{name}'이 재고에 추가되었습니다.")\n        check_low_stock(product_id)  # 재고 부족 알림 확인\n        return True\n    \n    def restock_product(product_id, quantity, supplier_id=None):\n        if product_id not in inventory:\n            print(f"상품 ID '{product_id}'를 찾을 수 없습니다.")\n            return False\n        \n        product = inventory[product_id]\n        \n        # 공급업체 확인\n        if supplier_id and supplier_id != product["supplier_id"]:\n            print(f"해당 상품의 공급업체가 아닙니다.")\n            return False\n        \n        # 재고 업데이트\n        product["current_stock"] += quantity\n        product["total_purchased"] += quantity\n        product["last_restocked"] = "2024-01-15"\n        \n        # 공급업체 주문 수 증가\n        suppliers[product["supplier_id"]]["total_orders"] += 1\n        \n        # 거래 기록 추가\n        transactions.append({\n            "type": "입고",\n            "product_id": product_id,\n            "quantity": quantity,\n            "date": "2024-01-15",\n            "supplier": suppliers[product["supplier_id"]]["name"],\n            "note": f"재고 보충"\n        })\n        \n        print(f"'{product['name']}' {quantity}개 입고 완료. 현재 재고: {product['current_stock']}개")\n        return True\n    \n    def sell_product(product_id, quantity, customer=None):\n        if product_id not in inventory:\n            print(f"상품 ID '{product_id}'를 찾을 수 없습니다.")\n            return False\n        \n        product = inventory[product_id]\n        \n        if product["current_stock"] < quantity:\n            print(f"재고가 부족합니다. (요청: {quantity}개, 재고: {product['current_stock']}개)")\n            return False\n        \n        # 재고 업데이트\n        product["current_stock"] -= quantity\n        product["total_sold"] += quantity\n        \n        # 거래 기록 추가\n        transactions.append({\n            "type": "출고",\n            "product_id": product_id,\n            "quantity": quantity,\n            "date": "2024-01-15",\n            "customer": customer or "일반 고객",\n            "revenue": product["price"] * quantity\n        })\n        \n        print(f"'{product['name']}' {quantity}개 판매 완료. 현재 재고: {product['current_stock']}개")\n        check_low_stock(product_id)  # 재고 부족 알림 확인\n        return True\n    \n    def check_low_stock(product_id):\n        product = inventory[product_id]\n        if product["current_stock"] <= product["min_stock"]:\n            alert = {\n                "type": "재고 부족",\n                "product_id": product_id,\n                "product_name": product["name"],\n                "current_stock": product["current_stock"],\n                "min_stock": product["min_stock"],\n                "date": "2024-01-15"\n            }\n            alerts.append(alert)\n            print(f"⚠️ 알림: '{product['name']}' 재고 부족! (현재: {product['current_stock']}개, 최소: {product['min_stock']}개)")\n    \n    def generate_inventory_report():\n        print("\\n=== 재고 현황 보고서 ===")\n        \n        if not inventory:\n            print("등록된 상품이 없습니다.")\n            return\n        \n        total_value = 0\n        low_stock_items = []\n        \n        print(f"{'상품명':<15} {'카테고리':<10} {'현재재고':<8} {'최소재고':<8} {'재고가치':<12} {'상태'}")\n        print("-" * 80)\n        \n        for product_id, product in inventory.items():\n            stock_value = product["current_stock"] * product["price"]\n            total_value += stock_value\n            \n            status = "정상"\n            if product["current_stock"] == 0:\n                status = "품절"\n                low_stock_items.append(product["name"])\n            elif product["current_stock"] <= product["min_stock"]:\n                status = "부족"\n                low_stock_items.append(product["name"])\n            \n            print(f"{product['name']:<15} {product['category']:<10} {product['current_stock']:<8} {product['min_stock']:<8} {stock_value:>10,}원 {status}")\n        \n        print("-" * 80)\n        print(f"총 재고 가치: {total_value:,}원")\n        \n        if low_stock_items:\n            print(f"\\n📋 주의 필요 상품 ({len(low_stock_items)}개): {', '.join(low_stock_items)}")\n    \n    def show_transaction_history(transaction_type=None, limit=10):\n        filtered_transactions = transactions\n        \n        if transaction_type:\n            filtered_transactions = [t for t in transactions if t["type"] == transaction_type]\n        \n        if not filtered_transactions:\n            print("거래 기록이 없습니다.")\n            return\n        \n        type_text = f" ({transaction_type})" if transaction_type else ""\n        print(f"\\n=== 거래 내역{type_text} (최근 {limit}건) ===")\n        print("-" * 70)\n        \n        recent_transactions = filtered_transactions[-limit:]\n        for transaction in reversed(recent_transactions):\n            product_name = inventory[transaction["product_id"]]["name"]\n            print(f"{transaction['date']} | {transaction['type']} | {product_name} {transaction['quantity']}개")\n            \n            if transaction["type"] == "입고":\n                print(f"           공급업체: {transaction['supplier']}")\n            else:\n                revenue = transaction.get("revenue", 0)\n                print(f"           고객: {transaction.get('customer', 'N/A')} | 매출: {revenue:,}원")\n            print()\n    \n    def get_sales_analytics():\n        sales_data = [t for t in transactions if t["type"] == "출고"]\n        \n        if not sales_data:\n            print("판매 데이터가 없습니다.")\n            return\n        \n        # 매출 통계\n        total_revenue = sum(t.get("revenue", 0) for t in sales_data)\n        total_units_sold = sum(t["quantity"] for t in sales_data)\n        \n        # 상품별 판매량\n        product_sales = {}\n        for transaction in sales_data:\n            product_id = transaction["product_id"]\n            if product_id not in product_sales:\n                product_sales[product_id] = {"quantity": 0, "revenue": 0}\n            \n            product_sales[product_id]["quantity"] += transaction["quantity"]\n            product_sales[product_id]["revenue"] += transaction.get("revenue", 0)\n        \n        print("\\n=== 판매 분석 ===")\n        print(f"총 매출: {total_revenue:,}원")\n        print(f"총 판매량: {total_units_sold}개")\n        print(f"평균 거래액: {total_revenue//len(sales_data):,}원" if sales_data else "평균 거래액: 0원")\n        \n        if product_sales:\n            print("\\n상품별 판매 실적:")\n            sorted_products = sorted(product_sales.items(), key=lambda x: x[1]["revenue"], reverse=True)\n            \n            for product_id, data in sorted_products[:5]:  # 상위 5개\n                product_name = inventory[product_id]["name"]\n                print(f"  {product_name}: {data['quantity']}개, {data['revenue']:,}원")\n    \n    # 시스템 실행 예제\n    print("=== 재고 관리 시스템 ===")\n    \n    # 공급업체 등록\n    add_supplier("S001", "ABC 전자", "02-1234-5678", "abc@supplier.com")\n    add_supplier("S002", "XYZ 가구", "02-9876-5432", "xyz@furniture.com")\n    \n    # 상품 등록\n    products_data = [\n        ("P001", "노트북", "전자제품", 1200000, 5, "S001", 10),\n        ("P002", "마우스", "전자제품", 25000, 20, "S001", 50),\n        ("P003", "키보드", "전자제품", 80000, 15, "S001", 30),\n        ("P004", "책상", "가구", 150000, 3, "S002", 8),\n        ("P005", "의자", "가구", 200000, 2, "S002", 5)\n    ]\n    \n    for product_data in products_data:\n        add_product(*product_data)\n    \n    # 판매 활동\n    print("\\n=== 판매 활동 ===")\n    sell_product("P001", 2, "김고객")\n    sell_product("P002", 10, "이회사")\n    sell_product("P004", 3, "박사무실")\n    sell_product("P005", 4, "최기업")  # 재고 부족 알림 발생\n    \n    # 재고 보충\n    print("\\n=== 재고 보충 ===")\n    restock_product("P005", 10)\n    restock_product("P002", 25)\n    \n    # 보고서 생성\n    generate_inventory_report()\n    show_transaction_history("출고", 5)\n    get_sales_analytics()\n\ncreate_inventory_system()',
                description: '딕셔너리와 리스트를 활용한 재고 관리 시스템입니다.',
                category: 'business',
                levelGroup: 4
            },
            {
                id: 'i_l4_3',
                title: '프로젝트 관리 시스템',
                code: 'def create_project_management_system():\n    projects = {}\n    tasks = {}\n    team_members = {}\n    task_counter = 0\n    \n    def add_team_member(member_id, name, role, email):\n        team_members[member_id] = {\n            "name": name,\n            "role": role,\n            "email": email,\n            "assigned_tasks": [],\n            "completed_tasks": 0,\n            "current_workload": 0\n        }\n        print(f"팀원 {name}({role})이 추가되었습니다.")\n    \n    def create_project(project_id, name, description, start_date, deadline):\n        projects[project_id] = {\n            "name": name,\n            "description": description,\n            "start_date": start_date,\n            "deadline": deadline,\n            "status": "계획중",\n            "tasks": [],\n            "completion_rate": 0\n        }\n        print(f"프로젝트 '{name}'이 생성되었습니다.")\n    \n    def add_task(project_id, title, description, assignee_id, priority, estimated_hours):\n        nonlocal task_counter\n        \n        if project_id not in projects:\n            print(f"프로젝트 ID '{project_id}'를 찾을 수 없습니다.")\n            return False\n        \n        if assignee_id not in team_members:\n            print(f"팀원 ID '{assignee_id}'를 찾을 수 없습니다.")\n            return False\n        \n        task_counter += 1\n        task_id = f"T{task_counter:03d}"\n        \n        tasks[task_id] = {\n            "title": title,\n            "description": description,\n            "project_id": project_id,\n            "assignee_id": assignee_id,\n            "priority": priority,\n            "estimated_hours": estimated_hours,\n            "actual_hours": 0,\n            "status": "할당됨",\n            "created_date": "2024-01-15",\n            "due_date": None,\n            "completion_date": None\n        }\n        \n        # 프로젝트와 팀원에 태스크 연결\n        projects[project_id]["tasks"].append(task_id)\n        team_members[assignee_id]["assigned_tasks"].append(task_id)\n        team_members[assignee_id]["current_workload"] += estimated_hours\n        \n        assignee_name = team_members[assignee_id]["name"]\n        print(f"태스크 '{title}'이 {assignee_name}에게 할당되었습니다. (ID: {task_id})")\n        return task_id\n    \n    def update_task_status(task_id, new_status, actual_hours=None):\n        if task_id not in tasks:\n            print(f"태스크 ID '{task_id}'를 찾을 수 없습니다.")\n            return False\n        \n        task = tasks[task_id]\n        old_status = task["status"]\n        task["status"] = new_status\n        \n        if actual_hours:\n            task["actual_hours"] = actual_hours\n        \n        assignee_id = task["assignee_id"]\n        assignee = team_members[assignee_id]\n        \n        # 완료된 경우 처리\n        if new_status == "완료" and old_status != "완료":\n            task["completion_date"] = "2024-01-15"\n            assignee["completed_tasks"] += 1\n            assignee["current_workload"] -= task["estimated_hours"]\n            \n            # 프로젝트 완료율 업데이트\n            project_id = task["project_id"]\n            update_project_completion_rate(project_id)\n        \n        print(f"태스크 '{task['title']}' 상태가 '{old_status}' → '{new_status}'로 변경되었습니다.")\n        return True\n    \n    def update_project_completion_rate(project_id):\n        if project_id not in projects:\n            return\n        \n        project = projects[project_id]\n        task_ids = project["tasks"]\n        \n        if not task_ids:\n            project["completion_rate"] = 0\n            return\n        \n        completed_tasks = sum(1 for tid in task_ids if tasks[tid]["status"] == "완료")\n        completion_rate = (completed_tasks / len(task_ids)) * 100\n        project["completion_rate"] = completion_rate\n        \n        # 프로젝트 상태 업데이트\n        if completion_rate == 100:\n            project["status"] = "완료"\n        elif completion_rate > 0:\n            project["status"] = "진행중"\n    \n    def get_team_member_workload():\n        print("\\n=== 팀원별 업무량 ===")\n        \n        for member_id, member in team_members.items():\n            print(f"\\n👤 {member['name']} ({member['role']})")\n            print(f"   현재 업무량: {member['current_workload']}시간")\n            print(f"   완료한 태스크: {member['completed_tasks']}개")\n            print(f"   진행중인 태스크: {len(member['assigned_tasks']) - member['completed_tasks']}개")\n            \n            if member["assigned_tasks"]:\n                print("   담당 태스크:")\n                for task_id in member["assigned_tasks"]:\n                    task = tasks[task_id]\n                    status_icon = "✅" if task["status"] == "완료" else "🔄" if task["status"] == "진행중" else "📋"\n                    print(f"     {status_icon} {task['title']} ({task['status']})")\n    \n    def generate_project_report(project_id):\n        if project_id not in projects:\n            print(f"프로젝트 ID '{project_id}'를 찾을 수 없습니다.")\n            return\n        \n        project = projects[project_id]\n        task_ids = project["tasks"]\n        \n        print(f"\\n=== {project['name']} 프로젝트 보고서 ===")\n        print(f"설명: {project['description']}")\n        print(f"시작일: {project['start_date']}")\n        print(f"마감일: {project['deadline']}")\n        print(f"상태: {project['status']}")\n        print(f"완료율: {project['completion_rate']:.1f}%")\n        \n        if task_ids:\n            print(f"\\n📋 태스크 목록 ({len(task_ids)}개):")\n            \n            for task_id in task_ids:\n                task = tasks[task_id]\n                assignee_name = team_members[task["assignee_id"]]["name"]\n                status_icon = {"할당됨": "📋", "진행중": "🔄", "완료": "✅", "보류": "⏸️"}.get(task["status"], "❓")\n                \n                print(f"  {status_icon} {task['title']}")\n                print(f"      담당자: {assignee_name} | 우선순위: {task['priority']} | 예상: {task['estimated_hours']}h")\n                if task["actual_hours"] > 0:\n                    print(f"      실제 소요: {task['actual_hours']}h")\n        \n        # 프로젝트 통계\n        if task_ids:\n            total_estimated = sum(tasks[tid]["estimated_hours"] for tid in task_ids)\n            total_actual = sum(tasks[tid]["actual_hours"] for tid in task_ids if tasks[tid]["actual_hours"] > 0)\n            completed_tasks = sum(1 for tid in task_ids if tasks[tid]["status"] == "완료")\n            \n            print(f"\\n📊 프로젝트 통계:")\n            print(f"   총 예상 시간: {total_estimated}시간")\n            print(f"   실제 소요 시간: {total_actual}시간")\n            print(f"   완료된 태스크: {completed_tasks}/{len(task_ids)}개")\n    \n    def get_priority_tasks():\n        high_priority_tasks = []\n        for task_id, task in tasks.items():\n            if task["priority"] == "높음" and task["status"] != "완료":\n                high_priority_tasks.append((task_id, task))\n        \n        if high_priority_tasks:\n            print("\\n🚨 우선순위 높은 미완료 태스크:")\n            for task_id, task in high_priority_tasks:\n                assignee_name = team_members[task["assignee_id"]]["name"]\n                project_name = projects[task["project_id"]]["name"]\n                print(f"  • {task['title']} (담당: {assignee_name}, 프로젝트: {project_name})")\n        else:\n            print("\\n✅ 우선순위 높은 미완료 태스크가 없습니다.")\n    \n    # 시스템 사용 예제\n    print("=== 프로젝트 관리 시스템 ===")\n    \n    # 팀원 추가\n    add_team_member("M001", "김개발", "백엔드 개발자", "kim@company.com")\n    add_team_member("M002", "이디자인", "UI/UX 디자이너", "lee@company.com")\n    add_team_member("M003", "박프론트", "프론트엔드 개발자", "park@company.com")\n    add_team_member("M004", "최테스트", "QA 엔지니어", "choi@company.com")\n    \n    # 프로젝트 생성\n    create_project("P001", "웹사이트 리뉴얼", "회사 홈페이지 전면 리뉴얼", "2024-01-15", "2024-03-15")\n    create_project("P002", "모바일 앱 개발", "고객용 모바일 애플리케이션 개발", "2024-02-01", "2024-05-01")\n    \n    # 태스크 추가\n    add_task("P001", "데이터베이스 설계", "사용자 및 콘텐츠 DB 스키마 설계", "M001", "높음", 16)\n    add_task("P001", "UI/UX 디자인", "전체 페이지 디자인 시스템 구축", "M002", "높음", 24)\n    add_task("P001", "프론트엔드 개발", "React 기반 사용자 인터페이스 구현", "M003", "중간", 32)\n    add_task("P001", "백엔드 API 개발", "RESTful API 서버 구축", "M001", "높음", 40)\n    add_task("P001", "통합 테스트", "전체 시스템 기능 테스트", "M004", "중간", 16)\n    \n    # 태스크 상태 업데이트\n    print("\\n=== 작업 진행 상황 업데이트 ===")\n    update_task_status("T001", "진행중")\n    update_task_status("T002", "완료", 22)\n    update_task_status("T003", "진행중")\n    \n    # 보고서 생성\n    generate_project_report("P001")\n    get_team_member_workload()\n    get_priority_tasks()\n\ncreate_project_management_system()',
                description: '딕셔너리와 리스트를 활용한 프로젝트 관리 시스템입니다.',
                category: 'management',
                levelGroup: 4
            },
            
            // Level 5: 종합 시스템 (3개 예제)
            {
                id: 'i_l5_1',
                title: '미니 전자상거래 시스템',
                code: 'def create_ecommerce_system():\n    products = {}\n    users = {}\n    orders = {}\n    shopping_carts = {}\n    reviews = {}\n    \n    order_counter = 0\n    \n    def register_user(user_id, name, email, address):\n        users[user_id] = {\n            "name": name,\n            "email": email,\n            "address": address,\n            "join_date": "2024-01-15",\n            "order_history": [],\n            "total_spent": 0\n        }\n        shopping_carts[user_id] = []\n        print(f"사용자 {name}이 등록되었습니다.")\n    \n    def add_product(product_id, name, price, category, stock, description):\n        products[product_id] = {\n            "name": name,\n            "price": price,\n            "category": category,\n            "stock": stock,\n            "description": description,\n            "sales_count": 0,\n            "revenue": 0,\n            "reviews": []\n        }\n        reviews[product_id] = []\n        print(f"상품 '{name}'이 등록되었습니다.")\n    \n    def add_to_cart(user_id, product_id, quantity):\n        if user_id not in users:\n            print("사용자를 찾을 수 없습니다.")\n            return False\n        \n        if product_id not in products:\n            print("상품을 찾을 수 없습니다.")\n            return False\n        \n        product = products[product_id]\n        if product["stock"] < quantity:\n            print(f"재고가 부족합니다. (재고: {product['stock']}개)")\n            return False\n        \n        cart = shopping_carts[user_id]\n        \n        # 이미 장바구니에 있는 상품인지 확인\n        for item in cart:\n            if item["product_id"] == product_id:\n                item["quantity"] += quantity\n                print(f"장바구니에 {product['name']} {quantity}개가 추가되었습니다.")\n                return True\n        \n        # 새 상품 추가\n        cart.append({\n            "product_id": product_id,\n            "product_name": product["name"],\n            "price": product["price"],\n            "quantity": quantity\n        })\n        \n        print(f"장바구니에 {product['name']} {quantity}개가 추가되었습니다.")\n        return True\n    \n    def view_cart(user_id):\n        if user_id not in users:\n            print("사용자를 찾을 수 없습니다.")\n            return\n        \n        cart = shopping_carts[user_id]\n        if not cart:\n            print("장바구니가 비어있습니다.")\n            return\n        \n        print(f"\\n=== {users[user_id]['name']}님의 장바구니 ===")\n        total = 0\n        \n        for item in cart:\n            subtotal = item["price"] * item["quantity"]\n            total += subtotal\n            print(f"{item['product_name']} x{item['quantity']} = {subtotal:,}원")\n        \n        print(f"총 금액: {total:,}원")\n        return total\n    \n    def place_order(user_id):\n        nonlocal order_counter\n        \n        if user_id not in users:\n            print("사용자를 찾을 수 없습니다.")\n            return False\n        \n        cart = shopping_carts[user_id]\n        if not cart:\n            print("장바구니가 비어있습니다.")\n            return False\n        \n        # 재고 확인\n        for item in cart:\n            product = products[item["product_id"]]\n            if product["stock"] < item["quantity"]:\n                print(f"주문 실패: {item['product_name']} 재고 부족")\n                return False\n        \n        # 주문 생성\n        order_counter += 1\n        order_id = f"ORD{order_counter:04d}"\n        \n        order_total = sum(item["price"] * item["quantity"] for item in cart)\n        \n        orders[order_id] = {\n            "user_id": user_id,\n            "items": cart.copy(),\n            "total_amount": order_total,\n            "order_date": "2024-01-15",\n            "status": "주문완료",\n            "shipping_address": users[user_id]["address"]\n        }\n        \n        # 재고 차감 및 판매량 업데이트\n        for item in cart:\n            product = products[item["product_id"]]\n            product["stock"] -= item["quantity"]\n            product["sales_count"] += item["quantity"]\n            product["revenue"] += item["price"] * item["quantity"]\n        \n        # 사용자 정보 업데이트\n        users[user_id]["order_history"].append(order_id)\n        users[user_id]["total_spent"] += order_total\n        \n        # 장바구니 비우기\n        shopping_carts[user_id] = []\n        \n        print(f"\\n주문이 완료되었습니다! 주문번호: {order_id}")\n        print(f"총 결제 금액: {order_total:,}원")\n        return order_id\n    \n    def add_review(user_id, product_id, rating, comment):\n        if user_id not in users:\n            print("사용자를 찾을 수 없습니다.")\n            return False\n        \n        if product_id not in products:\n            print("상품을 찾을 수 없습니다.")\n            return False\n        \n        # 해당 상품을 구매한 이력이 있는지 확인\n        user_orders = users[user_id]["order_history"]\n        purchased = False\n        \n        for order_id in user_orders:\n            order = orders[order_id]\n            for item in order["items"]:\n                if item["product_id"] == product_id:\n                    purchased = True\n                    break\n            if purchased:\n                break\n        \n        if not purchased:\n            print("구매한 상품에만 리뷰를 작성할 수 있습니다.")\n            return False\n        \n        review = {\n            "user_id": user_id,\n            "user_name": users[user_id]["name"],\n            "rating": rating,\n            "comment": comment,\n            "date": "2024-01-15"\n        }\n        \n        reviews[product_id].append(review)\n        products[product_id]["reviews"].append(review)\n        \n        print(f"리뷰가 등록되었습니다: {rating}점 - {comment}")\n        return True\n    \n    def get_product_details(product_id):\n        if product_id not in products:\n            print("상품을 찾을 수 없습니다.")\n            return\n        \n        product = products[product_id]\n        product_reviews = reviews[product_id]\n        \n        print(f"\\n=== {product['name']} 상품 정보 ===")\n        print(f"가격: {product['price']:,}원")\n        print(f"카테고리: {product['category']}")\n        print(f"재고: {product['stock']}개")\n        print(f"설명: {product['description']}")\n        print(f"판매량: {product['sales_count']}개")\n        \n        if product_reviews:\n            avg_rating = sum(r["rating"] for r in product_reviews) / len(product_reviews)\n            print(f"평점: {avg_rating:.1f}점 ({len(product_reviews)}개 리뷰)")\n            \n            print("\\n최근 리뷰:")\n            for review in product_reviews[-3:]:  # 최근 3개 리뷰\n                print(f"  ⭐ {review['rating']}점 - {review['user_name']}: {review['comment']}")\n        else:\n            print("평점: 리뷰 없음")\n    \n    def generate_sales_report():\n        print("\\n=== 판매 현황 보고서 ===")\n        \n        if not products:\n            print("등록된 상품이 없습니다.")\n            return\n        \n        total_revenue = sum(p["revenue"] for p in products.values())\n        total_sales = sum(p["sales_count"] for p in products.values())\n        \n        print(f"총 매출: {total_revenue:,}원")\n        print(f"총 판매량: {total_sales}개")\n        print(f"총 주문 수: {len(orders)}건")\n        \n        # 베스트셀러 상품\n        best_sellers = sorted(products.items(), key=lambda x: x[1]["sales_count"], reverse=True)[:3]\n        \n        print("\\n🏆 베스트셀러 상품:")\n        for i, (product_id, product) in enumerate(best_sellers, 1):\n            if product["sales_count"] > 0:\n                print(f"  {i}. {product['name']}: {product['sales_count']}개 판매, {product['revenue']:,}원")\n        \n        # 카테고리별 매출\n        category_sales = {}\n        for product in products.values():\n            category = product["category"]\n            if category not in category_sales:\n                category_sales[category] = 0\n            category_sales[category] += product["revenue"]\n        \n        print("\\n📊 카테고리별 매출:")\n        for category, revenue in sorted(category_sales.items(), key=lambda x: x[1], reverse=True):\n            print(f"  {category}: {revenue:,}원")\n    \n    # 시스템 사용 시뮬레이션\n    print("=== 미니 전자상거래 시스템 ===")\n    \n    # 사용자 등록\n    register_user("U001", "김고객", "kim@email.com", "서울시 강남구")\n    register_user("U002", "이구매", "lee@email.com", "부산시 해운대구")\n    \n    # 상품 등록\n    add_product("P001", "무선 마우스", 35000, "전자제품", 50, "고급 무선 마우스")\n    add_product("P002", "키보드", 89000, "전자제품", 30, "기계식 키보드")\n    add_product("P003", "노트북 거치대", 25000, "액세서리", 20, "알루미늄 노트북 거치대")\n    add_product("P004", "USB 허브", 18000, "전자제품", 40, "7포트 USB 3.0 허브")\n    \n    # 쇼핑 시뮬레이션\n    print("\\n=== 쇼핑 과정 ===")\n    add_to_cart("U001", "P001", 2)\n    add_to_cart("U001", "P002", 1)\n    add_to_cart("U001", "P003", 1)\n    \n    view_cart("U001")\n    order_id = place_order("U001")\n    \n    # 리뷰 작성\n    print("\\n=== 리뷰 작성 ===")\n    add_review("U001", "P001", 5, "정말 사용하기 편해요!")\n    add_review("U001", "P002", 4, "타이핑감이 좋습니다.")\n    \n    # 상품 정보 확인\n    get_product_details("P001")\n    \n    # 두 번째 고객 주문\n    add_to_cart("U002", "P001", 1)\n    add_to_cart("U002", "P004", 2)\n    place_order("U002")\n    add_review("U002", "P001", 4, "가격 대비 괜찮아요")\n    \n    # 판매 보고서\n    generate_sales_report()\n\ncreate_ecommerce_system()',
                description: '종합적인 전자상거래 시스템입니다.',
                category: 'business',
                levelGroup: 5
            }
        ]
    },
    advanced: {
        short: [
            // Level 1: 람다 함수와 고차함수 (3개 예제)
            {
                id: 'a_s1_1',
                title: '람다와 map',
                code: 'numbers = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, numbers))\nprint("제곱수:", squared)',
                description: '람다 함수와 map을 함께 사용합니다.',
                category: 'functional',
                levelGroup: 1
            },
            {
                id: 'a_s1_2',
                title: '람다와 filter',
                code: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8]\neven_numbers = list(filter(lambda x: x % 2 == 0, numbers))\nprint("짝수:", even_numbers)',
                description: '람다 함수와 filter를 사용해 조건에 맞는 값을 선택합니다.',
                category: 'functional',
                levelGroup: 1
            },
            {
                id: 'a_s1_3',
                title: '람다와 sorted',
                code: 'students = [("김철수", 85), ("이영희", 92), ("박민수", 78)]\nsorted_students = sorted(students, key=lambda x: x[1], reverse=True)\nprint("성적순:", sorted_students)',
                description: '람다 함수를 사용해 복잡한 정렬을 수행합니다.',
                category: 'functional',
                levelGroup: 1
            },
            
            // Level 2: 클래스와 객체지향 기초 (3개 예제)
            {
                id: 'a_s2_1',
                title: '클래스 기본',
                code: 'class Calculator:\n    def add(self, a, b):\n        return a + b\n    def multiply(self, a, b):\n        return a * b\n\ncalc = Calculator()\nprint("덧셈:", calc.add(5, 3))\nprint("곱셈:", calc.multiply(4, 6))',
                description: '간단한 클래스를 정의하고 사용합니다.',
                category: 'oop',
                levelGroup: 2
            },
            {
                id: 'a_s2_2',
                title: '생성자와 속성',
                code: 'class Student:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def introduce(self):\n        return f"안녕하세요, {self.name}({self.age}세)입니다."\n\nstudent = Student("김학생", 20)\nprint(student.introduce())',
                description: '생성자와 인스턴스 속성을 사용합니다.',
                category: 'oop',
                levelGroup: 2
            },
            {
                id: 'a_s2_3',
                title: '클래스 메서드',
                code: 'class MathUtils:\n    @staticmethod\n    def is_even(num):\n        return num % 2 == 0\n    \n    @classmethod\n    def create_range(cls, start, end):\n        return list(range(start, end + 1))\n\nprint("2는 짝수?", MathUtils.is_even(2))\nprint("범위:", MathUtils.create_range(1, 5))',
                description: '정적 메서드와 클래스 메서드를 사용합니다.',
                category: 'oop',
                levelGroup: 2
            },
            
            // Level 3: 제너레이터와 이터레이터 (3개 예제)
            {
                id: 'a_s3_1',
                title: '기본 제너레이터',
                code: 'def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n    yield "발사!"\n\nfor item in countdown(3):\n    print(item)',
                description: '간단한 제너레이터를 만들고 사용합니다.',
                category: 'generators',
                levelGroup: 3
            },
            {
                id: 'a_s3_2',
                title: '제너레이터 표현식',
                code: 'numbers = range(1, 6)\nsquare_gen = (x**2 for x in numbers)\nprint("제너레이터:", square_gen)\nprint("값들:", list(square_gen))',
                description: '제너레이터 표현식을 사용합니다.',
                category: 'generators',
                levelGroup: 3
            },
            {
                id: 'a_s3_3',
                title: '피보나치 제너레이터',
                code: 'def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci()\nfor _ in range(8):\n    print(next(fib), end=" ")\nprint()',
                description: '무한 피보나치 수열 제너레이터를 만듭니다.',
                category: 'generators',
                levelGroup: 3
            },
            
            // Level 4: 데코레이터와 메타프로그래밍 (3개 예제)
            {
                id: 'a_s4_1',
                title: '함수 데코레이터',
                code: 'def uppercase_result(func):\n    def wrapper(*args, **kwargs):\n        result = func(*args, **kwargs)\n        return result.upper()\n    return wrapper\n\n@uppercase_result\ndef greet(name):\n    return f"hello, {name}"\n\nprint(greet("python"))',
                description: '결과를 변환하는 데코레이터를 만듭니다.',
                category: 'decorators',
                levelGroup: 4
            },
            {
                id: 'a_s4_2',
                title: '실행 시간 측정',
                code: 'import time\n\ndef measure_time(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"{func.__name__} 실행시간: {end-start:.4f}초")\n        return result\n    return wrapper\n\n@measure_time\ndef slow_function():\n    time.sleep(0.1)\n    return "완료!"\n\nprint(slow_function())',
                description: '함수 실행 시간을 측정하는 데코레이터입니다.',
                category: 'decorators',
                levelGroup: 4
            },
            {
                id: 'a_s4_3',
                title: '매개변수가 있는 데코레이터',
                code: 'def repeat(times):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for i in range(times):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef say_hello():\n    print("안녕하세요!")\n\nsay_hello()',
                description: '매개변수를 받는 데코레이터를 만듭니다.',
                category: 'decorators',
                levelGroup: 4
            },
            
            // Level 5: 컨텍스트 매니저와 고급 패턴 (3개 예제)
            {
                id: 'a_s5_1', 
                title: '컨텍스트 매니저',
                code: 'class Timer:\n    def __enter__(self):\n        import time\n        self.start = time.time()\n        print("타이머 시작")\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        import time\n        elapsed = time.time() - self.start\n        print(f"소요시간: {elapsed:.4f}초")\n\nwith Timer():\n    sum(range(100000))',
                description: 'with문을 위한 컨텍스트 매니저를 구현합니다.',
                category: 'context_managers',
                levelGroup: 5
            },
            {
                id: 'a_s5_2',
                title: 'contextlib 사용',
                code: 'from contextlib import contextmanager\n\n@contextmanager\ndef file_manager(filename, mode):\n    print(f"파일 {filename} 열기")\n    file = open(filename, mode) if filename != "test.txt" else None\n    try:\n        yield file\n    finally:\n        print(f"파일 {filename} 닫기")\n        if file:\n            file.close()\n\nwith file_manager("test.txt", "w") as f:\n    print("파일 작업 중...")',
                description: 'contextlib을 사용해 간단한 컨텍스트 매니저를 만듭니다.',
                category: 'context_managers',
                levelGroup: 5
            },
            {
                id: 'a_s5_3',
                title: '특수 메서드 활용',
                code: 'class Vector:\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n    \n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    \n    def __str__(self):\n        return f"Vector({self.x}, {self.y})"\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nresult = v1 + v2\nprint(result)',
                description: '특수 메서드를 구현하여 연산자 오버로딩을 합니다.',
                category: 'oop',
                levelGroup: 5
            }
        ],
        medium: [
            // Level 1: 고급 객체지향 프로그래밍 (3개 예제)
            {
                id: 'a_m1_1',
                title: '상속과 다형성',
                code: 'class Animal:\n    def __init__(self, name, species):\n        self.name = name\n        self.species = species\n    \n    def speak(self):\n        pass\n    \n    def info(self):\n        return f"{self.name}은 {self.species}입니다."\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name, "개")\n        self.breed = breed\n    \n    def speak(self):\n        return "멍멍!"\n    \n    def fetch(self):\n        return f"{self.name}이 공을 가져옵니다."\n\nclass Cat(Animal):\n    def __init__(self, name, color):\n        super().__init__(name, "고양이")\n        self.color = color\n    \n    def speak(self):\n        return "야옹!"\n    \n    def climb(self):\n        return f"{self.name}이 나무를 올라갑니다."\n\n# 다형성 시연\nanimals = [\n    Dog("바둑이", "골든리트리버"),\n    Cat("나비", "삼색이"),\n    Dog("초코", "푸들")\n]\n\nprint("=== 동물들의 소개 ===")\nfor animal in animals:\n    print(f"이름: {animal.name}")\n    print(f"정보: {animal.info()}")\n    print(f"울음소리: {animal.speak()}")\n    \n    if isinstance(animal, Dog):\n        print(f"특기: {animal.fetch()}")\n    elif isinstance(animal, Cat):\n        print(f"특기: {animal.climb()}")\n    print()',
                description: '상속과 다형성을 활용한 고급 객체지향 예제입니다.',
                category: 'oop',
                levelGroup: 1
            },
            {
                id: 'a_m1_2',
                title: '추상 클래스와 인터페이스',
                code: 'from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n    \n    @abstractmethod\n    def perimeter(self):\n        pass\n    \n    def describe(self):\n        return f"이 도형의 넓이는 {self.area():.2f}이고, 둘레는 {self.perimeter():.2f}입니다."\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):\n        return self.width * self.height\n    \n    def perimeter(self):\n        return 2 * (self.width + self.height)\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        import math\n        return math.pi * self.radius ** 2\n    \n    def perimeter(self):\n        import math\n        return 2 * math.pi * self.radius\n\nclass Triangle(Shape):\n    def __init__(self, a, b, c):\n        self.a = a\n        self.b = b\n        self.c = c\n    \n    def area(self):\n        # 헤론의 공식\n        s = self.perimeter() / 2\n        import math\n        return math.sqrt(s * (s - self.a) * (s - self.b) * (s - self.c))\n    \n    def perimeter(self):\n        return self.a + self.b + self.c\n\n# 도형들 생성 및 계산\nshapes = [\n    Rectangle(5, 3),\n    Circle(4),\n    Triangle(3, 4, 5)\n]\n\nprint("=== 도형 계산기 ===")\nfor i, shape in enumerate(shapes, 1):\n    shape_name = shape.__class__.__name__\n    print(f"{i}. {shape_name}")\n    print(f"   {shape.describe()}")\n    print()',
                description: '추상 클래스를 활용한 도형 계산 시스템입니다.',
                category: 'oop',
                levelGroup: 1
            },
            {
                id: 'a_m1_3',
                title: '클래스 상속 체인',
                code: 'class Vehicle:\n    def __init__(self, brand, model, year):\n        self.brand = brand\n        self.model = model\n        self.year = year\n        self.is_running = False\n    \n    def start(self):\n        if not self.is_running:\n            self.is_running = True\n            return f"{self.brand} {self.model} 시동을 겁니다."\n        return "이미 시동이 걸려있습니다."\n    \n    def stop(self):\n        if self.is_running:\n            self.is_running = False\n            return f"{self.brand} {self.model} 시동을 끕니다."\n        return "시동이 꺼져있습니다."\n    \n    def get_info(self):\n        status = "동작중" if self.is_running else "정지"\n        return f"{self.year}년 {self.brand} {self.model} ({status})"\n\nclass Car(Vehicle):\n    def __init__(self, brand, model, year, doors):\n        super().__init__(brand, model, year)\n        self.doors = doors\n        self.gear = "P"  # Park\n    \n    def shift_gear(self, new_gear):\n        valid_gears = ["P", "R", "N", "D"]\n        if new_gear in valid_gears:\n            self.gear = new_gear\n            return f"기어를 {new_gear}로 변경했습니다."\n        return "유효하지 않은 기어입니다."\n    \n    def drive(self):\n        if self.is_running and self.gear == "D":\n            return f"{self.brand} {self.model}이 주행 중입니다."\n        elif not self.is_running:\n            return "먼저 시동을 걸어주세요."\n        else:\n            return "주행 기어(D)로 변경해주세요."\n\nclass ElectricCar(Car):\n    def __init__(self, brand, model, year, doors, battery_capacity):\n        super().__init__(brand, model, year, doors)\n        self.battery_capacity = battery_capacity\n        self.charge_level = 100  # 100% 충전 상태로 시작\n    \n    def start(self):\n        if self.charge_level > 0:\n            self.is_running = True\n            return f"{self.brand} {self.model} 전원을 켭니다. (배터리: {self.charge_level}%)"\n        return "배터리가 방전되었습니다. 충전이 필요합니다."\n    \n    def charge(self, amount):\n        old_level = self.charge_level\n        self.charge_level = min(100, self.charge_level + amount)\n        return f"충전 완료: {old_level}% → {self.charge_level}%"\n    \n    def get_range(self):\n        # 배터리 1%당 약 5km 주행 가능하다고 가정\n        return self.charge_level * 5\n\n# 차량 테스트\nprint("=== 차량 상속 체인 테스트 ===")\n\n# 일반 자동차\ncar = Car("현대", "소나타", 2023, 4)\nprint("1. 일반 자동차:")\nprint(f"   {car.get_info()}")\nprint(f"   {car.start()}")\nprint(f"   {car.shift_gear('D')}")\nprint(f"   {car.drive()}")\nprint()\n\n# 전기차\nelectric = ElectricCar("테슬라", "Model 3", 2023, 4, 75)\nprint("2. 전기차:")\nprint(f"   {electric.get_info()}")\nprint(f"   {electric.start()}")\nprint(f"   {electric.shift_gear('D')}")\nprint(f"   {electric.drive()}")\nprint(f"   주행 가능 거리: {electric.get_range()}km")\nprint(f"   {electric.charge(20)}")',
                description: '다단계 클래스 상속을 통한 차량 시스템입니다.',
                category: 'oop',
                levelGroup: 1
            },
            
            // Level 2: 데코레이터와 메타프로그래밍 (3개 예제)
            {
                id: 'a_m2_1',
                title: '고급 데코레이터 시스템',
                code: 'import functools\nimport time\nfrom typing import Callable, Any\n\ndef performance_monitor(include_args=False):\n    """함수 성능을 모니터링하는 데코레이터 팩토리"""\n    def decorator(func: Callable) -> Callable:\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs) -> Any:\n            start_time = time.time()\n            start_memory = 0  # 실제로는 메모리 측정 라이브러리 사용\n            \n            try:\n                result = func(*args, **kwargs)\n                success = True\n                error_msg = None\n            except Exception as e:\n                result = None\n                success = False\n                error_msg = str(e)\n            \n            end_time = time.time()\n            execution_time = end_time - start_time\n            \n            # 성능 정보 출력\n            print(f"\\n=== {func.__name__} 성능 보고서 ===")\n            print(f"실행 시간: {execution_time:.4f}초")\n            print(f"성공 여부: {'성공' if success else '실패'}")\n            \n            if include_args and args:\n                print(f"입력 인자: {args}")\n            if not success:\n                print(f"오류 메시지: {error_msg}")\n            \n            return result\n        \n        # 함수에 성능 통계 속성 추가\n        wrapper.call_count = 0\n        wrapper.total_time = 0\n        \n        original_wrapper = wrapper\n        def enhanced_wrapper(*args, **kwargs):\n            wrapper.call_count += 1\n            start = time.time()\n            result = original_wrapper(*args, **kwargs)\n            wrapper.total_time += time.time() - start\n            return result\n        \n        enhanced_wrapper.call_count = 0\n        enhanced_wrapper.total_time = 0\n        enhanced_wrapper.__name__ = func.__name__\n        enhanced_wrapper.__doc__ = func.__doc__\n        \n        return enhanced_wrapper\n    return decorator\n\ndef retry(max_attempts=3, delay=1):\n    """실패 시 재시도하는 데코레이터"""\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            last_exception = None\n            \n            for attempt in range(max_attempts):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    last_exception = e\n                    if attempt < max_attempts - 1:\n                        print(f"시도 {attempt + 1} 실패: {e}. {delay}초 후 재시도...")\n                        time.sleep(delay)\n                    else:\n                        print(f"모든 시도 실패. 최종 오류: {e}")\n                        raise last_exception\n        return wrapper\n    return decorator\n\n# 데코레이터 사용 예제\n@performance_monitor(include_args=True)\n@retry(max_attempts=2, delay=0.5)\ndef complex_calculation(n):\n    """복잡한 계산을 수행하는 함수"""\n    if n < 0:\n        raise ValueError("음수는 처리할 수 없습니다")\n    \n    result = 0\n    for i in range(n):\n        result += i ** 2\n    \n    return result\n\n# 함수 테스트\nprint("=== 고급 데코레이터 시스템 테스트 ===")\nprint("\\n1. 정상적인 계산:")\nresult1 = complex_calculation(1000)\nprint(f"결과: {result1}")\n\nprint("\\n2. 오류 발생 시 재시도:")\ntry:\n    result2 = complex_calculation(-5)\nexcept ValueError as e:\n    print(f"최종 오류: {e}")\n\nprint(f"\\n함수 호출 통계:")\nprint(f"총 호출 횟수: {complex_calculation.call_count}")\nprint(f"총 실행 시간: {complex_calculation.total_time:.4f}초")',
                description: '고급 데코레이터 패턴과 메타프로그래밍 기법입니다.',
                category: 'decorators',
                levelGroup: 2
            },
            {
                id: 'a_m2_2',
                title: '클래스 데코레이터와 속성 관리',
                code: 'def singleton(cls):\n    """싱글톤 패턴을 구현하는 클래스 데코레이터"""\n    instances = {}\n    def get_instance(*args, **kwargs):\n        if cls not in instances:\n            instances[cls] = cls(*args, **kwargs)\n        return instances[cls]\n    return get_instance\n\ndef auto_repr(cls):\n    """자동으로 __repr__ 메서드를 생성하는 데코레이터"""\n    def __repr__(self):\n        class_name = self.__class__.__name__\n        attrs = []\n        for key, value in self.__dict__.items():\n            if not key.startswith('_'):\n                attrs.append(f"{key}={repr(value)}")\n        return f"{class_name}({', '.join(attrs)})"\n    \n    cls.__repr__ = __repr__\n    return cls\n\ndef validate_types(**expected_types):\n    """타입 검증을 수행하는 데코레이터"""\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(self, **kwargs):\n            for param_name, expected_type in expected_types.items():\n                if param_name in kwargs:\n                    value = kwargs[param_name]\n                    if not isinstance(value, expected_type):\n                        raise TypeError(\n                            f"{param_name}은 {expected_type.__name__} 타입이어야 합니다. "\n                            f"받은 타입: {type(value).__name__}"\n                        )\n            return func(self, **kwargs)\n        return wrapper\n    return decorator\n\n@singleton\n@auto_repr\nclass ConfigManager:\n    """설정을 관리하는 싱글톤 클래스"""\n    \n    def __init__(self):\n        self.settings = {\n            "debug": False,\n            "max_connections": 100,\n            "timeout": 30\n        }\n        self.version = "1.0.0"\n    \n    @validate_types(key=str, value=(int, str, bool))\n    def set_config(self, **kwargs):\n        """설정값을 변경합니다"""\n        for key, value in kwargs.items():\n            if key in self.settings:\n                old_value = self.settings[key]\n                self.settings[key] = value\n                print(f"설정 변경: {key} = {old_value} → {value}")\n            else:\n                print(f"알 수 없는 설정: {key}")\n    \n    def get_config(self, key=None):\n        """설정값을 조회합니다"""\n        if key:\n            return self.settings.get(key)\n        return self.settings.copy()\n    \n    def reset_to_defaults(self):\n        """기본 설정으로 재설정합니다"""\n        self.settings = {\n            "debug": False,\n            "max_connections": 100,\n            "timeout": 30\n        }\n        print("설정이 기본값으로 재설정되었습니다.")\n\n# 클래스 데코레이터 테스트\nprint("=== 클래스 데코레이터 테스트 ===")\n\n# 싱글톤 패턴 확인\nconfig1 = ConfigManager()\nconfig2 = ConfigManager()\n\nprint(f"같은 인스턴스인가? {config1 is config2}")\nprint(f"config1: {config1}")\n\n# 설정 관리 테스트\nprint("\\n=== 설정 관리 테스트 ===")\nprint(f"현재 설정: {config1.get_config()}")\n\nconfig1.set_config(debug=True, max_connections=200)\nprint(f"변경된 설정: {config1.get_config()}")\n\n# 타입 검증 테스트\nprint("\\n=== 타입 검증 테스트 ===")\ntry:\n    config1.set_config(timeout="잘못된_타입")\nexcept TypeError as e:\n    print(f"타입 오류: {e}")\n\nconfig1.reset_to_defaults()\nprint(f"재설정 후: {config1.get_config()}")',
                description: '클래스 데코레이터와 속성 관리 시스템입니다.',
                category: 'decorators',
                levelGroup: 2
            },
            {
                id: 'a_m2_3',
                title: '메타클래스와 동적 클래스 생성',
                code: 'class AttributeValidationMeta(type):\n    """속성 유효성 검사를 수행하는 메타클래스"""\n    \n    def __new__(mcs, name, bases, attrs):\n        # 유효성 검사 규칙 수집\n        validators = {}\n        for key, value in list(attrs.items()):\n            if key.startswith("validate_"):\n                field_name = key[9:]  # "validate_" 제거\n                validators[field_name] = value\n                del attrs[key]\n        \n        # 원본 __setattr__ 저장\n        original_setattr = attrs.get("__setattr__")\n        \n        def validated_setattr(self, name, value):\n            # 유효성 검사 수행\n            if name in validators:\n                validator = validators[name]\n                if not validator(value):\n                    raise ValueError(f"{name}에 대한 유효하지 않은 값: {value}")\n            \n            # 원본 __setattr__ 호출 또는 기본 동작\n            if original_setattr:\n                original_setattr(self, name, value)\n            else:\n                super(cls, self).__setattr__(name, value)\n        \n        attrs["__setattr__"] = validated_setattr\n        attrs["_validators"] = validators\n        \n        cls = super().__new__(mcs, name, bases, attrs)\n        return cls\n\nclass Person(metaclass=AttributeValidationMeta):\n    def __init__(self, name, age, email):\n        self.name = name\n        self.age = age\n        self.email = email\n    \n    @staticmethod\n    def validate_name(value):\n        return isinstance(value, str) and len(value.strip()) > 0\n    \n    @staticmethod\n    def validate_age(value):\n        return isinstance(value, int) and 0 <= value <= 150\n    \n    @staticmethod\n    def validate_email(value):\n        import re\n        pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"\n        return isinstance(value, str) and re.match(pattern, value)\n    \n    def __repr__(self):\n        return f"Person(name={self.name!r}, age={self.age}, email={self.email!r})"\n\ndef create_model_class(class_name, fields):\n    """동적으로 모델 클래스를 생성하는 팩토리 함수"""\n    \n    def __init__(self, **kwargs):\n        for field_name, field_config in fields.items():\n            value = kwargs.get(field_name, field_config.get("default"))\n            setattr(self, field_name, value)\n    \n    def __repr__(self):\n        attrs = [f"{k}={getattr(self, k)!r}" for k in fields.keys()]\n        return f"{class_name}({', '.join(attrs)})"\n    \n    def to_dict(self):\n        return {k: getattr(self, k) for k in fields.keys()}\n    \n    # 유효성 검사 메서드들 동적 생성\n    validators = {}\n    for field_name, field_config in fields.items():\n        if "type" in field_config:\n            field_type = field_config["type"]\n            validators[f"validate_{field_name}"] = lambda value, ft=field_type: isinstance(value, ft)\n    \n    # 클래스 속성 딕셔너리 구성\n    class_attrs = {\n        "__init__": __init__,\n        "__repr__": __repr__,\n        "to_dict": to_dict,\n        "_fields": fields,\n        **validators\n    }\n    \n    # 메타클래스를 사용하여 클래스 생성\n    return AttributeValidationMeta(class_name, (), class_attrs)\n\n# 메타클래스 사용 예제\nprint("=== 메타클래스와 동적 클래스 생성 테스트 ===")\n\n# 1. 메타클래스를 사용한 유효성 검사\nprint("\\n1. Person 클래스 (메타클래스 사용):")\ntry:\n    person = Person("김철수", 30, "kim@example.com")\n    print(f"생성 성공: {person}")\n    \n    # 유효한 값 변경\n    person.age = 35\n    print(f"나이 변경 후: {person}")\n    \n    # 유효하지 않은 값 설정 시도\n    person.age = -5  # 오류 발생\nexcept ValueError as e:\n    print(f"유효성 검사 오류: {e}")\n\n# 2. 동적 클래스 생성\nprint("\\n2. 동적으로 생성된 클래스:")\n\n# Product 클래스 동적 생성\nProduct = create_model_class("Product", {\n    "name": {"type": str, "default": ""},\n    "price": {"type": (int, float), "default": 0},\n    "category": {"type": str, "default": "기타"}\n})\n\n# 동적 클래스 사용\nproduct = Product(name="노트북", price=1200000, category="전자제품")\nprint(f"상품 생성: {product}")\nprint(f"딕셔너리 변환: {product.to_dict()}")\n\n# Book 클래스 동적 생성\nBook = create_model_class("Book", {\n    "title": {"type": str, "default": ""},\n    "author": {"type": str, "default": ""},\n    "pages": {"type": int, "default": 0},\n    "isbn": {"type": str, "default": ""}\n})\n\nbook = Book(title="파이썬 프로그래밍", author="김저자", pages=350, isbn="978-1234567890")\nprint(f"도서 생성: {book}")\nprint(f"필드 정보: {book._fields}")',
                description: '메타클래스를 활용한 동적 클래스 생성과 유효성 검사입니다.',
                category: 'decorators',
                levelGroup: 2
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