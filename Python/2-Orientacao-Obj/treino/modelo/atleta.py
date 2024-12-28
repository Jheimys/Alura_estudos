class Atleta:
    atletas = []

    # construtor
    def __init__(self, nome, peso, faixa, equipe):
        self._nome = nome
        self._peso = peso
        self._faixa = faixa
        self._equipe = equipe

    def __str__(self):
        return f'Atleta: {self._nome}, peso: {self._peso}Kg, faixa: {self._faixa}, equipe:{self._equipe}'
    
    def categoria(self):
        if self._peso < 70:
            print('Catgoria leve')

        elif self._peso < 80:
            print('Categotia Médio')
        else:
            print('Categoria Pesado')
    

atleta1 = Atleta('Pedro', 70, 'Marron', 'Bpt')
atleta1.categoria()
print(atleta1)