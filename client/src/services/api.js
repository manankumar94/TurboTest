// client/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/speed';

export const getSpeed = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching speed data:', error);
    throw error;
  }
};
