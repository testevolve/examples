from testevolve import TestEvolve, Page
from features.support.pages.homepage import Homepage
from selenium.webdriver.common.by import By
from selenium.common import exceptions

@given(u'I open a page')
def step(context):
  Homepage.open(context)
  Homepage.accept_cookies(context)

@given(u'I open a page - {page}')
def step(context, page):
  Homepage.open_page(page)
  Homepage.accept_cookies(context)

@given(u'I open a webpage')
def step(context):
  for row in context.table:
    Homepage.open_page(row['page'])
    Homepage.accept_cookies(context)

@given(u'I open a website')
def step(context):
  Homepage.open_page(context.text)
  Homepage.accept_cookies(context)

@given(u'I open a site')
def step(context):
  Homepage.open(context)
  Homepage.accept_cookies(context)

@given(u'I open a site - {page}')
def step(context, page):
  Homepage.open_page(page)
  Homepage.accept_cookies(context)

@given(u'I open a web-page')
def step(context):
  for row in context.table:
    Homepage.open_page(row['page'])
    Homepage.accept_cookies(context)

@given(u'I open a web-site')
def step(context):
  Homepage.open_page(context.text)
  Homepage.accept_cookies(context)

@then(u'I interact with page elements')
def step(context):
  Homepage.interact_with_page_objects(context)