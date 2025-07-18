import pandas as pd
import numpy as np

data = {
    "id": range(1, 11),
    "score": [78, 85, np.nan, 90, 95, np.nan, 88, 91, 87, np.nan]
}

df = pd.DataFrame(data)
print("원본 데이터:")
print(df)

mean_filled = df["score"].fillna(df["score"].mean())
median_filled = df["score"].fillna(df["score"].median())
dropped = df.dropna()

print("\n평균 채움:", mean_filled.values)
print("중앙값 채움:", median_filled.values)
print("결측 제거 후:", dropped.values)

print("\n평균으로 채운 후 평균:", round(mean_filled.mean(), 2))
print("중앙값으로 채운 후 평균:", round(median_filled.mean(), 2))
print("결측 제거 후 평균:", round(dropped["score"].mean(), 2))
print("결측치는 총", df["score"].isna().sum(), "개였습니다.")