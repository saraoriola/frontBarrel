import React from 'react';
import { Box, Heading, Stack, Image, Button, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; 
import logoAll from "../../../assets/logoAll.png"

const GetStarted = () => {
  return (
    <Box
      backgroundColor="#262626"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      color="white"
    >
      <Image src={logoAll} alt="Logo" width="xs"/>
      <Box textAlign="center" mt={8}>
        <Heading fontSize={50} mb={6}>
          ¿Listo para que te ayudemos <br /> a encontrarte en <span style={{ color: '#99F5F2' }}> fotos?</span>
        </Heading>
      </Box>
      <Stack direction="row" spacing={4} align="center" mt={6}>
        <Link to="/register">
          <Button
            w="200px"
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
            Registrate
          </Button>
        </Link>
        <ChakraLink as={Link} to="/login" textDecoration='none'>
          <Button
            w="200px"
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
            Login
          </Button>
        </ChakraLink>
      </Stack>
    </Box>
  );
};

export default GetStarted;
