import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventById } from "../../../features/events/eventsSlice";
import { Box, Text, Heading, Center, HStack, Icon } from "@chakra-ui/react";
import { FiUsers, FiCalendar, FiInfo } from "react-icons/fi";
import eventoBackground from "../../../assets/eventdet.jpg";
import Header from "../../Layout/Header/Header";
import Booking from "../../Bookings/Booking";

const EventDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { event, isLoading } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getEventById(id));
  }, [id, dispatch]);

  if (isLoading) return <Center height="100vh">Cargando...</Center>;
  if (!event) return <Center height="100vh">No se pudo cargar el evento.</Center>;

  return (
    <Box bg={"#f2f2f2"}>
      <Header />
      <Center
        backgroundImage={`linear-gradient(transparent, rgba(0, 0, 0, 0.8)), url(${eventoBackground})`} backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" width="100%"  height="70vh" color="white" flexDirection="column" textAlign="center" borderBottomLeftRadius="60px" borderBottomRightRadius="60px"
      >
        <Box p={5}>
          <Heading as="h1" size="xl">{event.title}</Heading>
          <Text fontSize="lg">{event.location}</Text>
          <Text mt={4}>{event.description}</Text>
        </Box>
        <Booking />
      </Center>
      <HStack spacing={6} mt={6} ml={20} mr={20}>
        <Box flex="1" textAlign="center" borderWidth="1px" borderRadius="lg" borderColor="#262626" p={3} bgColor={"white"}>
          <Icon as={FiUsers} boxSize={8} mx="auto" mb={2} />
          <Heading size="md">Asistentes</Heading>
          <Text fontSize="lg">200+</Text>
        </Box>
        <Box flex="1" textAlign="center" borderWidth="1px" borderRadius="lg" borderColor="#262626" p={3} bgColor={"white"}>
          <Icon as={FiCalendar} boxSize={8} mx="auto" mb={2} />
          <Heading size="md">Fecha</Heading>
          <Text fontSize="lg">{event.date}</Text>
        </Box>
        <Box flex="1" textAlign="center" borderWidth="1px" borderRadius="lg" borderColor="#262626" p={3} bgColor={"white"}>
          <Icon as={FiInfo} boxSize={8} mx="auto" mb={2} />
          <Heading size="md">Información Adicional</Heading>
          <Text fontSize="lg">Detalles adicionales aquí.</Text>
        </Box>
        <Box flex="1" textAlign="center" borderWidth="1px" borderRadius="lg" borderColor="#262626" p={3} bgColor={"white"}>
          <Icon as={FiInfo} boxSize={8} mx="auto" mb={2} />
          <Heading size="md">Detalles Inventados</Heading>
          <Text fontSize="lg">Texto inventado.</Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default EventDetail;
