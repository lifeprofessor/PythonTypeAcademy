import matplotlib.pyplot as plt
import numpy as np

x = np.random.randn(1000)
plt.hist(x, bins=20, color='skyblue')
plt.title("Histogram of Random Data")
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.show()
