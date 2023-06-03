import styled from "styled-components/native";
import { css } from "styled-components/native";

export const HeaderContainer = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;

  margin-top: 40px;
  margin-bottom: 40px;
`;

export const LogoText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.xl}px;
    color: ${theme.colors.heading};
  `}
`;