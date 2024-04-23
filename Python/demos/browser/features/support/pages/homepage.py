from testevolve import TestEvolve, Page
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import Select
import os

class Homepage(Page):
    def __init__(self):
        self.myBanner = TestEvolve.browser.find_element(By.CLASS_NAME, "sqs-cookie-banner-v2-acceptWrapper")
        self.mylink = TestEvolve.browser.find_element(By.NAME, "example-link")
        self.myButton = TestEvolve.browser.find_element(By.NAME, "example-button")
        self.text = TestEvolve.browser.find_element(By.NAME, "example-text")
        self.phone = TestEvolve.browser.find_element(By.NAME, "example-phone")
        self.dateTime = TestEvolve.browser.find_element(By.NAME, "example-datetime")
        self.date = TestEvolve.browser.find_element(By.NAME, "example-date")
        self.week = TestEvolve.browser.find_element(By.NAME, "example-week")
        self.month = TestEvolve.browser.find_element(By.NAME, "example-month")
        self.range = TestEvolve.browser.find_element(By.NAME, "example-range")
        self.file = TestEvolve.browser.find_element(By.NAME, "example-file")
        self.url = TestEvolve.browser.find_element(By.NAME, "url")
        self.mySearch = TestEvolve.browser.find_element(By.NAME, "example-search")
        self.colour = TestEvolve.browser.find_element(By.NAME, "example-colour1")
        self.password = TestEvolve.browser.find_element(By.NAME, "example-password")
        self.number = TestEvolve.browser.find_element(By.NAME, "example-number")
        self.myRadio = TestEvolve.browser.find_element(By.NAME, "example-radio-1")
        self.myCheckbox = TestEvolve.browser.find_element(By.NAME, "example-checkbox")
        self.mySelect = TestEvolve.browser.find_element(By.NAME, "example-select")
        self.buttonDouble = TestEvolve.browser.find_element(By.NAME, "example-double")
        self.email = TestEvolve.browser.find_element(By.NAME, "example-email")

    def open(self):
        TestEvolve.browser.get("https://testevolve.com/element-capture")

    def open_page(page):
        TestEvolve.browser.get(page)

    def accept_cookies(self):
        if TestEvolve.browser.find_element(By.CLASS_NAME, "sqs-cookie-banner-v2-acceptWrapper").is_displayed():
            TestEvolve.browser.find_element(By.CLASS_NAME, "sqs-cookie-banner-v2-acceptWrapper").click()

    def interact_with_page_objects(self):
        TestEvolve.browser.find_element(By.NAME, "example-link").click()
        TestEvolve.browser.find_element(By.NAME, "example-button").click()
        TestEvolve.browser.find_element(By.NAME, "example-text").send_keys('some text')
        TestEvolve.browser.find_element(By.NAME, "example-phone").send_keys('01268 467890')
        TestEvolve.browser.find_element(By.NAME, "example-datetime").send_keys('2025-02-02', '13:57');
        TestEvolve.browser.find_element(By.NAME, "example-date").send_keys('2025-02-02')
        TestEvolve.browser.find_element(By.NAME, "example-week").send_keys('26','2025');
        TestEvolve.browser.find_element(By.NAME, "example-month").send_keys('12', '2025');
        TestEvolve.browser.find_element(By.NAME, "example-range").send_keys('3')
        TestEvolve.browser.find_element(By.NAME, "example-range").send_keys('5')
        TestEvolve.browser.find_element(By.NAME, "example-range").send_keys('4')
        TestEvolve.browser.find_element(By.NAME, "example-file").send_keys(os.getcwd()+"/features/support/resources/robot_picture.png")
        TestEvolve.browser.find_element(By.NAME, "url").send_keys('www.bbc.co.uk')
        TestEvolve.browser.find_element(By.NAME, "example-search").send_keys('looking for...')
        TestEvolve.browser.find_element(By.NAME, "example-colour1").send_keys('#00ff41')
        TestEvolve.browser.find_element(By.NAME, "example-password").send_keys('my secret')
        TestEvolve.browser.find_element(By.NAME, "example-number").send_keys("12345")
        TestEvolve.browser.find_element(By.NAME, "example-radio-1").click()
        ActionChains(TestEvolve.browser).move_to_element(TestEvolve.browser.find_element(By.NAME, "example-checkbox")).perform()
        TestEvolve.browser.find_element(By.NAME, "example-checkbox").click()
        Select(TestEvolve.browser.find_element(By.NAME, "example-select")).select_by_value('Option 3')
        ActionChains(TestEvolve.browser).double_click(on_element = TestEvolve.browser.find_element(By.NAME, "example-double")).perform()
        TestEvolve.browser.find_element(By.NAME, "example-email").send_keys('test@test.com')