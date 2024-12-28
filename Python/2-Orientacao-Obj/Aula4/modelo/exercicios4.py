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
    
    def emprestar(self):
        """Empresta o livro, tornando-o indisponível."""

        if self._disponivel:
            self._disponivel = False
            print(f'O livro {self.titulo} foi emprestado com sucesso.')
        else: 
            print(f'o livro {self.titulo} não está disponível para emprestimo.')
    

