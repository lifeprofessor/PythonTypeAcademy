print("=== 학생 성적 관리 시스템 ===")
print()

student_name = "김철수"
korean = 85
english = 92
math = 78
science = 90
social = 88

subjects = ["국어", "영어", "수학", "과학", "사회"]
scores = [korean, english, math, science, social]

total = sum(scores)
average = total / len(scores)

print(f"학생 이름: {student_name}")
print("-" * 25)
for i in range(len(subjects)):
    print(f"{subjects[i]}: {scores[i]:3d}점")
print("-" * 25)
print(f"총점: {total:3d}점")
print(f"평균: {average:5.1f}점")
print()
if average >= 90:
    print("🏆 우수 학생입니다!")
elif average >= 80:
    print("👍 양호한 성적입니다.")
else:
    print("📚 더 열심히 공부해요!") 