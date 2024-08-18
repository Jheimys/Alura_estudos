def soma(a, b):
    return a + b


def subtrair(a, b):
    return a - b


def multiplicar(a, b):
    return a * b


def dividir(a, b):
    return a / b


def calcular(num1, num2, funcao):
    return funcao(num1, num2)


print(calcular(4, 2, soma))
print(calcular(4, 2, subtrair))
print(calcular(4, 2, multiplicar))
print(calcular(4, 2, dividir))


from random import choice
def faz_me_ri(pessoa):
    def dando_rizada():
        risada = choice(('hahaaa', 'lololo','kkkkkkk' ))
        return f'{risada} {pessoa}'
    return dando_rizada


rindo = faz_me_ri('Fernanda')


print(rindo())
print(rindo)