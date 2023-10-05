import axios from 'axios';
const API_URL = "http://localhost:3001";

const getAllEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/events/getAllEvents`);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

const getEventById = async (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const res = await axios.get(API_URL + "/events/" + id, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
};

const eventsService = {
    getAllEvents,
    getEventById
  };
  
  export default eventsService;