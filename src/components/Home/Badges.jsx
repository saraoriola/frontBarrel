import React from 'react';
import { Badge, Box } from '@chakra-ui/react';

const Badges = () => {
  const badgeStyles = {
    background: '#262626',
    color: '#99F5F2',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    borderRadius: '20px',
    paddingLeft: '10px',
    paddingRight: '10px',
    marginLeft: '6px',
  };

  return (
    <>
      <Badge style={badgeStyles}>Conciertos</Badge>
      <Badge style={badgeStyles}>Festivales de comida</Badge>
      <Badge style={badgeStyles}>Conferencias</Badge>
      <Badge style={badgeStyles}>Triatlón</Badge>
      <Badge style={badgeStyles}>Motos</Badge>
      <Badge style={badgeStyles}>Parques temáticos</Badge>
      <Badge style={badgeStyles}>Exposiciones</Badge>
      <Badge style={badgeStyles}>Surf</Badge>
    </>
  );
};

export default Badges;
