import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(123)
df = pd.DataFrame({
    "date": pd.date_range("2024-01-01", periods=90),
    "sales": np.random.randint(100, 500, 90)
})
df["month"] = df["date"].dt.month
df["weekday"] = df["date"].dt.day_name()

monthly_avg = df.groupby("month")["sales"].mean()
weekday_avg = df.groupby("weekday")["sales"].mean().reindex(
    ["Monday", "Tuesday", "Wednesday", "Thursday",
     "Friday", "Saturday", "Sunday"]
)
fig, axes = plt.subplots(1, 2, figsize=(12, 5))
monthly_avg.plot.bar(ax=axes[0], color="teal")
axes[0].set_title("월별 평균 매출")
weekday_avg.plot.bar(ax=axes[1], color="coral")
axes[1].set_title("요일별 평균 매출")
plt.tight_layout()
plt.show()