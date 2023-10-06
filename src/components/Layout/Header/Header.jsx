import React from 'react';
import { Box, Flex, Button, chakra, Image, Avatar } from '@chakra-ui/react';
import logoAll from "../../../assets/logoAll.png";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Box bg="#262626" color="white" py={3}>
      <Flex ml={10} mr={10} align="center" justifyContent="space-between">
        <Image src={logoAll} alt="Logo" h={12}/>
        <Nav user={user} />
      </Flex>
    </Box>
  );
};

const Nav = ({ user }) => (
  <>
  
  <Link >Eventos</Link>
  {user ? (
    <>
      <Link >Contacto</Link>
      <Link>Servicios</Link>
      <Link to="/mybookings">
      <Button w="150px" bg="transparent" borderRadius="full" borderColor="#99F5F2" borderWidth="2px" color="white" _hover={{ borderColor: '#00FFFF', boxShadow: '0 0 8px 0 #00FFFF', transition: 'border-color 0.3s ease-out, box-shadow 0.3s ease-out' }}>Mis reservas</Button>
      </Link>
    </>
  ) : (
    <>
      <Link >Sobre nosotros</Link>
      <Link to="/login">Login</Link>
    </>
  )}
  </>
 
);

export default Header;
