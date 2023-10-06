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
} from '@chakra-ui/react';

const Bookings = () => {
  const dispatch = useDispatch();
  const userBookings = useSelector((state) => state.bookings.userBookings);

  useEffect(() => {
    dispatch(getMyBookings());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <h1>Mis Reservas</h1>
      <Flex flexWrap="wrap">
        {userBookings.map((booking) => (
          <Card key={booking.id} maxW="sm" m="4">
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Imagen del evento"
              borderRadius="lg"
            />
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">Reserva</Heading>
                <Text>Estado: {booking.status}</Text>
                <Text>Descripción: {booking.description}</Text>
                <Heading size="md">Evento Asociado</Heading>
                <Text>Título del evento: {booking.Event.title}</Text>
                <Text>Fecha del evento: {booking.Event.date}</Text>
                <Text>Ubicación del evento: {booking.Event.location}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <ButtonGroup spacing="2" m="4">
              <Button variant="solid" colorScheme="blue">
                Editar
              </Button>
              <Button variant="ghost" colorScheme="red">
                Cancelar
              </Button>
            </ButtonGroup>
          </Card>
        ))}
      </Flex>
    </div>
  );
};

export default Bookings;
