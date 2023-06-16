import { TypeProps } from "@components/CardPokemon/styles";
import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

// Ultils
import { POKEMON_TYPES } from "../../ultils/typesPokemons";

export const Container = styled((SafeAreaView))`
  flex: 1;
`;

export const Header = styled.View<TypeProps>`
  height: 40%;
  padding: 19px;
  position: relative;
  overflow: hidden;
  background-color: ${({ type }) => POKEMON_TYPES[type]?.background };
`;

// export const TextBackground = styled.Text`
//   ${({ theme }) => css`
//     font-family: ${theme.font_family.bold};
//     font-size: 100px; 
//     color: ${theme.colors.background};  
//   `}

//   height: 130px;
//   text-transform: uppercase;
// `

export const ContainerInfoHeader = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 25px;
`

export const ImagePokemon = styled.Image`
  width: 125px;
  height: 125px;
`

export const ContentInfo = styled.View`
  flex: 1;
`

export const NumberPokedex = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.heading};
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size["3xl"]}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.background};
  `}

  margin-bottom: 5px;
  text-transform: capitalize;
`;

export const ContainerTabs = styled.View`
  
`;

export const Tab = styled.View`
  
`;

export const IconArrowLeft = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 25,
  color: theme.colors.background
}))`
  margin: 10px 0 0 10px;
`