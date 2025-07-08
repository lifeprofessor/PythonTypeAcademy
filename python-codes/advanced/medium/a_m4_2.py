import pandas as pd

df = pd.DataFrame({
    "name": ["Alice", "Bob", "Carol"],
    "email": ["a@example.com", "b@test.com", "c@example.com"]
})

df["domain"] = df["email"].apply(lambda x: x.split("@")[1])
print(df)
