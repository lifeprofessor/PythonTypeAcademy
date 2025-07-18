import pandas as pd

df = pd.DataFrame({
    "name": ["Alice", "Bob", "Carol"],
    "email": ["a@example.com", "b@test.com", "c@example.com"]
})

df["domain"] = df["email"].apply(lambda x: x.split("@")[1])
print(df)

domain_counts = df["domain"].value_counts()
print("\n도메인별 개수:")
print(domain_counts)