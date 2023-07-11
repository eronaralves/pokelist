import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

// Ultils
import { POKEMON_TYPES } from "../../ultils/typesPokemons";

// Icons
import { Leaf } from "phosphor-react-native";

// Interfaces
export interface TypesProps {
  type: keyof typeof POKEMON_TYPES;
};


export const Container = styled(TouchableOpacity)<TypesProps>`
  flex-direction: row;
  justify-content: space-between;

  position: relative;

  padding: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: ${({ type }) => POKEMON_TYPES[type]?.background };
`;

export const DetailsPatterns = styled.Image`
  width: 74px;
  position: absolute;
  top: 5px;
  left: 90px;
  
`;

export const BackgroundDetailsPatterns = styled.ImageBackground`
  flex: 1;
`;

export const Informations = styled.View`
  flex: 1;
`;

export const NumberPokedex = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.heading};
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size["2xl"]}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.background};
  `}

  margin-bottom: 5px;
  text-transform: capitalize;
`;

export const Type = styled.View<TypesProps>`
  flex-direction: row;
  align-items: center;
  gap: 5px;
  padding: 5px;
  margin-right: 5px;

  border-radius: 3px;
  background-color: ${({ type }) => POKEMON_TYPES[type]?.color };
  
`;

export const IconLeaf = styled(Leaf).attrs(({ theme }) => ({
  size: 20,
  weight: 'fill',
  color: theme.colors.background
}))``;

export const TextType = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: 12px;
    color: ${theme.colors.background};
  `}
  text-transform: capitalize;
`;

export const PokeballCard = styled.Image`
  position: absolute;
  right: 0;
  z-index: -1;
`;

export const ImagePokemon = styled.Image`
  width: 130px;
  height: 130px;
  
  object-fit: cover;
  position: absolute;
  right: 10px;
  top: -25px;
`;