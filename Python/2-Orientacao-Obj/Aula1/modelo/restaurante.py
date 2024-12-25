class Restaurante:

    restaurantes = []

    def __init__(self, nome, categoria):
        self.nome = nome
        self.categoria = categoria
        self.ativo = False
        Restaurante.restaurantes.append(self)
    
    def __str__(self):
        return f'{self.nome} | {self.categoria}'

    def listar_restaurantes():
        for restautante in Restaurante.restaurantes:
            print(f'{restautante.nome} | {restautante.categoria} | {restautante.ativo}')


restaurante_praça = Restaurante('Praça', 'Goumert')

restaurante_pizza = Restaurante('Pizza Express', 'Italiana')

Restaurante.listar_restaurantes()


#print(vars(restaurante_praça))
#print(dir(restaurante_pizza))
# print(restaurante_praça)
