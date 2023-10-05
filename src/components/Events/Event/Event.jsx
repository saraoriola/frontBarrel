import React, { useEffect } from 'react';
import { Box, Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Text } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllEvents } from '../../../features/events/eventsSlice';

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
            <Text fontSize='xs'>{event.description}</Text>
          </CardBody>
          <CardFooter justify='space-between' flexWrap='wrap'>
            <Box display="flex" flexDirection="column">
              <Text fontSize='md'>{event.title}</Text>
              <Text fontSize='xs'>{event.location}</Text>
            </Box>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
}

export default Event;
