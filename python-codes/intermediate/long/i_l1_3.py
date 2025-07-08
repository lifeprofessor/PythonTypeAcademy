for dan in range(2, 10):
    if dan % 2 != 0:
        continue

    print(f"== {dan}단 ==")
    for i in range(1, 10):
        result = dan * i
        status = "완전제곱수" if (result ** 0.5).is_integer() else ""
        print(f"{dan} x {i} = {result} {status}")

    print("-" * 30)

print("짝수단 구구단 출력 완료")