class Restaurante:
    nome = ''
    categoria = ''
    ativo = False

restaurante_praça = Restaurante()
restaurante_praça.nome = 'Praça'
restaurante_praça.categoria = 'Italiana'

restaurante_pizza = Restaurante()

restaurantes = [restaurante_praça, restaurante_pizza]

# print(vars(restaurante_praça))
print(restaurante_praça.nome)
