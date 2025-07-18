print("=== 1부터 20까지 짝수만 출력 ===")
print()

even_count = 0

for i in range(1, 21):
    if i % 2 == 0:
        print(f"짝수 발견: {i}")
        even_count += 1

print()
print("짝수 출력 완료!")
print(f"총 {even_count}개의 짝수가 있습니다.")
print("이번엔 홀수를 출력해보는 건 어때요?")
print("프로그래밍으로 숫자를 다루는 게 익숙해질 거예요.")