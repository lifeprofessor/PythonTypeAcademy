lines = ["First line\n", "Second line\n"]
filename = "sample.txt"
with open(filename, "w") as f:
    f.writelines(lines)
    f.write("Third line\n")
    f.write("Fourth line\n")