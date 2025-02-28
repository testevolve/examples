from testevolve import TestEvolve
from testevolve.browser.page_object import PageObject

import os

class Homepage(PageObject):
    def __init__(self):
        self.accept_cookes_button = self.element('accept', 'class_name')
        # self.mylink = self.element('example-link')
        self.myButton = self.element('example-button')
        self.myText = self.element('example-text')
        self.phone = self.element('example-phone')
        self.dateTime = self.element('example-datetime')
        self.date = self.element("example-date")
        self.week = self.element("example-week")
        self.month = self.element("example-month")
        self.range = self.element("example-range")
        self.file = self.element("example-file")
        self.url = self.element("url")
        self.mySearch = self.element("example-search")
        self.colour = self.element("example-colour1")
        self.password = self.element("example-password")
        self.number = self.element("example-number")
        self.myRadio = self.element("example-radio-1")
        self.myCheckbox = self.element("example-checkbox")
        self.mySelect = self.element("example-select")
        self.buttonDouble = self.element("example-double")
        self.email = self.element("example-email")

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
        # self.myLink().click()
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
        TestEvolve.browser.scroll_into_view(self.mySelect())
        # self.mySelect().select_by_value('Option 3')
        TestEvolve.browser.scroll_into_view(self.buttonDouble())
        # self.buttonDouble().double_click()
        self.email().send_keys('test@test.com')
