print("=== 친구별 별점 평가 ===")
print()

friends = ["지민", "정국", "윤아", "민호"]
scores = [5, 3, 4, 2]

print("친구들에게 별점을 줬어요:\n")

for i in range(len(friends)):
    stars = "⭐" * scores[i]
    print(f"{friends[i]}: {stars}")

print()
print("가장 높은 별점을 받은 친구는 누구인가요?")