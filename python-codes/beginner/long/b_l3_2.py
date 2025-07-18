print("=== 나의 주간 시간표 ===")
print()

days = ["월", "화", "수", "목", "금"]
subjects = ["국어", "영어", "수학", "과학", "코딩"]
times = ["1교시", "2교시", "3교시", "4교시", "5교시"]

print("이번 주 주요 과목 시간표를 알려드릴게요!\n")

for i in range(5):
    print(f"{days[i]}요일 - {times[i]}: {subjects[i]} 수업")

print()
print("매일매일 수업 준비 잊지 마세요!")