for i in range(1, 101):
    message = ""

    if i % 3 == 0:
        message += "Fizz"
    if i % 5 == 0:
        message += "Buzz"
    if i % 7 == 0:
        message += "Bang"

    if message == "":
        print(i)
    else:
        print(f"{i}: {message}")

print("1~100까지의 수를 분석 완료했습니다.")