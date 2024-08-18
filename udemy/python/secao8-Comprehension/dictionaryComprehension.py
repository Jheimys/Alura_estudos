
#Exemplo 1
numeros = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}

print(numeros.items()) #[('a', 1), ('b', 2), ('c', 3), ('d', 4), ('e', 5)]

quadrado = { chave: valor**2 for chave, valor in numeros.items()}

print(quadrado) #{'a': 1, 'b': 4, 'c': 9, 'd': 16, 'e': 25}


#Exemplo 2
numbers = [1, 2, 3, 4, 5]

transformandoEmDicionario = {numero: numero**2 for numero in numbers}

print(transformandoEmDicionario) #{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

#Exemplo 3
chaves = 'abcd'
valores = [1,2,3,4,5]

mistura = { chaves[i]: valores[i] for i in range(0, len(chaves))}

print(mistura) #{'a': 1, 'b': 2, 'c': 3, 'd': 4}