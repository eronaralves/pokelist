import styled, { css } from "styled-components/native";
import { TypeProps } from "@components/CardPokemon/styles";

// Ultils
import { POKEMON_TYPES } from "../../ultils/typesPokemons";

export const Type = styled.View<TypeProps>`
  height: 30px;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 5px;
  margin-right: 5px;

  border-radius: 3px;
  background-color: ${({ type }) => POKEMON_TYPES[type]?.color };
  
`;

export const TextType = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: 12px;
    color: ${theme.colors.background};
  `}
  text-transform: capitalize;
`;