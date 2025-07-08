emails = [
    "alice@gmail.com", "bob@naver.com", "carol@gmail.com",
    "daniel@daum.net", "erin@naver.com", "frank@gmail.com"
]

domains = {}
for email in emails:
    user, domain = email.split("@")
    if domain in domains:
        domains[domain] += 1
    else:
        domains[domain] = 1

print("도메인별 이메일 개수:")
for domain, count in domains.items():
    print(f"{domain}: {count}개")

print("총 이메일 수:", len(emails))