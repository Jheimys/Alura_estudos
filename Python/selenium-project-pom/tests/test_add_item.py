import time
import pytest

from selenium.webdriver.common.by import By

from pages.add_itens_page import AddItens
from pages.login_page import LoginPage


@pytest.mark.usefixtures("setup_teardown")
@pytest.mark.add_item
class Test_CT02:
    def test_ct02_add_item(self):

        login_page = LoginPage()
        add_itens = AddItens()

        # ---- Fazer login ----
        login_page.fazer_login('standard_user', 'secret_sauce')

        #--- add produto no carrinho ---
        add_itens.add_item_cart("Sauce Labs Backpack")

        # verifica a quantidade de produtos no carrinho
        qtd_carrinho = add_itens.get_cart_quantity()
        print('quatidade em 1:',qtd_carrinho)

        # clica no btn Back
        add_itens.clica_btn_back()


        # add novo item
        add_itens.add_item_cart("Sauce Labs Bike Light")

        #verifica a quantidade de produtos no carrinho
        qtd_carrinho = add_itens.get_cart_quantity()
        print('quatidade em 2:', qtd_carrinho)

        add_itens.clicar_no_cart_badge()

        # clica no button add to checkout
        add_itens.clica_btn_check_out()

        time.sleep(3)


