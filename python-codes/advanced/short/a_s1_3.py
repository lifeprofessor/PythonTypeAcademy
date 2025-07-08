import pandas as pd

df = pd.DataFrame({
    "name": ["A", "B", "C"],
    "age": [17, 21, 19]
})

adults = df[df["age"] >= 18]
print(adults)