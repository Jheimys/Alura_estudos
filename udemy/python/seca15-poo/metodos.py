
class Usuario:
    def __init__(self, nome, sobrenome, email, senha):
        self.__nome = nome
        self.__sobrenome = sobrenome
        self.__email = email
        self.__senha = senha
    def nome_completo(self):
        return f'{self.__nome} {self.__sobrenome}'


user1 = Usuario('James', 'Bassani', 'james@email.com', '123456')

print(user1) # <__main__.Usuario object at 0x00000205894F40D0>

print(user1.nome_completo())