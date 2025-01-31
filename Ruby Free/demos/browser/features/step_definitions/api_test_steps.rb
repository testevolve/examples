Given(/^I search for news articles that reference '(.*)'$/) do |search_term|
  @search_term = search_term
  @results = Api.find_articles(search_term: @search_term)
end

Then(/^I receive results that are relevant to my search term$/) do
  if @results
    Api.example_data_outputs_from_response(@results)
    Api.assert_results_match(@results, @search_term)
  end
end
