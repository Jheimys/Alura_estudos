from collections import Counter

lista = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6,6, 6, 6, 6, 6, 6, 6, 6]

res = Counter(lista)

print(res)
print(type(res))
print(len(res))

print(Counter('Jheimys Bassani'))

hinoVasco = """Vamos todos cantar de coração A cruz de malta é o meu pendão Tu tens um nome do heróico Português
Vasco da Gama, a tua fama assim se fez Tua imensa torcida é bem feliz Norte-Sul, norte-sul deste Brasil
Tua estrela, na Terra a brilhar Ilumina o mar No atletismo és um braço No remo és imortal No futebol és o traço
De união Brasil-Portugal No atletismo és um braço No remo és imortal No futebol és o traço De união Brasil-Portugal
Vamos todos cantar de coração A cruz de malta é o meu pendão Tu tens um nome do heróico Português Vasco da Gama, a tua 
fama assim se fez Tua imensa torcida é bem feliz Norte-Sul, norte-sul deste Brasil Tua estrela, na Terra a brilhar 
Ilumina o mar No atletismo és um braço No remo és imortal No futebol és o traço De união Brasil-Portugal
No atletismo és um braço No remo és imortal No futebol és o traço De união Brasil-Portugal"""

palavras = hinoVasco.split()

#print(palavras)

res = Counter(palavras)

print(res)

print(res.most_common(5))