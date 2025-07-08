import pandas as pd

df = pd.DataFrame({
    "name": ["Anna", "Ben", "Cathy", "David"],
    "math": [80, 90, 85, 95],
    "science": [88, 76, 92, 89]
})

df["total"] = df["math"] + df["science"]
df["average"] = df[["math", "science"]].mean(axis=1)

print(df)
