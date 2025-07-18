print("=== 성적 계산기 ===")
print()

kor = 90
eng = 88
math = 85
sci = 92

total = kor + eng + math + sci
average = total / 4

print("총점:", total)
print("평균:", average)

if average >= 90:
    print("우수한 성적입니다!")
elif average >= 80:
    print("좋은 성적이에요!")
else:
    print("더 노력해봅시다.")