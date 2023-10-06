import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, useToast } from '@chakra-ui/react';
import { deleteBooking } from '../../../../features/bookings/bookingsSlice';

const CancelBooking = ({ bookingId }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const handleCancelClick = async (e) => {
    console.log("handleCancelClick ejecutado");
    e.preventDefault();
    console.log("bookingId:", bookingId);
    if (bookingId) {
      console.log("bookingId es válido");
      try {
        await dispatch(deleteBooking(bookingId));
        toast({
          title: 'Reserva cancelada con éxito',
          status: 'success',
          duration: 3000, 
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: 'Error al cancelar la reserva',
          description: error.message || 'Ocurrió un error al cancelar la reserva',
          status: 'error',
          duration: 5000, 
          isClosable: true,
        });
      }
    } else {
      console.log("bookingId es undefined");
    }
  };

  return (
    <Button
      variant="ghost"
      colorScheme="red"
      ml={4}
      w="150px"
      bg="transparent"
      borderRadius="full"
      borderColor='red'
      borderWidth="2px"
      color="black"
      _hover={{
        borderColor: 'red',
        boxShadow: '0 0 8px 0 red',
        transition: 'border-color 0.3s ease-out, box-shadow 0.3s ease-out',
      }}
      onClick={handleCancelClick} 
    >
      Cancelar
    </Button>
  );
}


export default CancelBooking;
