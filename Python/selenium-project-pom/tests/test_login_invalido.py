import pytest

import conftest

from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager


@pytest.mark.usefixtures("setup_teardown")
@pytest.mark.login_invalido
class Test_CT03:
    def test_ct03_login_invalido(self):

        driver = conftest.driver
        # -----  Preencher campo de usuário ---------
        driver.find_element(By.ID, "user-name").send_keys('standard_user')

        # ----------- Colocar senha inválida ---------------
        driver.find_element(By.ID, 'password').send_keys('123456')

        # ----------- Clicar no btn login ----------------
        driver.find_element(By.ID, 'login-button').click()


        # Receber a mensagem de erro
        error_message_ele = driver.find_element(By.XPATH, '//h3[@data-test="error" and contains(text(),"Epic sadface: " )]')

        error_message_text = error_message_ele.text

        expected_error_message = "Epic sadface: Username and password do not match any user in this service"

        assert error_message_text == expected_error_message, f"Mensagem de erro inesperada: {error_message_text}"
