import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'


export const Container = styled(SafeAreaView)`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.ImageBackground`
  position: relative;
  padding: 0px 20px 0px 20px;
  margin-bottom: 30px;
`;

export const HeadingIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

export const ButtonIconLaguage = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const ImageIconLaguage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const TextLaguage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.heading};
  `}
`;

export const ImageHeaderBackground = styled.Image`
  position: absolute;
  top: 0;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0px 20px 0px 20px;
`;

export const TextListEmpty = styled.Text`
  text-align: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size['3xl']}px;
    color: ${theme.colors.heading};
  `};

  margin-bottom: 10px;
  margin-top: 50px;
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