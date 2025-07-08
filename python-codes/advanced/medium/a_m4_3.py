import pandas as pd

df = pd.DataFrame({
    "gender": ["M", "F", "F", "M"],
    "score": [88, 92, 85, 90]
})

grouped = df.groupby("gender").mean()
print(grouped)
