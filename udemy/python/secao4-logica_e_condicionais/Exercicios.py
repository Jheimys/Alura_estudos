# 1. Faça um programa que receba dois números inteiros e mostre qual deles é o maior.
import math

num1 = 10
num2 = 20

if num1 > num2:
    print(num1)
else:
    print(num2)

"""""
2. Faça um programa que leia um número inteiro fornecido pelo usuário. Se esse número for positivo, calcule
a raiz quadrada do número e apresente-a. Se o número for negativo, mostre uma mensagem dizendo que o
número é inválido.

"""""

num: int = int(input('Digite um número'))

if num > 0:
    raiz_quadrada = math.sqrt(num)
    print(raiz_quadrada)
else:
    print('Número inválido')

#3. Faça um programa que recebe um número inteiro e informe se este número é par ou ímpar.

imparOuPar = 102

if imparOuPar % 2 == 0:
    print(f'O numero {imparOuPar} é par')
else:
    print(f'O número {imparOuPar} é ímpar')
