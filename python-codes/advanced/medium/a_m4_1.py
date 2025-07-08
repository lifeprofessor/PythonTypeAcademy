import pandas as pd
import numpy as np

df = pd.DataFrame({
    "age": [25, np.nan, 30, np.nan, 22],
    "score": [90, 88, np.nan, 95, 85]
})

df_filled = df.fillna(df.mean())
print(df_filled)
