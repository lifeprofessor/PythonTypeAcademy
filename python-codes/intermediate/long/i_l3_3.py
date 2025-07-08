students = [
    {"name": "Tom", "age": 17},
    {"name": "Jane", "age": 20},
    {"name": "Mike", "age": 16},
    {"name": "Sara", "age": 22},
    {"name": "Leo", "age": 19}
]

adults = []
minors = []

for student in students:
    if student["age"] >= 19:
        adults.append(student["name"])
    else:
        minors.append(student["name"])

print("성인:", adults)
print("미성년자:", minors)
print("전체 인원:", len(students))
print("성인 비율:", len(adults) / len(students) * 100, "%")