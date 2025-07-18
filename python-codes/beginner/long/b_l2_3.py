print("=== 과목별 점수 확인 ===")
print()

subjects = ["국어", "영어", "수학"]
scores = [88, 76, 91]

total = 0
for i in range(len(subjects)):
    print(f"{subjects[i]}: {scores[i]}점")
    total += scores[i]

average = total / len(scores)
print("평균 점수:", average)