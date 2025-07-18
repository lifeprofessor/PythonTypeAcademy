filename = "sample.txt"
with open(filename, "r") as f:
    content = f.read()
    lines = content.splitlines()
    line_count = len(lines)
print(content)