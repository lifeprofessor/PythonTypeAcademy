print("=== 오늘의 할 일 목록 ===")
print()

todo_list = ["책 읽기", "숙제 하기", "운동하기", "청소하기", "코딩 연습"]
todo_list.sort()  # 가나다순 정렬

print("오늘 해야 할 일을 가나다순으로 정리했어요:")

for i in range(len(todo_list)):
    print(f"{i+1}. {todo_list[i]}")

print()
print("끝난 일은 체크하면서 해봐요!")