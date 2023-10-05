import React, { useEffect } from 'react';
import { Box, Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllEvents } from '../../../features/events/eventsSlice';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Event = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  return (
    <Box display="flex" flexWrap="wrap">
      {events.map((event) => (
        <Card
          key={event.id}
          width='300px'
          height='350px'
          p={2}
          backgroundImage={`linear-gradient(transparent, rgba(0, 0, 0, 0.8)), url('${event.imageUrl}')`}
          m={2}  
        >
          <CardHeader>
            <Flex spacing='2' alignItems='center'>
              <Avatar size='md' name='Segun Adebayo' />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text fontSize='xs' color="white">{event.description}</Text>
          </CardBody>
          <CardFooter justify='space-between' flexDir='column'>
            <Text fontSize='md' color="white">{event.title}</Text>
            <Box display='flex' alignItems='center' mt={1}>
              <FaMapMarkerAlt style={{ color: 'white' }} />
              <Text ml={2} fontSize='xs' color="white">{event.location}</Text>
            </Box>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
}

export default Event;
