module APIHelper
  require 'rest-client'
  require 'json'

  class << self

    def find_articles(search_term: "new orleans")
      @headers = {
        accept: 'application/json',
        content_type: 'application/json'
      }

      url = "#{"https://chroniclingamerica.loc.gov/search/titles/results/?terms="}#{search_term}&format=json"

      begin
        response = RestClient.get(url, @headers)
        data = JSON.parse(response.body)
        TE.log.info("API RESPONSE CODE: #{response.code}")
        TE.log.info("API RESPONSE BODY: #{data}")
        return data
      rescue RestClient::ExceptionWithResponse => e
        TE.log.error("API Request Failed: #{e.response}")
        raise "API Request Failed: #{e.response}"
      rescue StandardError => e
        TE.log.error("Unexpected Error: #{e.message}")
        raise "Unexpected Error: #{e.message}"
      end
    end

    def assert_results_match(response_data, search_term)
      return unless response_data["items"].is_a?(Array)

      normalised_search_term = normalise(search_term)

      failing_items = response_data["items"].reject do |item|
        normalise(item["title"]).include?(normalised_search_term)
      end

      unless failing_items.empty?
        failing_titles = failing_items.map { |item| "- #{item['title']}" }.join("\n")
        raise "The following titles do not contain the search term '#{search_term}':\n#{failing_titles}"
      end
    end

    def example_data_outputs_from_response(response_data)
      return TE.log.warn("No articles found in response.") if response_data["items"].nil? || response_data["items"].empty?

      if response_data["items"][0]
        TE.log.info("Extract the first object: #{response_data["items"][0]}")
        TE.log.info("Extract the 'start_year' of the first object: #{response_data["items"][0]["start_year"]}")
        TE.log.info("Extract the first 'holding_type' of the first object: #{response_data["items"][0]["holding_type"][0]}")
      end

      if response_data["items"][1]
        TE.log.info("Extract the second object: #{response_data["items"][1]}")
      end

      if response_data["items"][2]
        TE.log.info("Extract the 'url' of the third object: #{response_data["items"][2]["url"]}")
        TE.log.info("Extract the second 'holding_type' of the third object: #{response_data["items"][2]["holding_type"][1]}")
      end
    end

    def normalise(str)
      str.downcase.gsub(/[^a-z0-9\s]/, '').strip
    end
  end
end
