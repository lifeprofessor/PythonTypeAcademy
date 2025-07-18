data = [3, 5, 3, 2, 5, 7, 9, 1, 3, 7, 8, 2]
unique = []

print("중복을 제거하고 정렬하는 프로그램입니다.")
print("데이터를 하나씩 검사합니다...\n")

for num in data:
    if num not in unique:
        unique.append(num)

print("중복 제거 완료!")
sorted_unique = sorted(unique)

print("원본 데이터:", data)
print("중복 제거 결과:", unique)
print("정렬된 결과:", sorted_unique)
print("최대값:", max(sorted_unique))
print("최소값:", min(sorted_unique))
print("총 고유값 개수:", len(sorted_unique))