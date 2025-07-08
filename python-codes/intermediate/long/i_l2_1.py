def factorial(n):
    result = 1
    steps = []
    for i in range(1, n + 1):
        result *= i
        steps.append(str(i))
    print(" * ".join(steps), "=", result)

numbers = [3, 5, 7, 10]
print("각 수의 팩토리얼 계산:")
for num in numbers:
    factorial(num)
    print("-" * 30)

print("모든 계산 완료!")
