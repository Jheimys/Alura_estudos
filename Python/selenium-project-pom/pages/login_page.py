from selenium.webdriver.common.by import By

import conftest
from pages.base_pages import BasePage


class LoginPage(BasePage):
    def __init__(self):
        self.driver = conftest.driver
        self.username_fild = (By.ID, "user-name")
        self.password_fild = (By.ID, 'password')
        self.login_button = (By.ID, 'login-button')

    def fazer_login(self, usuario, senha):
        # self.driver.find_element(*self.username_fild).send_keys(usuario)
        # self.driver.find_element(*self.password_fild).send_keys(senha)
        # self.driver.find_element(*self.login_button).click()

        self.escrever(self.username_fild, usuario)
        self.escrever(self.password_fild, senha)
        self.clicar(self.login_button)


