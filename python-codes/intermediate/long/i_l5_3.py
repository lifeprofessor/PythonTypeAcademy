arr = [64, 25, 12, 22, 11]

for i in range(len(arr)):
    min_idx = i
    for j in range(i+1, len(arr)):
        if arr[j] < arr[min_idx]:
            min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]
    print(f"{i+1}회전 후:", arr)

print("정렬 완료:", arr)