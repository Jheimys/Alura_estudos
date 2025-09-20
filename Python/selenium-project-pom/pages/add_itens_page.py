import time

from selenium.webdriver.common.by import By

from pages.base_pages import BasePage

class AddItens(BasePage):
    def __init__(self):
        super().__init__()
        self.btn_cart = (By.XPATH, '//button[@class="btn_primary btn_inventory"]')
        self.btn_back = (By.XPATH, '//button[@class="inventory_details_back_button"]')
        self.btn_check_out = (By.XPATH, '//a[@class="btn_action checkout_button"]')
        self.cart_badge = (By.CLASS_NAME, "shopping_cart_badge")

    def esperar_produto_ficar_visivel(self, product):
        self.esperar_elemento_ficar_visivel(product)

    def locator_produto_por_nome(self, nome_produto):
        xpath = f'//div[contains(@class, "inventory_item_name") and contains(text(), "{nome_produto}")]'
        return (By.XPATH, xpath)


    def add_item_cart(self, nome_produto):
        produto_locator = self.locator_produto_por_nome(nome_produto)
        self.clicar(produto_locator)
        time.sleep(2)
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

    def get_cart_quantity(self):
        try:
            texto = self.pegar_texto_elemento(self.cart_badge)
            return int(texto)
        except Exception:
            return 0

    def clicar_no_cart_badge(self):
        self.esperar_elemento_ficar_visivel(self.cart_badge)
        self.clicar(self.cart_badge)
