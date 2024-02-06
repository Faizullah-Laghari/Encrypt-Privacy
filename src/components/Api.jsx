import axios from 'axios';

const fetchTokenAuditData = async (tokenAddress) => {
  try {
    const response = await axios.get(`https://api.gopluslabs.io/api/v1/token_security/${tokenAddress}`, {
      headers: {
        'API-KEY': process.env.REACT_APP_GOPLUSLABS_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching token audit data:', error);
    throw error;
  }
};

export default fetchTokenAuditData;