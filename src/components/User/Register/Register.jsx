import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, GridItem, VStack, FormControl, FormLabel, Input, Button, Text, Flex } from '@chakra-ui/react';
import { notification } from 'antd';
import { register, reset } from "../../../features/auth/authSlice";

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
    <Grid templateColumns="1fr 1fr" gap={4} p={4} height="100vh">
      <GridItem colSpan={1}>
        {/* Contenido de la primera parte (50%) */}
        {/* Puedes agregar cualquier contenido aquí */}
      </GridItem>
      <GridItem colSpan={1}>
        {/* Contenido de la segunda parte (50%) */}
        <Flex align="center" justify="center" minH="100vh">
            <VStack spacing={4}>
              <Text fontSize="xl">Registro</Text>
              <form onSubmit={onSubmit}>
                <FormControl id="name">
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    required
                  />
                </FormControl>
                <FormControl id="lastName">
                  <FormLabel>Apellido</FormLabel>
                  <Input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={onChange}
                    required
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Correo Electrónico</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Contraseña</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                </FormControl>
                <FormControl id="password2">
                  <FormLabel>Confirmar Contraseña</FormLabel>
                  <Input
                    type="password"
                    name="password2"
                    value={password2}
                    onChange={onChange}
                    required
                  />
                </FormControl>
                <Button type="submit" colorScheme="blue" w="100%">
                  Registrarse
                </Button>
              </form>
            </VStack>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Register;
