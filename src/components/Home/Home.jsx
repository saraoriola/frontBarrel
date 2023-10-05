import React from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';
import evento from "../../assets/evento.png";
import Badges from './Badges';

const Home = () => {
  return (
    <Grid templateColumns="70% 30%" gap={4} p={4} height="100vh">
      <GridItem colSpan={1}>
        <Box height="100%">
        <Card
            width="100%" 
            height="30%" 
            backgroundImage={`linear-gradient(transparent, rgba(0,0,0,0.8)), url(${evento})`}           
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            borderRadius={"20"}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            m={6}
          >
            Contenido de la tarjeta
          </Card>
          <Text ml={6}>Galerías más populares</Text>

          <Box ml={6} mt={2}>
          <Badges/>
          </Box>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        {/* Contenido de la segunda parte (30%) */}
        {/* Agrega aquí el contenido de la segunda parte */}
      </GridItem>
    </Grid>
  );
};

export default Home;
