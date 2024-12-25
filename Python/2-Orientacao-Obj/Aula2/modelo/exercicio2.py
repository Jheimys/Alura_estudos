class Musica:

    musicas = []

    def __init__(self, nome, artista, duracao):
        self.nome = nome
        self.artista = artista
        self.duracao = duracao
        Musica.musicas.append(self)

    def __str__(self):
        return f'{self.nome} | {self.artista} | {self.duracao}'
    
    def listar_musicas():
        for musica in Musica.musicas:
            print(f'{musica.nome} | {musica.artista} | {musica.duracao}')

# Criando uma instância da classe Musica
musica1 = Musica("Bohemian Rhapsody","Queen", "5:55" )

musica2 = Musica("Imagine","John Lennon", "3:03" )

Musica.listar_musicas()


