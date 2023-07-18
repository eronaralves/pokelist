import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'


export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 0px 20px 0px 20px;
`;