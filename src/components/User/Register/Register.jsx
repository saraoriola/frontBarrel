import React from 'react';
import { Box, Flex, Image, VStack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const Register = () => {
  return (
    <Flex height="100vh" bgColor={"#262626"}>
      {/* Box de la imagen a la izquierda */}
      <Box flex="1" backgroundImage="url(tu_ruta_de_imagen.jpg)" backgroundSize="cover">
        {/* Contenido de la imagen */}
        <VStack p="20px" color="white">
          <h1>Imagen</h1>
          <p>Texto o contenido de la imagen</p>
        </VStack>
      </Box>

      {/* Box de registro a la derecha */}
      <Box flex="1" background="#f2f2f2" display="flex" alignItems="center">
        {/* Contenido del registro */}
        <VStack p="20px" >
          <h1>Registro</h1>
          <form>
            <FormControl id="name" isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input type="text" placeholder="Tu nombre" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Correo Electrónico</FormLabel>
              <Input type="email" placeholder="tucorreo@example.com" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" placeholder="Contraseña" />
            </FormControl>
            <Button colorScheme="blue" type="submit" mt={4}>
              Registrarse
            </Button>
          </form>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Register;
