import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyBookings } from '../../../features/bookings/bookingsSlice';
import Header from '../../Layout/Header/Header';
import {
  Flex,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Divider,
  useToast,
} from '@chakra-ui/react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Importa los iconos
import CancelBooking from './CancelBooking/CancelBooking';
import logo from "../../../assets/eventotech.jpg";

const Bookings = () => {
  const dispatch = useDispatch();
  const userBookings = useSelector((state) => state.bookings.userBookings);

  useEffect(() => {
    dispatch(getMyBookings());
  }, [dispatch]);

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
    <div style={{ background: '#262626', minHeight: '100vh', color: 'white' }}>
      <Header />
      <Text fontSize="3xl" fontWeight="black" ml={10} mt={5}>
        Mis reservas
      </Text>
      <Flex flexWrap="wrap" ml={8} mt={5}>
        {userBookings.map((booking) => {
          console.log("booking.id:", booking.id);
          return (
            <Card key={booking.id} maxW="sm" m="4">
              <Image
                src={logo}
                alt="Imagen del evento"
                borderRadius="lg"
                m={5}
              />
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Heading size="md">Reserva</Heading>
                  <Text>Estado: {booking.status}</Text>
                  <Text>{booking.Event.title}</Text>
                  <Stack direction="row" align="center">
                    <FaCalendarAlt /> 
                    <Text>{new Date(booking.Event.date).toLocaleDateString()}</Text> 
                  </Stack>
                  <Stack direction="row" align="center">
                    <FaMapMarkerAlt /> 
                    <Text>{booking.Event.location}</Text>
                  </Stack>
                </Stack>
              </CardBody>
              <Divider />
              <ButtonGroup spacing="2" m="4" mx="auto">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  w="150px"
                  bg="transparent"
                  borderRadius="full"
                  borderColor="#99F5F2"
                  borderWidth="2px"
                  color="black"
                  _hover={{
                    borderColor: '#00FFFF',
                    boxShadow: '0 0 8px 0 #00FFFF',
                    transition: 'border-color 0.3s ease-out, box-shadow 0.3s ease-out',
                  }}
                >
                  Editar
                </Button>
                <CancelBooking bookingId={booking.id} />
              </ButtonGroup>
            </Card>
          );
        })}
      </Flex>
    </div>
  );
};

export default Bookings;
