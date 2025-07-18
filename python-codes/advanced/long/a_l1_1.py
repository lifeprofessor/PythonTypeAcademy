import pandas as pd
import matplotlib.pyplot as plt

data = {
    "name": ["Alice", "Bob", "Charlie", "David", "Eva"],
    "math": [88, 75, 92, 85, 90],
    "english": [93, 80, 87, 78, 91],
    "science": [85, 89, 90, 86, 88]
}

df = pd.DataFrame(data)
df["average"] = df[["math", "english", "science"]].mean(axis=1)
df_sorted = df.sort_values(by="average", ascending=False)

print("학생별 성적 평균:")
print(df_sorted[["name", "average"]])

plt.bar(df["name"], df["average"])
plt.title("학생별 평균 점수")
plt.ylim(70, 100)
plt.ylabel("점수")
plt.show()