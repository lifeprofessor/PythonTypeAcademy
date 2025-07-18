import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y1 = [10, 15, 13, 18]
y2 = [5, 8, 6, 9]

plt.plot(x, y1, label="Class A", marker='o')
plt.plot(x, y2, label="Class B", linestyle='--', marker='s')
plt.xlabel("시험 횟수")
plt.ylabel("점수")
plt.ylim(0, 20)
plt.grid(True)
plt.legend()
plt.title("Class Scores Over Time")
plt.show()