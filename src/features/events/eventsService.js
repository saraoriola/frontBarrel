import axios from 'axios';
const API_URL = "http://localhost:3001";

export const getAllEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/events/getAllEvents`);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

const eventsService = {
    getAllEvents,
  };
  
  export default eventsService;