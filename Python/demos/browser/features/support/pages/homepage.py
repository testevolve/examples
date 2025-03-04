from testevolve import TestEvolve
from testevolve.browser.page_object import PageObject

import os

class Homepage(PageObject):
    def __init__(self):
        self.accept_cookies_button = self.element(class_name='accept')
        self.myLink = self.element(name='example-link')
        self.myButton = self.element(name='example-button')
        self.myText = self.element(name='example-text')
        self.phone = self.element(name='example-phone')
        self.dateTime = self.element(name='example-datetime')
        self.date = self.element(name="example-date")
        self.week = self.element(name="example-week")
        self.month = self.element(name="example-month")
        self.range = self.element(name="example-range")
        self.file = self.element(name="example-file")
        self.url = self.element(name="url")
        self.mySearch = self.element(name="example-search")
        self.colour = self.element(name="example-colour1")
        self.password = self.element(name="example-password")
        self.number = self.element(name="example-number")
        self.myRadio = self.element(name="example-radio-1")
        self.myCheckbox = self.element(name="example-checkbox")
        self.mySelect = self.element(name="example-select")
        self.buttonDouble = self.element(name="example-double")
        self.email = self.element(name="example-email")

    def open(self):
        TestEvolve.browser.get("https://testevolve.com/element-capture")

    def open_page(page):
        TestEvolve.browser.get(page)

    def accept_cookies(self):
        try:
            self.accept_cookes_button().is_displayed()
            self.accept_cookes_button().click()
        except:
            TestEvolve.log.debug('Accept cookies button not found. Continuing')

    def interact_with_page_objects(self):
        self.myLink().click()
        self.myButton().click()
        self.myText().send_keys('some text')
        self.phone().send_keys('01268 467890')
        self.dateTime().send_keys('2025-02-02', '13:57')
        self.date().send_keys('2025-02-02')
        self.week().send_keys('26','2025')
        self.month().send_keys('12', '2025')
        self.range().send_keys('3')
        self.range().send_keys('5')
        self.range().send_keys('4')
        self.file().send_keys(os.getcwd()+"/features/support/resources/robot_picture.png")
        self.url().send_keys('www.bbc.co.uk')
        self.mySearch().send_keys('looking for...')
        self.colour().send_keys('#00ff41')
        self.password().send_keys('my secret')
        self.number().send_keys("12345")
        TestEvolve.browser.scroll_into_view(self.myRadio())
        self.myRadio().click()
        TestEvolve.browser.scroll_into_view(self.myCheckbox())
        self.myCheckbox().click()
        self.mySelect.select_value('Option 3')
        self.buttonDouble.double_click()
        self.email().send_keys('test@test.com')
