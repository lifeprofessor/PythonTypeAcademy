arr = [64, 25, 12, 22, 11]

print("선택 정렬을 시작합니다.")
print("초기 배열 상태:", arr)
print("-" * 30)

for i in range(len(arr)):
    min_idx = i
    for j in range(i+1, len(arr)):
        if arr[j] < arr[min_idx]:
            min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]
    print(f"{i+1}회전 후: {arr}")

print("-" * 30)
print("정렬이 모두 완료되었습니다.")
print("최종 정렬된 배열:", arr)
print("가장 작은 값:", arr[0])
print("가장 큰 값:", arr[-1])