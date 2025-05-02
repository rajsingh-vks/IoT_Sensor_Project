import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users/signup';

export const signupUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};