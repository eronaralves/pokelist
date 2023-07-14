import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface ContainerButtonProps {
  isDarkMode: boolean;
}

export const ContainerButton = styled(TouchableOpacity)<ContainerButtonProps>`
  width: 60px;
  height: 60px;
  
  align-items: center;
  justify-content: center;
  z-index: 2;

  padding: 18px 5px;
  border-radius: 50%;
  background:  #6650BC;
`;