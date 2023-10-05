import React, { useEffect } from 'react';
import { createBooking } from '../../features/bookings/bookingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from '@chakra-ui/react'; 

const Booking = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleReserveClick = async () => {
    try {
      console.log('Comenzando la solicitud de reserva...');
      
      // Aquí puedes agregar un log para mostrar el eventId antes de la solicitud
      console.log('Event ID:', id);

      // Realiza la solicitud de reserva
      await dispatch(createBooking(id));

      // Si la solicitud es exitosa, muestra un mensaje de éxito
      console.log('Solicitud de reserva exitosa.');
    } catch (error) {
      // Si hay un error, muestra un mensaje de error
      console.error('Error al crear la reserva:', error);
    }
  };
  

  const { isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      // Muestra un log y mensaje de error si isError es true
      console.error('Hubo un error:', message);
    }

    if (isSuccess) {
      // Muestra un log y mensaje de éxito si isSuccess es true
      console.log('Éxito:', message);
    }
  }, [isError, isSuccess]);

  return (
    <Button
      w="150px"
      bg="transparent"
      borderRadius="full"
      borderColor="#99F5F2"
      borderWidth="2px"
      color="white"
      _hover={{
        borderColor: '#00FFFF',
        boxShadow: '0 0 8px 0 #00FFFF',
        transition: 'border-color 0.3s ease-out, box-shadow 0.3s ease-out',
      }}
      size="lg"
      mt={4}
      onClick={handleReserveClick}
    >
      Reservar
    </Button>
  );
};

export default Booking;
