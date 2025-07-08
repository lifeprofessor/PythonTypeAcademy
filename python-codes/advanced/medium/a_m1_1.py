import pandas as pd
import matplotlib.pyplot as plt

data = {
    "Subject": ["Math", "Science", "History", "English"],
    "Score": [88, 92, 80, 85]
}

df = pd.DataFrame(data)
avg = df["Score"].mean()

plt.bar(df["Subject"], df["Score"])
plt.axhline(avg, color='red', linestyle='--')
plt.title("Subject Scores")
plt.show()
