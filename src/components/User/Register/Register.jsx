import React, { useEffect, useState } from "react";
import { useDispatch, useSelector,  } from "react-redux";
import { Box, Flex, Image, VStack, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import { notification } from 'antd';
import { register, reset } from "../../../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
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
    <Flex align="center" justify="center" minH="100vh">
      <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md" w="400px">
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
      </Box>
    </Flex>
  );
};

export default Register;
