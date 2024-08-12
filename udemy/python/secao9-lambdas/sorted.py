numeros = [7,6, 18, 14]

print(numeros)                #[7, 6, 18, 14]

print(sorted(numeros))       #[6, 7, 14, 18]   coloca na ordem e nal altera o original

print(numeros)               #[7, 6, 18, 14]


print(sorted(numeros, reverse=True))   # [18, 14, 7, 6]


# Exemplo 02

musicas = [
    {"titulo": 'hoooo', 'tocou': 9 },
    {"titulo": 'haaaa', 'tocou': 7 },
    {"titulo": 'heeee', 'tocou': 10 },
    {"titulo": 'hiii', 'tocou': 2 },
]

print(sorted(musicas, key=lambda musica: musica['tocou']))
print(sorted(musicas, key=lambda musica: musica['tocou'], reverse=True))