print("=== 내가 좋아하는 음식들 ===")
print()

favorite_foods = ["떡볶이", "치킨", "김밥", "초밥", "라면"]

print("제가 정말 좋아하는 음식들을 소개할게요!")
print("한 주 동안 이렇게 먹고 싶어요:")

days = ["월", "화", "수", "목", "금"]

for i in range(5):
    print(f"{days[i]}요일 점심: {favorite_foods[i]}")

print()
print("여러분이 좋아하는 음식은 뭐예요?")
print("같이 메뉴 추천해봐요!")