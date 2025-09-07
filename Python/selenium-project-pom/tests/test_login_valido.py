import pytest
import conftest
from selenium.webdriver.common.by import By


@pytest.mark.usefixtures("setup_teardown")
@pytest.mark.login
class Test_CT01:
    def test_ct01_login(self):
        driver = conftest.driver
        driver.find_element(By.ID, "user-name").send_keys('standard_user')
        driver.find_element(By.ID, 'password').send_keys('secret_sauce')
        driver.find_element(By.ID, 'login-button').click()
        assert driver.find_element(By.XPATH, "//div[@class='product_label']").is_displayed()

