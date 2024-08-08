""""
1. Crie um programa que lê 6 valores inteiros, armazene em uma lista e em seguida mostre na tela os valores
lidos.
"""
# solução 1
valor1 = 1
valor2 = 2
valor3 = 3
valor4 = 4
valor5 = 5
valor6 = 6

valores = [valor1, valor2, valor3, valor4, valor5, valor6]

print(valores)

# solução 2

lista = []

for i in range(6):
    numero = int(input('Digite um número inteiro: '))
    lista.append(numero)

print(f'Os valores da lista são: {lista}')

""""
2. Faça um programa que possua uma lista denominada A que armazene 6 números inteiros. O programa
deve executar os seguintes passos:

a) Atribua os seguintes valores a essa lista: 1, 0, 5, -2, -5, 7.
b) Armazene em uma variável inteira a soma entre os valores das posições A[0], A[1] e A[5] da lista e mostre
na tela esta soma.
c) Modifique a lista na posição 5, atribuindo a esta posição o valor 100.
d) Mostre na tela cada valor da lista A, um em cada linha.
"""

A = [1, 0, 5, -2, -5, 7]

soma = A[0] + A[1] + A[5]

print(f'A soma é: {soma}')

A[5] = 100

print(A)

for n in A:
    print(n)


""""
3. Faça um programa que leia 10 valores, armazene-os em uma lista e apresente quantos valores pares ele
possui.

"""

lista2 = []
lista3 = []

for n in range(10):
    numeros = int(input('Digite valores inteiros: '))
    lista2.append(numeros)

print(lista2)


for n in lista2:
    if n % 2 == 0:
        lista3.append(n)

print(f'A quantidade de elementos pares é {len(lista3)}')