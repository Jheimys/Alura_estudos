# OBS1: se o arquivo nao existir ele é criado
# OBS2: se o arquivo existir o anterior é apagado e é SUBSCRITO.

"""
with open('novo.txt', 'w') as texto:
    texto.write('Vasco\n')
    texto.write('Da\n')
    texto.write('Gama')
"""

with open('frutas.txt', 'w') as arquivo:
    while True:
        fruta = input('Informe uma fruta ou digite sair: ')
        if fruta != 'sair':
            arquivo.write(fruta)
            arquivo.write('\n')
        else:
            break




