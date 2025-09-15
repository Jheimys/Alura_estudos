import time
import pytest
import conftest

from selenium.webdriver.common.by import By

from pages.add_itens_page import AddItens
from pages.login_page import LoginPage


@pytest.mark.usefixtures("setup_teardown")
@pytest.mark.add_item
class Test_CT02:
    def test_ct02_add_item(self):

        backpack = (By.XPATH, '//div[contains(@class, "inventory_item_name") and contains(text(), "Sauce Labs '
                              'Backpack")]')

        bike = (By.XPATH, '//div[contains(@class, "inventory_item_name") and contains(text(), "Sauce Labs Bike Light")]')


        driver = conftest.driver

        login_page = LoginPage()
        add_itens = AddItens()

        # Fazer login
        login_page.fazer_login('standard_user', 'secret_sauce')

        # add produto no carrinho
        add_itens.add_item_cart(backpack)


        driver.find_element(By.XPATH, '//span[contains(@class, "fa-layers-counter shopping_cart_badge") and contains(text(), 1)]')


        # clica no btn Back
        add_itens.clica_btn_back()


        #add novo item
        add_itens.add_item_cart(bike)

        #verifica a quantidade no carrinho
        driver.find_element(By.XPATH, '//span[contains(@class, "fa-layers-counter shopping_cart_badge") and contains(text(), '
                                      '2)]').click()


        # clica no button add to checkout
        add_itens.clica_btn_check_out()

        time.sleep(5)


