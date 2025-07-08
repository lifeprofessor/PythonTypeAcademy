scores = {
    "Alice": 92,
    "Bob": 78,
    "Charlie": 88,
    "David": 95,
    "Eve": 90
}

highest = max(scores.values())
lowest = min(scores.values())
average = sum(scores.values()) / len(scores)

print("평균 점수:", average)
for name, score in scores.items():
    if score == highest:
        print(f"최고 점수자: {name} ({score})")
    if score == lowest:
        print(f"최저 점수자: {name} ({score})")

print("점수순 정렬:")
for name, score in sorted(scores.items(), key=lambda x: x[1], reverse=True):
    print(f"{name}: {score}")