filename = "sample.txt"
message = "Hello, file!"
with open(filename, "w") as f:
    f.write(message)
    f.write("\n")
    f.write("This is a second line.")