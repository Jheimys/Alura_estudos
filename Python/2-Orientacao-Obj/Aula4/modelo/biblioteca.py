from exercicios4 import Livro

livro1 = Livro('Análise na reta real', 'Elon Lages Lima', 1990)
livro1.alternar_estado()

livro2 = Livro('Matemática discreta', 'Kenneth Rosen', 1990)
livro3 = Livro('Estruturas de dados', 'Cormen', 2001)

print(livro1)
print(livro1.disponivel)

print()
print('Verificando a disponibilidade')
ano_especifico = 1990
livros_disponiveis_ano = Livro.verificar_disponibilidade(ano_especifico)

for livro in livros_disponiveis_ano:
    print(livro)

print()
print('Disponibilidade do livro:')

for livro in Livro.livros:
    print(f"{livro.titulo} - {'Disponível' if livro.disponivel else 'Indisponível'}")

print()
livro2.emprestar()
livro1.emprestar()
livro2.emprestar()