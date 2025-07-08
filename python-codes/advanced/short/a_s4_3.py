import pandas as pd

df = pd.DataFrame({
    "email": ["a@gmail.com", "b@naver.com", "c@gmail.com"]
})

df["domain"] = df["email"].apply(lambda x: x.split("@")[1])
print(df)