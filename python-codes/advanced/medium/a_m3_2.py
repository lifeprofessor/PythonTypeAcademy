from sklearn.datasets import load_diabetes
from sklearn.linear_model import LinearRegression

X, y = load_diabetes(return_X_y=True)
model = LinearRegression()
model.fit(X, y)

y_pred = model.predict(X)
print("예측값:", model.predict([X[0]]))
print("모델 기울기:", model.coef_)
print("모델 절편:", model.intercept_)