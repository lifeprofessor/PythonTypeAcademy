nums = [1, 2, 3, 4, 5]
squared = [x ** 2 for x in nums]
first = squared[0]
last = squared[-1]
count = len(squared)
print(squared)
print("원소 개수:", count)