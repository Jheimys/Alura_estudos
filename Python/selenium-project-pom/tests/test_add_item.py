import time
import pytest
import conftest

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


@pytest.mark.usefixtures("setup_teardown")
@pytest.mark.add_item
class Test_CT02:
    def test_ct02_add_item(self):
        driver = conftest.driver
        driver.find_element(By.ID, "user-name").send_keys('standard_user')
        driver.find_element(By.ID, 'password').send_keys('secret_sauce')
        driver.find_element(By.ID, 'login-button').click()

        wait = WebDriverWait(driver, 10)

        item = wait.until(EC.element_to_be_clickable((By.XPATH, '//div[contains(@class, "inventory_item_name") and contains('
                                                                'text(), "Sauce Labs Backpack")]')))
        item.click()

        time.sleep(5)

        # clica no button add to cart
        btn_add_cart = wait.until(EC.element_to_be_clickable((By.XPATH, '//button[@class="btn_primary btn_inventory"]')))
        btn_add_cart.click()

        driver.find_element(By.XPATH, '//span[contains(@class, "fa-layers-counter shopping_cart_badge") and contains(text(), '
                                      '1)]')


        # clica no btn Back
        btn_back = wait.until(EC.element_to_be_clickable((By.XPATH, '//button[@class="inventory_details_back_button"]')))
        btn_back.click()



        #add novo item
        item = wait.until(EC.element_to_be_clickable((By.XPATH, '//div[contains(@class, "inventory_item_name") and contains('
                                                                'text(), "Sauce Labs Bike Light")]')))
        item.click()

        # clica no button add to cart
        btn_add_cart = wait.until(EC.element_to_be_clickable((By.XPATH, '//button[@class="btn_primary btn_inventory"]')))
        btn_add_cart.click()

        #verifica a quantidade no carrinho
        driver.find_element(By.XPATH, '//span[contains(@class, "fa-layers-counter shopping_cart_badge") and contains(text(), '
                                      '2)]').click()


        # clica no button add to checkout
        btn_add_checkout = wait.until(EC.element_to_be_clickable((By.XPATH, '//a[@class="btn_action checkout_button"]')))
        btn_add_checkout.click()

        time.sleep(10)


