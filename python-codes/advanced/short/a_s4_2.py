import pandas as pd
import numpy as np

df = pd.DataFrame({
    "score": [90, np.nan, 80]
})

df["score"] = df["score"].fillna(df["score"].mean())
print(df)