import axios from 'axios';

const API_URL = "http://localhost:3001";

const createBooking = async (id, token) => {
  try {
    const response = await axios.post(`${API_URL}/bookings/createBooking/${id}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

const bookingsService = {
  createBooking,
};

export default bookingsService;
