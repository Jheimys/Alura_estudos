
numeros = [1, 2, 3, 4, 5]

res = [numero * 10 for numero in numeros]

print(res)

pares = [numero for numero in numeros if numero % 2 == 0 ]

print(pares)


# ------------------------------------------------------

listas = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

""" 
for lista in listas:
    print(lista)

for lista in listas:
    for num in lista:
        print(num)
        

[[print(valor) for valor in lista] for lista in listas]

"""
lista = [valores for valores in range(1,4)]

print('lista:', lista) #lista: [1, 2, 3]

tabuleiro = [[numero for numero in range(1, 4)] for valor in range(1, 4)]

print('tabuleiro: ', tabuleiro) #tabuleiro:  [[1, 2, 3], [1, 2, 3], [1, 2, 3]]

velha = [ ['X' if numero % 2 == 0 else 'O' for numero in range(1,4)] for numero in range(1,4)]

print('velha', velha)