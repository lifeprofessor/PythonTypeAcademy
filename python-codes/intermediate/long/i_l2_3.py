def print_table(dan):
    print(f"== {dan}단 ==")
    for i in range(1, 10):
        result = dan * i
        print(f"{dan} x {i} = {result}")
    print("-" * 20)

def even_tables():
    print("2단부터 8단까지 짝수단을 출력합니다.")
    for dan in range(2, 10, 2):
        print_table(dan)
    print("모든 짝수단이 출력되었습니다.")

even_tables()
print("짝수단 구구단 출력 완료")