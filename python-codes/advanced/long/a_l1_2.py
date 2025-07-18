import pandas as pd
import matplotlib.pyplot as plt

data = {
    "product": ["A", "B", "C", "D", "E", "F"],
    "rating": [4.2, 3.8, 4.7, 4.0, 3.5, 4.8],
    "review_count": [120, 85, 200, 140, 60, 300]
}

df = pd.DataFrame(data)
popular = df[df["review_count"] >= 100]
top_rated = df.sort_values(by="rating", ascending=False)

print("평점 기준 상위 제품:")
print(top_rated.head(3))

plt.figure(figsize=(8, 5))
plt.scatter(df["review_count"], df["rating"], color="green")
plt.title("제품 리뷰 수 vs 평점")
plt.xlabel("리뷰 수")
plt.ylabel("평점")
plt.grid(True)
plt.show()