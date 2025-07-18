import pandas as pd

df = pd.DataFrame({
    "gender": ["M", "F", "F", "M"],
    "score": [88, 92, 85, 90]
})

grouped = df.groupby("gender").mean()
print(grouped)

print("\n성별 평균 점수 확인 완료!")
print("남학생 평균 점수:", grouped.loc["M", "score"])
print("여학생 평균 점수:", grouped.loc["F", "score"])