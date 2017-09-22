import numpy as np
a=np.random.random(size=(15,15))
n=a.max()
for i in range(0,15):
    for j in range(0,15):
        if a[i][j]==n:
            a[i][j]=100;
print(a);
print(a.max())
