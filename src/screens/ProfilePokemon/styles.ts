import { TypeProps } from "@components/CardPokemon/styles";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

// Ultils
import { POKEMON_TYPES } from "@ultils/typesPokemons";

// Interfaces
interface TabProps {
  isSelect: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
`;

export const Header = styled.View<TypeProps>`
  height: 40%;
  
  padding: 0px 15px;
  background-color: ${({ type }) => POKEMON_TYPES[type]?.background };
`;

export const ContainerInfoHeader = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 25px;

  padding: 0px 0px 0px 15px;
`

export const ImagePokemon = styled.Image`
  width: 125px;
  height: 125px;
`;

export const ContentInfo = styled.View`
  flex: 1;
  height: 100px;
`;

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
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const BoxTab = styled(TouchableOpacity)`
  flex: 1;
  height: 50px;
  
  justify-content: center;
  align-items: center;
`;

export const TextTab = styled.Text<TabProps>`
  text-align: center;
  text-transform: capitalize;

  ${({ theme, isSelect }) => css`
    font-family: ${isSelect ? theme.font_family.bold : theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.background};
  `}
`;

export const ImageBackgroundTab = styled.Image`
  width: 100px;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50px);
`;

export const ContainerCharacteristics = styled.View<TypeProps>`
  height: 100%;
  width: 100%;
  flex: 1;
  background-color: ${({ type }) => POKEMON_TYPES[type]?.background}; 
`;

export const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background: ${({ theme }) => theme.colors.background};
  `;

export const ContentCharacteristics = styled.View`
  padding: 35px 25px;
`;


export const SectionCharacteristics = styled.View`
  flex: 1;
  gap: 15px;
  margin-bottom: 30px;
  
`;

export const TitleSection = styled(Text)<TypeProps>`
  margin-bottom: 6px;
  ${({ theme, type }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.md}px;
    color: ${type ? POKEMON_TYPES[type]?.background : "#000"};
  `}
`;

export const BoxCharacteristic = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TypeWeaknesses = styled.View<TypeProps>`
  padding: 5px;
  margin-right: 10px;
  border-radius: 3px;
  background-color: ${({ type }) => POKEMON_TYPES[type]?.background};
`;

export const LabelCharacteristic = styled.Text`
  width: 85px;

  ${({ theme }) => css`
    font-family: ${theme.font_family.medium};
    font-size: ${theme.font_size.ssm}px;
    color: ${theme.colors.heading};
  `}
`;

export const Characteristic = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.text};
  `}
`;

export const IconArrowLeft = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 25,
  color: theme.colors.background,
}))`
  margin: 35px 0 0 10px;
`