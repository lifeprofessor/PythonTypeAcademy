import pandas as pd

df = pd.DataFrame({
    "subject": ["Math", "English", "Science"],
    "score": [90, 85, 88]
})

print("평균 점수:", df["score"].mean())