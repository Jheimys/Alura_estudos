#1. Faça um programa que determine e mostre os cinco primeiros múltiplos de 3, considerando números
#maiores que 0.

numeros = range(1, 6)

for n in numeros:
    multiplo3 = 3 * n
    print(multiplo3)

#2. Faça um programa que utilize o comando while para mostrar na tela uma contagem regressiva, iniciando
#em 10 e terminando em 0. Mostre também uma mensagem “FIM!” após a contagem.

contagem = 10

while contagem >= 0:
    print(contagem)
    contagem -= 1
print('fim!')

#3. Faça um programa que declare um inteiro, inicialize-o com 0, incremente-o de 1000 em 1000, imprimindo
#seu valor na tela, até que seu valor seja 100000 (cem mil).

valor = range(0, 100001, 1000)

for n in valor:
    print(n)
