
# O Else é execultado somente se não ocorrer error
try:
    num = int(input('Informe o número: '))
except ValueError:
    print('Valor incorreto')
else:
    print(f'você digitou {num}')


# Exemplo 02:
def divide(a, b):
    try:
        return int(a) / int(b)
    except ValueError:
        return "Valor incorreto"
    except ZeroDivisionError:
        return ('Não é possível dividir por zero')

num1 = input('Informe o primeiro número')
num2 = input('Informe o segundo número')

print(divide(num1, num2))