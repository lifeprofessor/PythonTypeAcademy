text = "Python is a powerful language for data analysis and automation"
words = text.split()

longest = ""
for word in words:
    if len(word) > len(longest):
        longest = word

print("문장:", text)
print("총 단어 수:", len(words))
print("가장 긴 단어:", longest)
print("단어 길이:", len(longest))
print("모든 단어 출력:")
for word in words:
    print("-", word)