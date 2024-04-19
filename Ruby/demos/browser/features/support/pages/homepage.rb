module Pages
  def homepage
    @homepage ||= Homepage.new
  end

  class Homepage < TestEvolve::Core::PageObject
    element(:my_banner) { div(class: 'sqs-cookie-banner-v2-acceptWrapper') }
    element(:my_link) { a(data_test: 'example-link') }
    element(:my_button) { button(data_test: 'example-button') }
    element(:text) { text_field(data_test: 'example-text') }
    element(:phone) { text_field(data_test: 'example-phone') }
    element(:date_time) { date_time_field(data_test: 'example-datetime') }
    element(:date) { date_field(data_test: 'example-date') }
    element(:week) { input(data_test: 'example-week') }
    element(:month) { input(data_test: 'example-month') }
    element(:range) { input(data_test: 'example-range') }
    element(:file) { file_field(data_test: 'example-file') }
    element(:url) { text_field(name: 'url') }
    element(:my_search) { text_field(data_test: 'example-search') }
    element(:colour) { input(data_test: 'example-colour1') }
    element(:password) { text_field(data_test: 'example-password') }
    element(:number) { text_field(data_test: 'example-number') }
    element(:my_radio) { radio(data_test: 'example-radio-1') }
    element(:my_radio_2) { radio(data_test: 'example-radio-2') }
    element(:my_checkbox) { checkbox(data_test: 'example-checkbox') }
    element(:my_select) { select(data_test: 'example-select') }
    element(:button_double) { button(data_test: 'example-double') }
    element(:email) { text_field(data_test: 'example-email') }

    def interact_with_page_objects()
      my_banner.click
      my_link.click
      my_button.click
      text.set('some text')
      raise "Expected: 'some text', Actual: #{text.value}" unless text.value == 'some text'
      phone.set('01268 467890')
      date_time.set('2025-02-02T13:57')
      date.set('2025-02-02')
      week.set('262025')
      month.set('11')
      month.send_keys :tab
      month.set('2025')
      2.times do
        range.send_keys :right
      end
      range.send_keys :left
      file.set("#{Dir.pwd}/features/support/resources/robot_picture.png")
      url.set('www.bbc.co.uk')
      my_search.set('looking for...')
      raise "Expected: 'looking for...', Actual: #{my_search.value}" unless my_search.value == 'looking for...'
      colour.set('#00ff41')
      password.set('my secret')
      raise "Expected: 'my secret', Actual: #{password.value}" unless password.value == 'my secret'
      number.set("12345")
      my_radio.scroll.to
      my_radio.click
      my_radio_2.click
      my_checkbox.check
      my_select.select('Option 3')
      button_double.double_click
      email.set('test@test.com')
    end

    def assert_object_changes
      raise 'Failure - Element still displayed' if my_banner.present?
    end
  end
end
