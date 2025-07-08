even = 0
odd = 0
div3 = 0
div5 = 0

for num in range(1, 101):
    if num % 2 == 0:
        even += 1
    else:
        odd += 1
    if num % 3 == 0:
        div3 += 1
    if num % 5 == 0:
        div5 += 1

print("1~100까지의 통계")
print(f"짝수: {even}개")
print(f"홀수: {odd}개")
print(f"3의 배수: {div3}개")
print(f"5의 배수: {div5}개")