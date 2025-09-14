from selenium.webdriver.common.by import By

from pages.base_pages import BasePage


class HomePage(BasePage):
    def __init__(self):
        super().__init__()  # garante que o BasePage inicializa o driver
        self.titulo_pagina = (By.XPATH, "//div[@class='product_label']")

    def verificar_login_com_sucesso(self):
        self.verificar_se_elemento_existe(self.titulo_pagina)

