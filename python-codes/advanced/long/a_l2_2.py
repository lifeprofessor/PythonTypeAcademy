import numpy as np
import matplotlib.pyplot as plt

def generate_scores(n=50):
    return np.random.normal(loc=75, scale=10, size=n)

def analyze_scores(scores):
    print("평균:", np.mean(scores))
    print("중앙값:", np.median(scores))
    print("최댓값:", np.max(scores))
    print("최솟값:", np.min(scores))

def visualize(scores):
    plt.hist(scores, bins=10, color='skyblue', edgecolor='black')
    plt.title("시험 점수 분포")
    plt.xlabel("점수")
    plt.ylabel("학생 수")
    plt.grid(True)
    plt.show()

scores = generate_scores()
analyze_scores(scores)
visualize(scores)