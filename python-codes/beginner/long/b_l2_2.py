print("=== 성적 등급 확인 ===")
print()

score = 76

print("점수:", score)
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "D"

print("등급:", grade)
print("열심히 해서 더 높은 등급을 받아봐요!")