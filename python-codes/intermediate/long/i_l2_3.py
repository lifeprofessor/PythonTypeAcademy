def print_table(dan):
    print(f"== {dan}단 ==")
    for i in range(1, 10):
        print(f"{dan} x {i} = {dan * i}")
    print("-" * 20)

def even_tables():
    for dan in range(2, 10, 2):
        print_table(dan)

even_tables()
print("짝수단 구구단 출력 완료")
