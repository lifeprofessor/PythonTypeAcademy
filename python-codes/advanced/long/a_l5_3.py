import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(123)
dates = pd.date_range(start="2024-01-01", periods=90)
sales = np.random.randint(100, 500, size=90)

df = pd.DataFrame({"date": dates, "sales": sales})
df["month"] = df["date"].dt.month
df["weekday"] = df["date"].dt.day_name()

monthly_avg = df.groupby("month")["sales"].mean()
weekday_avg = df.groupby("weekday")["sales"].mean().reindex([
    "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday", "Sunday"
])

plt.figure(figsize=(12, 5))
plt.subplot(1, 2, 1)
monthly_avg.plot(kind="bar", color="teal")
plt.title("월별 평균 매출")

plt.subplot(1, 2, 2)
weekday_avg.plot(kind="bar", color="coral")
plt.title("요일별 평균 매출")

plt.tight_layout()
plt.show()
