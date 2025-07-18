import matplotlib.pyplot as plt

labels = ["A", "B", "C", "D"]
sizes = [30, 25, 20, 25]
colors = ["skyblue", "lightgreen", "orange", "lightcoral"]
explode = [0.1, 0, 0, 0]  # A 강조

plt.pie(sizes, labels=labels, autopct="%1.1f%%", colors=colors, explode=explode,
        startangle=90, shadow=True)
plt.axis("equal")
plt.title("Class Distribution")
plt.tight_layout()
plt.show()