import numpy as np

scores = np.random.normal(loc=70, scale=10, size=100)
average = np.mean(scores)
above_avg = scores[scores > average]

print("전체 학생 수:", len(scores))
print("평균 점수:", average)
print("표준편차:", np.std(scores))
print("평균 이상 학생 수:", len(above_avg))