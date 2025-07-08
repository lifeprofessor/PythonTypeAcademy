import pandas as pd

emails = [
    "alice@gmail.com", "bob@naver.com", "carol@gmail.com",
    "dave@daum.net", "eve@naver.com", "frank@gmail.com"
]

df = pd.DataFrame({"email": emails})
df["domain"] = df["email"].str.split("@").str[1]

unique_domains = df["domain"].nunique()
most_common = df["domain"].value_counts().idxmax()

print("전체 이메일 수:", len(df))
print("고유 도메인 수:", unique_domains)
print("가장 많이 사용된 도메인:", most_common)
print("\n도메인별 개수:")
print(df["domain"].value_counts())
