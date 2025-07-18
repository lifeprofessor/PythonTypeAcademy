import numpy as np
import matplotlib.pyplot as plt

sales = np.random.randint(1000, 5000, size=(5, 12))
branches = ["A", "B", "C", "D", "E"]
months = [f"{i+1}월" for i in range(12)]

avg_sales = np.mean(sales, axis=1)
max_month = np.argmax(sales, axis=1)

for i, branch in enumerate(branches):
    print(
        f"{branch}지점 평균 매출: {avg_sales[i]:.2f}, "
        f"최고 매출 월: {months[max_month[i]]}"
    )

for i in range(5):
    plt.plot(months, sales[i], label=f"{branches[i]}지점")

plt.title("지점별 월간 매출")
plt.xticks(rotation=45)
plt.legend()
plt.tight_layout()
plt.show()