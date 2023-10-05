import React, { useState } from 'react';
import { Box, Flex, Link, Button, chakra, Image, Avatar } from '@chakra-ui/react';
import logoAll from "../../../assets/logoAll.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userAvatar = '/ruta-de-la-imagen-de-avatar.jpg'; 

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Box bg="#262626" color="white" py={3}>
      <Flex
        ml={10}
        mr={10}
        align="center"
        justifyContent="space-between" 
      >
        <Image src={logoAll} alt="Logo" h={14}/> 
        <Nav isLoggedIn={isLoggedIn} userAvatar={userAvatar} handleLogin={handleLogin} />
      </Flex>
    </Box>
  );
};

const Nav = ({ isLoggedIn, userAvatar, handleLogin }) => {
  return (
    <chakra.nav>
      <Link mr={4}>Eventos</Link>
      {isLoggedIn ? (
        <>
          <Link mr={4}>Contacto</Link>
          <Link mr={4}>Servicios</Link>
          <Link mr={4}>Mis reservas</Link>
          <Avatar size="sm" src={userAvatar} alt="Avatar del usuario" />
        </>
      ) : (
        <Link mr={4}>Sobre nosotros</Link>
      )}

      {isLoggedIn ? null : (
        <Button
          w="100px"
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
          onClick={handleLogin}
        >
          Login
        </Button>
      )}
    </chakra.nav>
  );
};

export default Header;
