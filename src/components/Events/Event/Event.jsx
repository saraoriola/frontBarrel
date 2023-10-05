import React from 'react';
import { Box, Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Text } from '@chakra-ui/react';

const Event = () => {
  return (
    <Box>
      <Card maxW='xs' p={2} backgroundImage='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
       background="linear-gradient(transparent, rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')">
        <CardHeader>
          <Flex spacing='2' alignItems='center'>
            <Avatar size='md' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            //Aqui quiero un cuadrado que tenga la fecha del evento dentro
          </Flex>
        </CardHeader>
        <CardBody>
          <Text fontSize='sm'>
            With Chakra UI, I wanted to sync the speed of development with the speed

          </Text>
        </CardBody>
        <CardFooter justify='space-between' flexWrap='wrap'>
//aqui title
//localización
        </CardFooter>
      </Card>
    </Box>
  );
}

export default Event;
