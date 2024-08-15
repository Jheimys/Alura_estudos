

def conta_ate(valorMaximo):
    contador = 1
    while contador < valorMaximo:
        yield contador
        contador = contador + 1

gen = conta_ate(10)

print(next(gen)) # 1

print ('-------------')

for n in gen:
    print(n) # vai printar de 2 até 9