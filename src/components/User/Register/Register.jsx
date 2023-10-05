import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, GridItem, VStack, FormControl, FormLabel, Input, Button, Text, Flex, Stack } from '@chakra-ui/react';
import { notification } from 'antd';
import { register, reset } from "../../../features/auth/authSlice";
import { FaApple, FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, lastName, email, password, password2 } = formData;
  const { message, isSuccess, isError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: message,
      });
    }
    if (isError) {
      notification.error({
        message: message,
      });
    }
    dispatch(reset());
  }, [message, isSuccess, isError]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
    } else {
      dispatch(register(formData));
    }
  };

  return (
    <Box bgColor="#262626" color={"white"}>
    <Grid templateColumns="1fr 1fr" gap={4} p={4} height="100vh">
      <GridItem colSpan={1}>
        {/* Contenido de la primera columna */}
      </GridItem>
      <GridItem colSpan={1}>
        <Flex mt={20} justify="center" minH="100vh">
          <VStack spacing={4}>
            <form onSubmit={onSubmit}>
              <FormControl id="name" mb={4}>
                <FormLabel>Nombre</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={name}
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
              <FormControl id="lastName" mb={4}>
                <FormLabel>Apellido</FormLabel>
                <Input
                  type="text"
                  name="lastName"
                  value={lastName}
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
              <FormControl id="password2" mb={4}>
                <FormLabel>Confirmar Contraseña</FormLabel>
                <Input
                  type="password"
                  name="password2"
                  value={password2}
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
              <Button mt={10} type="submit" backgroundColor={"white"} w="100%">
                Registrarse
              </Button>
            </form>
            <Text mt={4} mb={2} fontSize="sm">
              <Link to="/login">¿Tienes una cuenta? Inicia sesión aquí</Link>
            </Text>
            <Text fontSize="sm">Regístrate con:</Text>
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

export default Register;
