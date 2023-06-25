import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const baseUrl = 'https://test.api.amadeus.com/v1/reference-data/locations/cities';
  const clientId = 'mrQePLAWecQKBLX9iAltbiYUiQ9mANnt';
  const clientSecret = 'qmCm4hq8hSIQUADf';

  const getAccessToken = async () => {
    try {
      const response = await axios.post('https://test.api.amadeus.com/v1/security/oauth2/token', {
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret
      });

      return response.data.access_token;
    } catch (error) {
      console.error('Failed to retrieve access token:', error);
      throw error;
    }
  };

  const handleSearch = async () => {
    try {
      const accessToken = await getAccessToken();

      const apiUrl = `${baseUrl}?keyword=${keyword}&max=10`;

      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      setResults(response.data.data);
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  };

  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter a keyword"
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {results.map((result) => (
          <p key={result.id}>
            {result.address.cityName}, {result.address.countryName}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
