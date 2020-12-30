import axios from "axios";
const baseUrl = "http://localhost:9091/";
const axiosCustomSendFile = async (url, payload) => {
  try {
    const response = await axios.post(`${baseUrl}${url}`, payload, {
      timeout: 1000,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
export default axiosCustomSendFile;
