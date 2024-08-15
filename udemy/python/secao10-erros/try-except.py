
# Exemplo01

try:
    geek()
except:
    print('Deu algum problema!')


# Exemplo02

try:
    len(5)
except TypeError:
    print('Esse tipo de objeto não possui length')


# Exemplo03

try:
    len(5)
except TypeError as err:
    print(f'A aplicação gerou o seguinte erro: {err}')


# Exemplo04

try:
    geek()
except TypeError as err:
    print(f'A aplicação gerou o seguinte erro: {err}')
except NameError as err:
    print(f'A aplicação gerou o seguinte erro: {err}')
except:
    print('deu um erro diferente')

# Exemplo05

def pegaValor(dicionario, chave):
    try:
        return dicionario[chave]
    except KeyError:
        return None
    except TypeError:
        return None

dic = {"nome": "João"}

print('dicionario ====> ', dic['nome'])

print(pegaValor(dic, "nome"))
