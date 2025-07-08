import numpy as np

matrix = np.arange(1, 17).reshape(4, 4)
print("4x4 행렬:\n", matrix)

diag = np.diag(matrix)
print("대각선 값:", diag)

sum_rows = matrix.sum(axis=1)
print("행별 합계:", sum_rows)
