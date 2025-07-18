from sklearn.datasets import load_diabetes
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

X, y = load_diabetes(return_X_y=True)
X = X[:, [2]]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

print("Slope:", model.coef_[0])
print("Intercept:", model.intercept_)
print("R² score:", model.score(X_test, y_test))

plt.scatter(X_test, y_test, color="blue", label="Actual")
plt.plot(X_test, model.predict(X_test), color="red", label="Prediction")
plt.title("Linear Regression on Diabetes Dataset (BMI)")
plt.legend()
plt.show()