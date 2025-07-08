import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(1)
data = {
    "gender": ["M"]*50 + ["F"]*50,
    "score": np.concatenate([
        np.random.normal(75, 10, 50),
        np.random.normal(80, 8, 50)
    ])
}

df = pd.DataFrame(data)

plt.figure(figsize=(10, 5))
plt.subplot(1, 2, 1)
sns.boxplot(x="gender", y="score", data=df)
plt.title("성별 점수 Boxplot")

plt.subplot(1, 2, 2)
sns.violinplot(x="gender", y="score", data=df)
plt.title("성별 점수 Violinplot")

plt.tight_layout()
plt.show()
