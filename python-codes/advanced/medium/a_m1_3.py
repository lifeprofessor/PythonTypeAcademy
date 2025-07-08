import pandas as pd

data = {
    "city": ["Seoul", "Busan", "Incheon"],
    "temp": [25.3, 22.7, 24.8],
    "humidity": [60, 65, 55]
}

df = pd.DataFrame(data)
print("평균 기온:", df["temp"].mean())
print("습도 최고:", df["humidity"].max())
