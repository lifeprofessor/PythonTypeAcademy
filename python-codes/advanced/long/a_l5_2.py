import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(42)
df = pd.DataFrame({
    "math": np.random.randint(70, 100, 100),
    "english": np.random.randint(65, 95, 100),
    "science": np.random.randint(60, 100, 100),
    "history": np.random.randint(55, 90, 100)
})

corr = df.corr()
sns.heatmap(corr, annot=True, cmap="coolwarm", fmt=".2f")
plt.title("과목 간 상관관계 히트맵")
plt.show()
