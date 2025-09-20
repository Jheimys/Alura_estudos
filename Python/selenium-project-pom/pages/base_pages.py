from selenium.webdriver import ActionChains, Keys
from selenium.webdriver.support import expected_conditions as EC

from selenium.webdriver.support.wait import WebDriverWait

import conftest


class BasePage:
    def __init__(self):
        self.driver = conftest.driver

    def encontrar_elemento(self, locator):
        return self.driver.find_element(*locator)

    def encontrar_elementos(self, locator):
        return self.driver.find_elements(*locator)

    def escrever(self, locator, text):
        self.encontrar_elemento(locator).send_keys(text)

    def clicar(self, locator):
        self.encontrar_elemento(locator).click()

    def verificar_se_elemento_existe(self, locator):
        assert self.encontrar_elemento(locator).is_displayed(), f"O elemento '{locator}' nãp foi encontrado na tela"

    def pegar_texto_elemento(self, locator):
        return self.encontrar_elemento(locator).text


    def esperar_elemento_ficar_visivel(self, locator, timeout = 10):
        wait = WebDriverWait(self.driver, timeout)
        item = wait.until(EC.element_to_be_clickable(locator))
        return item


    # 🔥 Novo método: duplo clique
    def duplo_clique(self, locator):
        elemento = self.encontrar_elemento(locator)
        actions = ActionChains(self.driver)
        actions.double_click(elemento).perform()


    # 🔥 Novo método: clique com botão direito
    def clique_direito(self, locator):
        elemento = self.encontrar_elemento(locator)
        actions = ActionChains(self.driver)
        actions.context_click(elemento).perform()

        # 🔥 Novo método: pressionar tecla

    def pressionar_tecla(self, locator, key):
        elem = self.encontrar_elemento(locator)

        if key == "ENTER":
            elem.send_keys(Keys.ENTER)
        elif key == "ESC":
            elem.send_keys(Keys.ESCAPE)
        elif key== "TAB":
            elem.send_keys(Keys.TAB)
        else:
            raise ValueError(f"A tecla '{key}' não está mapeada no método pressionar_tecla")
