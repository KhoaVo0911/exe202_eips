import axios from "axios";

const API_URL = "http://192.168.0.201:2510/api/healthcheck";

const loginApi = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    console.log(response.data)
    return response.data;
    
  } 
  catch (error) {
    throw error.response?.data?.message || error.message;
  }
}

export default loginApi;