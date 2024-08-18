
arquivo = open('arquivos.txt')
print(arquivo.read())

# Exemplo do seek
# coloca o curso na posição que desejamos.

arquivo.seek(0)
print(arquivo.read())

arquivo.seek(20)
print(arquivo.read())


# para ler a linha
print("-------- usando o readline() ----------")
arquivo.seek(0)
print(arquivo.readline())

# transformando em uma lista
print("-------- usando o readlines() ----------")

linhas = arquivo.readlines()
print(linhas)
print(len(linhas))

# ao terminar de usar o arquivo temos que fecha-lo
print(arquivo.closed) # False
arquivo.close()
print(arquivo.closed) # True
