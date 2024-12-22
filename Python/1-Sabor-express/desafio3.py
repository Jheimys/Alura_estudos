# 1 - Crie uma lista para cada informação a seguir:

# Lista de números de 1 a 10;
# Lista com quatro nomes;
# Lista com o ano que você nasceu e o ano atual.

lista = []

for i in range(10):
    lista.append(i + 1)

print(lista)

lista_de_nomes = ['emy','gui','lais','mari']
lista_de_anos = [1999,2023]

# 2 - Crie uma lista e utilize um loop for para percorrer todos os elementos da lista.

for nome in lista_de_nomes:
    print(nome)

# 3 - Para fazer calcular a soma dos números impares de 1 a 10, você pode utilizar o seguinte código:
soma_imprares = 0

for i in range(1, 11, 2):
    soma_imprares += i
print(soma_imprares)

# 4 - Para imprimir os números de 1 a 10 de forma decrescente, você pode utilizar a seguinte estrutura:

for i in range(10, 0, -1):
    print(i)

