import matplotlib.pyplot as plt
import numpy as np

x = np.random.randn(1000)
mean = np.mean(x)
std = np.std(x)

plt.hist(x, bins=20, color='skyblue', edgecolor='black')
plt.axvline(mean, color='red', linestyle='--', label='Mean')
plt.axvline(mean + std, color='green', linestyle=':', 
            label='Mean + 1 SD')
plt.axvline(mean - std, color='green', linestyle=':', 
            label='Mean - 1 SD')
plt.title("Histogram of Random Data")
plt.xlabel("Value")
plt.ylabel("Frequency")
plt.legend()
plt.grid(True)
plt.show()