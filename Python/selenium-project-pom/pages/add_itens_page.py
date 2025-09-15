import time

from selenium.webdriver.common.by import By

from pages.base_pages import BasePage

class AddItens(BasePage):
    def __init__(self):
        super().__init__()
        self.btn_cart = (By.XPATH, '//button[@class="btn_primary btn_inventory"]')
        self.btn_back = (By.XPATH, '//button[@class="inventory_details_back_button"]')
        self.btn_check_out = (By.XPATH, '//a[@class="btn_action checkout_button"]')

    def esperar_produto_ficar_visivel(self, product):
        self.esperar_elemento_ficar_visivel(product)


    def add_item_cart(self, product):
        self.clicar(product)
        time.sleep(3)
        self.clicar(self.btn_cart)


    def clica_btn_cart(self):
        self.esperar_elemento_ficar_visivel(self.btn_cart)
        self.clicar(self.btn_cart)

    def clica_btn_back(self):
        self.esperar_elemento_ficar_visivel(self.btn_back)
        self.clicar(self.btn_back)

    def clica_btn_check_out(self):
        self.esperar_elemento_ficar_visivel(self.btn_check_out)
        self.clicar(self.btn_check_out)