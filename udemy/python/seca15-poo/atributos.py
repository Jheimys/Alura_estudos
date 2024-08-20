
class Produto:
    # Atributos de classes
    imposto = 1.05
    contador = 0

    def __init__(self, nome, descricao, valor):
        self.id = Produto.contador + 1
        self.nome = nome
        self.descricao = descricao
        self.valor = (valor * Produto.imposto)
        Produto.contador = self.id


p1 = Produto('PlayStation', 'video game', 2300)

print(f'nome:{p1.nome}, descricao: {p1.descricao}, valor: {p1.valor}')

p2 = Produto('Arroz', 'Mecearia', 5.99)
p2.peso = '5kg'

print(f'nome:{p2.nome}, descricao: {p2.descricao}, valor: {p2.valor}, peso:{p2.peso}')

print(p1.__dict__)
print(p2.__dict__)

del p2.peso

print(p2.__dict__)