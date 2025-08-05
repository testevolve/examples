Then(/^I interact with page elements$/) do
  homepage.interact_with_page_objects
  homepage.assert_object_changes
  TestEvolve.audit 'homepage'
  TestEvolve.visual_check 'homepage'
end

Given(/^I load a page$/) do
  TE.browser.goto('https://testevolve.com/element-capture')
end

Given(/^I load a page - (.*)$/) do |page|
  TE.browser.goto page
end

Given(/^I load a webpage$/) do |table|
  table.hashes.each do |value|
    TE.browser.goto value[:page]
  end
end

Given(/^I go to a page$/) do
  TE.browser.goto('https://testevolve.com/element-capture')
end

Given(/^I go to a page - (.*)$/) do |page|
  TE.browser.goto page
end

Given(/^I go to a webpage$/) do |table|
  table.hashes.each do |value|
    TE.browser.goto value[:page]
  end
end

Given(/^I load a website$/) do |text|
  TE.browser.goto text
end

Given(/^I go to a website$/) do |text|
  TE.browser.goto text
end