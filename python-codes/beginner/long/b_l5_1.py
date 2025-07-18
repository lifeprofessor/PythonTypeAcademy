print("=== 구구단 연습 프로그램 ===")
print()

dan = 7
print(f"{dan}단을 출력합니다.")
print("-" * 20)

for i in range(1, 10):
    result = dan * i
    print(f"{dan} x {i} = {result}")

print("-" * 20)
print("구구단 7단을 모두 외워보세요!")
print("다 외웠으면 8단에도 도전해보세요.")
print("파이썬으로 구구단을 출력하니 재미있죠?")