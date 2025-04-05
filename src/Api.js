import axios from "axios";

export const API_URL = 'http://54.174.64.250:8000';

const getAccessToken = () => localStorage.getItem('accessToken');

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('accessToken', token);
    apiClient.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem('accessToken');
    delete apiClient.defaults.headers.Authorization
  }
};

export const logout = () => {
  setAuthToken(null);
};

const token = getAccessToken();
if (token) {
  apiClient.defaults.headers.Authorization = `Bearer ${token}`;
  console.log("Token loaded from localStorage on app init",token);
}


export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data; 
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    return error; 
  }
};


export const addmedia = async (websiteData) => {
  try {
    const response = await axios.post(`${API_URL}/admin-data`, websiteData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,

      },
    });
    console.log(localStorage.getItem("token"));
    return response.data;
    
  } catch (error) {
    console.error("Error adding addmedia:", error.response?.data || error.message);
    return error;
  }
};