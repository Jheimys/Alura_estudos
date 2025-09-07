import pytest
from selenium import webdriver

from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

driver: webdriver.Remote


@pytest.fixture
def setup_teardown():
    # setup
    global driver

    service = Service(ChromeDriverManager().install())

    driver = webdriver.Chrome(service=service)

    driver.implicitly_wait(5)

    driver.maximize_window()

    driver.get('https://www.saucedemo.com/v1/')

    # run test
    yield

    # teardown
    driver.quit()