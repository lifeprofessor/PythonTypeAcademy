import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(1)
df = pd.DataFrame({
    "gender": ["M"]*50 + ["F"]*50,
    "score": np.concatenate([
        np.random.normal(75, 10, 50),
        np.random.normal(80, 8, 50)
    ])
})

plt.figure(figsize=(6, 4))
sns.boxplot(x="gender", y="score", data=df)
plt.title("Score Distribution by Gender (Boxplot)")

plt.figure(figsize=(6, 4))
sns.violinplot(x="gender", y="score", data=df)
plt.title("Score Distribution by Gender (Violinplot)")

plt.tight_layout()
plt.show()