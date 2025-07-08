import pandas as pd

data = {
    "name": [
        "Anna", "Ben", "Chloe", "Daniel", "Ella", "Frank", "Grace", "Henry"
    ],
    "gender": [
        "F", "M", "F", "M", "F", "M", "F", "M"
    ],
    "major": [
        "CS", "Math", "CS", "Physics", "Math", "Math", "CS", "Physics"
    ],
    "score": [
        90, 85, 88, 92, 78, 80, 95, 89
    ]
}

df = pd.DataFrame(data)
grouped = df.groupby(["gender", "major"])["score"].mean().unstack()

print("성별 및 전공별 평균 점수:")
print(grouped.round(2))
