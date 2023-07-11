import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'


export const Container = styled(SafeAreaView)`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.ImageBackground`
  position: relative;
  padding: 100px 20px 0px 20px;
  margin-bottom: 30px;
`;

export const ImageHeaderBackground = styled.Image`
  position: absolute;
  top: 0;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0px 20px 0px 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size['3xl']}px;
    color: ${theme.colors.heading};
  `};

  margin-bottom: 10px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.text};
  `};

  margin-bottom: 25px;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`