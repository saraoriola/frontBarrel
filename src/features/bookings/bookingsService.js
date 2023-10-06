import axios from 'axios';

const API_URL = "http://localhost:3001";

const createBooking = async (eventId) => {
  try {
    const token = JSON.parse(localStorage.getItem('token')); // Asegúrate de tener un token válido
    const response = await axios.post(`${API_URL}/bookings/createBooking/${eventId}`, null, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

const getMyBookings = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await axios.get(`${API_URL}/bookings/`, {
      headers: {
        Authorization: token, 
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};

const bookingsService = {
  createBooking,
  getMyBookings,
};

export default bookingsService;
