import numpy as np

scores = np.random.normal(loc=70, scale=10, size=100)
above_avg = scores[scores > scores.mean()]

print("평균 점수:", np.mean(scores))
print("표준편차:", np.std(scores))
print("평균 이상 학생 수:", len(above_avg))
