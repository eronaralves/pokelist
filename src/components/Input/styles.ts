import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import { MagnifyingGlass } from 'phosphor-react-native'

export const Container = styled.View`
  width: 100%;
  height: 60px;
  
  flex-direction: row;
  align-items: center;
  padding: 0px 25px;

  background-color: ${({ theme }) => theme.colors.input};
`;

export const Icon = styled(MagnifyingGlass).attrs(({ theme }) => ({
  size: 20,
  color: theme.colors.text

}))`
  margin-right: 10px;
`;


export const Input = styled(TextInput)`
  height: 100%;
  width: 100%;
  
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.text};
    background-color: ${theme.colors.input};
  `};
`;