import React from 'react';
import { Avatar, AvatarBadge, Box, Button, CardBody, CardFooter, CardHeader, Flex, Grid, GridItem, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
import evento from "../../assets/evento.png";
import Badges from './Badges';
import Header from '../Layout/Header/Header';
import { useSelector } from 'react-redux';
import Events from '../Events/Events';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      <Box fontSize="xl">
        {user && <Text fontSize="3xl" fontWeight="black" ml={10} mt={5}>¡Hola, {user.name}!</Text>}
        <Grid templateColumns="70% 30%" ml={10} mt={5}>
          <GridItem colSpan={1}>
            <Box height="100%">
              <Card width="1150px" height="95%" backgroundImage={`linear-gradient(transparent, rgba(0,0,0,0.8)), url(${evento})`} backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" borderRadius={"20"} direction="column" overflow='hidden' variant='outline'>
                <CardHeader>
                  <Flex spacing='2' alignItems='center'>
                    <Avatar size='md' name='P C' />
                  </Flex>
                </CardHeader>
                <CardBody></CardBody>
                <CardFooter justifyContent="flex-start">
                  <Box display="flex" flexDirection="column" alignItems="flex-start">
                    <Text fontSize='2xl' color="white">Evento de Muestra</Text>
                    <Flex alignItems="center" mt={3}>
                      <FaMapMarkerAlt style={{ color: 'white' }}/> 
                      <Text  ml={2} fontSize='md' color="white">Ciudad de Muestra</Text>
                    </Flex>
                  </Box>
                </CardFooter>
              </Card>
            </Box>
          </GridItem>
          <GridItem colSpan={1} ml={5} mr={5}>
            <Box
              bgColor={"#262626"}
              borderRadius={20}
              height="34vh"
              display="flex"
              flexDirection="column"
              alignItems="center" 
              justifyContent="center"
            >
<Avatar size='xl' name='P C' src='https://bit.ly/code-beast' />

              <Text fontSize="lg" color="white" mt={2}>
                {user.name} {user.surname}
              </Text>
              <Text fontSize="lg" color="white">
                {user.email}
              </Text>
              <Button
                mt={10}
                ml={4}
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
              >
                Ir a mi perfil
              </Button>
            </Box>
            <Box mt={5}>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Box ml={6}>

      <Text fontSize="xl" fontWeight="black" >Galerías más populares</Text>
              <Box mt={2}><Badges /></Box>
              <Box mt={5}><Events/></Box>

      </Box>
    </>
  );
};

export default Home;
