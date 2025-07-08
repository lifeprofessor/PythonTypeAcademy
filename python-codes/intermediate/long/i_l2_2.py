def text_stats(text):
    words = text.split()
    spaces = text.count(" ")
    letters = len(text.replace(" ", ""))
    print("문장:", text)
    print("단어 수:", len(words))
    print("공백 수:", spaces)
    print("문자 수(공백 제외):", letters)

texts = [
    "Python is powerful and fun.",
    "Data analysis with pandas is useful.",
    "Practice makes perfect!"
]

for sentence in texts:
    text_stats(sentence)
    print("=" * 40)