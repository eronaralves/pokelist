import React from 'react';

// Styles
import {
  Container,
  Title,
  Description
} from './styles';


export function Home() {
  return (
    <Container>
      <Title>Pokédex</Title>
      <Description>Search for Pokémon by name or using the National Pokédex number.</Description>
    </Container>
  );
}