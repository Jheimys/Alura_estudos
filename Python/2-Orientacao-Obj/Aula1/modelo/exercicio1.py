class Musica:
    nome = ''
    artista = ''
    duracao = ''

# Criando uma instância da classe Musica
musica1 = Musica()
musica1.nome = "Bohemian Rhapsody"
musica1.artista = "Queen"
musica1.duracao = "5:55"

musica2 = Musica()
musica2.nome = "Imagine"
musica2.artista = "John Lennon"
musica2.duracao = "3:03"

print(f'Música: {musica1.nome} - Banda: {musica1.artista} - {musica1.duracao} segundos')