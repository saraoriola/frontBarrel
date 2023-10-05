import React from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
import evento from "../../assets/evento.png";
import Badges from './Badges';
import Header from '../Layout/Header/Header';
import { useSelector } from 'react-redux';
import Events from '../Events/Events';

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      <Box fontSize="xl">
        {user && 
          <Text fontSize="3xl" fontWeight="black" ml={10} mt={5}>
           ¡Hola, {user.name}!
          </Text>
        }
        <Grid templateColumns="70% 30%" ml={10} mt={5} height="100vh">
          <GridItem colSpan={1}>
            <Box height="100%">
              <Card width="100%" height="30%" backgroundImage={`linear-gradient(transparent, rgba(0,0,0,0.8)), url(${evento})`} backgroundSize="cover" backgroundPosition="center" backgroundRepeat="no-repeat" borderRadius={"20"} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
                <Text fontSize="xl">Contenido de la tarjeta</Text>
              </Card>
              <Text fontSize="xl" fontWeight="black" mt={5}>Galerías más populares</Text>
              <Box mt={2}>
                <Badges />
              </Box>
              <Box mt={5}>
                <Events/>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={1}></GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
