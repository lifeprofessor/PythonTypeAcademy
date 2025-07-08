import matplotlib.pyplot as plt

labels = ["A", "B", "C", "D"]
sizes = [30, 25, 20, 25]

plt.pie(sizes, labels=labels, autopct="%1.1f%%")
plt.title("Class Distribution")
plt.show()
