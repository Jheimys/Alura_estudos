from selenium.webdriver.common.by import By

import conftest
from pages.base_pages import BasePage


class LoginPage(BasePage):

    def __init__(self):
        super().__init__()
        self.username_fild = (By.ID, "user-name")
        self.password_fild = (By.ID, 'password')
        self.login_button = (By.ID, 'login-button')
        self.error_login_message = (By.XPATH, '//h3[@data-test="error" and contains(text(),"Epic sadface: " )]')

    def fazer_login(self, usuario, senha):
        self.escrever(self.username_fild, usuario)
        self.escrever(self.password_fild, senha)
        self.clicar(self.login_button)

    def verificar_messagem_error_login_existe(self):
        self.verificar_se_elemento_existe(self.error_login_message)

    def verificar_texto_mensagem_erro_login(self, texto_esperado):
        texto_encontrado = self.pegar_texto_elemento(self.error_login_message)
        assert texto_encontrado == texto_esperado, (f"O texto encontrado foi '{texto_encontrado}' mas, era esperado o "
                                                    f"texto '{texto_esperado}'")