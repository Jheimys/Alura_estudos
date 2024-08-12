from functools import reduce

dados = [1, 2, 3, 4, 5]

mult = lambda x, y: x * y

fatorial = reduce(mult, dados)
print(fatorial)

res= 1

for n in dados:
    res = res * n

print(res)