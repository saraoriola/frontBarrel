import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; 
import { createBooking } from '../../features/bookings/bookingsSlice'; 
import { Button } from '@chakra-ui/react';

const Booking = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleReserveClick = async () => {
    if (typeof id === 'string' && !isNaN(Number(id))) { 
      try {
        await dispatch(createBooking(Number(id))); 
        navigate('/myBookings');
      } catch (error) {
        console.error('Error al crear la reserva:', error);
      }
    } else {
      console.error('ID de evento no válido:', id);
    }
  };
  
  const { isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) console.error('Hubo un error:', message);
    if (isSuccess) console.log('Éxito:', message);
  }, [isError, isSuccess]);

  return (
    <Button w="150px" bg="transparent" borderRadius="full" borderColor="#99F5F2" borderWidth="2px" color="white" _hover={{ borderColor: '#00FFFF', boxShadow: '0 0 8px 0 #00FFFF', transition: 'border-color 0.3s ease-out, box-shadow 0.3s ease-out' }} size="lg" mt={4} onClick={handleReserveClick}>
      Reservar
    </Button>
  );
};

export default Booking;

