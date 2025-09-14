import time

import pytest

from pages.login_page import LoginPage


@pytest.mark.usefixtures("setup_teardown")
@pytest.mark.login_invalido
class Test_CT03:
    def test_ct03_login_invalido(self, setup_teardown):
        mensagem_erro_esperada = 'Epic sadface: Username and password do not match any user in this service'

        login_page = LoginPage()

        login_page.fazer_login('standard_user', 'zzz')

        login_page.verificar_messagem_error_login_existe()

        login_page.verificar_texto_mensagem_erro_login(mensagem_erro_esperada)

        time.sleep(3)





