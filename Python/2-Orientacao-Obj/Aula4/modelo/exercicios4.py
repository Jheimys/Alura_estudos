class Livro:

    livros = []

    #Construtor
    def __init__(self, titulo, autor, ano_publicado):
        self.titulo = titulo
        self.autor = autor
        self.ano_publicado = ano_publicado
        self._disponivel = True
        Livro.livros.append(self)
    
    def __str__(self):
        return f'Livro: {self.titulo}, autor: {self.autor}, ano de publicação: {self.ano_publicado}'
    
    def alternar_estado(self):
        self._disponivel = not self._disponivel
    
    @property
    def disponivel(self):
        return self._disponivel
    
    @staticmethod
    def verificar_disponibilidade(ano):
        livros_disponiveis = [livro for livro in Livro.livros if livro.ano_publicado == ano and livro._disponivel]
        return livros_disponiveis
    

autor1 = Livro('Análise na reta real', 'Elon Lages Lima', 1990)
autor1.alternar_estado()

livro2 = Livro('Matemática discreta', 'Kenneth Rosen', 1990)
livro3 = Livro('Estruturas de dados', 'Cormen', 2001)

print(autor1)
print(autor1.disponivel)

print()
print('Verificando a disponibilidade')
ano_especifico = 1990
livros_disponiveis_ano = Livro.verificar_disponibilidade(ano_especifico)

for livro in livros_disponiveis_ano:
    print(livro)