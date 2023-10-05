import React, { useEffect, useState } from 'react';
import { Box, Grid, GridItem, VStack, FormControl, FormLabel, Input, Button, Text, Flex, Stack } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../../features/auth/authSlice';
import { notification } from 'antd';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message, isSuccess, isError } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: message,
      });
      navigate("/");
    }
    if(isError){
        notification.error({
            message:message
        })
    }
    dispatch(reset());
  }, [message, isSuccess,isError]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <Box bgColor="#262626" color="white">
      <Grid templateColumns="1fr 1fr" gap={4} p={4} height="100vh">
        <GridItem colSpan={1}></GridItem>
        <GridItem colSpan={1}>
          <Flex mt={40} justify="center" minH="100vh">
            <VStack spacing={4}>
              <Text fontSize="xl">¡Bienvenido de nuevo!</Text>
              <form onSubmit={onSubmit}>
                <FormControl id="email" mb={4}>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                    w="600px"
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
                  />
                </FormControl>
                <FormControl id="password" mb={4}>
                  <FormLabel>Contraseña</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                    w="600px"
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
                  />
                </FormControl>
                <Button mt={6} type="submit" backgroundColor={'white'} w="100%">
                  Iniciar Sesión
                </Button>
              </form>
              <Text mt={4} mb={2} fontSize="sm">
                <Link to="/register">¿No tienes una cuenta? Regístrate aquí</Link>
              </Text>
              <Text fontSize="sm">O inicia sesión con:</Text>
              <Stack direction="row" spacing={2} align="center">
                <Button mt={2} mb={2} color="black" marginLeft={2}>
                  <FaGoogle />
                </Button>
                <Button mt={2} mb={2} color="black" marginLeft={2}>
                  <FaFacebook />
                </Button>
                <Button mt={2} mb={2} color="black" marginLeft={2}>
                  <FaApple />
                </Button>
              </Stack>
            </VStack>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Login;
