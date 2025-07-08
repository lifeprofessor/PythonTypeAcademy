import numpy as np
from sklearn.linear_model import LinearRegression

X = np.array([[1], [2], [3]])
y = np.array([3, 6, 9])

model = LinearRegression()
model.fit(X, y)
print(model.predict([[4]]))