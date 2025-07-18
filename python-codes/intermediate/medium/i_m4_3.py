fruits = ["apple", "banana", "cherry"]
has_banana = "banana" in fruits
before = fruits.copy()
if has_banana:
    fruits.remove("banana")
after = fruits
print(after)