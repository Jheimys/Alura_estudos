import math


def area(raio):
    return math.pi * raio ** 2


raios = [1, 2, 3, 4, 5]

areas = map(area, raios)
print(areas)
print(type(areas))
print(list(areas))

for n in areas:
    print('áreas:', n)

# ---- Exemplo 2 ---------------------

paises = [('Brasil', 35), ('Portugal',  20), ('Alemanha', 5)]

c_para_f = lambda dado: (dado[0], (9 / 5) * dado[1] + 32)

print(list(map(c_para_f, paises))) # [('Brasil', 95.0), ('Portugal', 68.0), ('Alemanha', 41.0)]

