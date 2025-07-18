text = "successes are made by consistent effort"
char_count = {}

for char in text:
    if char == " ":
        continue
    if char in char_count:
        char_count[char] += 1
    else:
        char_count[char] = 1

print("문자 빈도수 (정렬된 결과):")
for char in sorted(char_count):
    count = char_count[char]
    print(f"'{char}': {count}회")