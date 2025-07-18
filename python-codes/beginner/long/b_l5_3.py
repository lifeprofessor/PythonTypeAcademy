print("=== 파이썬 퀴즈 프로그램 ===")
print()

question = "파이썬에서 조건문을 만들 때 사용하는 키워드는?"
choices = ["1. for", "2. if", "3. def", "4. print"]
correct = "2"

print("문제:", question)
print()

for choice in choices:
    print(choice)

print()
user_answer = "2"  # 사용자가 입력했다고 가정
print("당신의 선택:", user_answer)

if user_answer == correct:
    print("정답입니다! 아주 잘했어요!")
else:
    print("아쉽네요. 정답은 2번 'if'입니다.")

print("조건문은 프로그램의 중요한 부분이니 꼭 기억하세요!")