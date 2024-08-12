import statistics

# Exemplo 01
idades = [41, 37, 10, 3]

media = statistics.mean(idades)

print('Média das idades: ', media)

res = filter(lambda x: x > media, idades)
print((list(res)))

# ------------    Exemplo 02  ---------------------------
print('')

paises = ['', 'Brasil', '', 'Argentina', '', '', 'Uruguai']
print(paises)

res = filter(None, paises)
print(list(res))              # ['Brasil', 'Argentina', 'Uruguai']

res1 = filter(lambda pais: len(pais) > 0, paises)
print(list(res1))            # ['Brasil', 'Argentina', 'Uruguai']

res3 = filter(lambda pais: pais != '', paises)
print(list(res3))            # ['Brasil', 'Argentina', 'Uruguai']

# ------------    Exemplo 03  ---------------------------
print('')

usuarios = [
    {"name": 'samuel', 'tweets': ['abacaxi', 'morango']},
    {"name": 'saulo', 'tweets': []},
    {"name": 'ana', 'tweets': ['abacaxi', 'morango']},
    {"name": 'raul', 'tweets': ['abacaxi']},
    {"name": 'valter', 'tweets': []}
]

resul = filter(lambda usuario: len(usuario['tweets']) == 0, usuarios )
print(list(resul))
