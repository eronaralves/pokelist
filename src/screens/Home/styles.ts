import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'


export const Container = styled(SafeAreaView)`
  flex: 1;
  padding-right: 40px;
  padding-left: 40px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size['2xl']}px;
    color: ${theme.colors.heading};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.text};
  `};
`;