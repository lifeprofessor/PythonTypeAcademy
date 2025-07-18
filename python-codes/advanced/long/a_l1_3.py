import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

dates = pd.date_range(start="2024-01-01", periods=30)
sales = np.random.randint(80, 120, size=30)

df = pd.DataFrame({"date": dates, "sales": sales})
df["moving_avg_7"] = df["sales"].rolling(window=7).mean()

print(df.head(10))

plt.plot(df["date"], df["sales"], 
         label="Daily Sales", marker="o")
plt.plot(df["date"], df["moving_avg_7"],
         label="7-Day Moving Avg", color="red")
plt.title("일별 판매량 및 이동 평균")
plt.xlabel("날짜")
plt.ylabel("판매량")
plt.legend()
plt.grid(True)
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()