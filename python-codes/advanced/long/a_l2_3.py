import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

products = ["A", "B", "C", "D", "E"]
df = pd.DataFrame({
    "product": np.random.choice(products, 100),
    "price": np.random.randint(1000, 10000, 100),
    "units": np.random.randint(1, 20, 100)
})

df["total"] = df["price"] * df["units"]
summary = (
    df.groupby("product")["total"].agg(["sum", "mean", "count"])
    .sort_values("sum", ascending=False)
)
print(summary)

summary["sum"].plot(kind="bar", color="orange")
plt.title("Total Sales by Product")
plt.ylabel("Total Revenue")
plt.xticks(rotation=0)
plt.tight_layout()
plt.show()