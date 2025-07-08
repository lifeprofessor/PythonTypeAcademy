import numpy as np

arr = np.random.randint(0, 100, size=(5, 4))
print("원본 배열:\n", arr)

mean = np.mean(arr, axis=0)
print("열 평균:", mean)

max_idx = np.argmax(arr, axis=1)
print("각 행 최대값 위치:", max_idx)
