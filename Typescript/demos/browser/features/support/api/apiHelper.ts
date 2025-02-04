import axios from 'axios';
import {testEvolve} from "@testevolve/testevolve-spark";

interface Article {
  title: string;
  start_year?: string;
  holding_type?: string[];
  url?: string;
};

interface ApiResponse {
  items?: Article[];
};

export const findArticles = async (searchTerm: string = "new orleans"): Promise<ApiResponse> => {
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  try {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${searchTerm}&format=json`,
      headers: headers
    };

    const response = await axios.request<ApiResponse>(config);
    testEvolve.log.info('API RESPONSE CODE: ', response.status);
    const data = response.data;
    testEvolve.log.info('API RESPONSE BODY: ', data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export const assertResultsMatch = (responseData: ApiResponse, searchTerm: string): void => {
  const normalise = (str: string): string =>
    str.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();

  const normalisedSearchTerm = normalise(searchTerm);

  if (!responseData.items || !Array.isArray(responseData.items)) {
    throw new Error('Invalid response data: "items" array not found.');
  }

  const failingItems = responseData.items.filter((item) => {
    const normalisedTitle = normalise(item.title);
    return !normalisedTitle.includes(normalisedSearchTerm);
  });

  if (failingItems.length > 0) {
    const failingTitles = failingItems
      .map((item) => `- ${item.title}`)
      .join('\n');
    throw new Error(
      `The following titles do not contain the search term "${searchTerm}":\n${failingTitles}`
    );
  }
};

export const exampleDataOutputsFromResponse = (responseData: ApiResponse): void => {
  if (!responseData.items || responseData.items.length === 0) {
    testEvolve.log.warn("No articles found in response.");
    return;
  }

  if (responseData.items[0]) {
    testEvolve.log.info('Extract the first object: ', responseData.items[0]);
    testEvolve.log.info('Extract the "start_year" of the first object: ', responseData.items[0].start_year);
    testEvolve.log.info('Extract the first "holding_type" of the first object: ', responseData.items[0].holding_type?.[0]);
  }

  if (responseData.items[1]) {
    testEvolve.log.info('Extract the second object: ', responseData.items[1]);
  }

  if (responseData.items[2]) {
    testEvolve.log.info('Extract the "url" of the third object: ', responseData.items[2].url);
    testEvolve.log.info('Extract the second "holding_type" of the third object: ', responseData.items[2].holding_type?.[1]);
  }
};