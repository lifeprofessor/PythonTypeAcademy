numbers = [12, 45, 23, 67, 34, 89, 10, 55, 76, 31]

even = []
odd = []
over_50 = []

for num in numbers:
    if num % 2 == 0:
        even.append(num)
    else:
        odd.append(num)
    if num > 50:
        over_50.append(num)

print("전체 리스트:", numbers)
print("짝수:", even)
print("홀수:", odd)
print("50 초과:", over_50)
print("최대값:", max(numbers))
print("최소값:", min(numbers))
print("평균:", sum(numbers) / len(numbers))