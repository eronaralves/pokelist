import { useContext } from "react";
import { AppContext } from "@context/AppContext";

// Icons
import { Moon, Lightbulb } from 'phosphor-react-native'

// Styles
import * as S from './styles';

export function ButtonDarkMode() {
  const { handleChangeTheme, isDarkMode } = useContext(AppContext)

  return (
    <S.ContainerButton 
      onPress={handleChangeTheme}
      isDarkMode={isDarkMode}
    >
      {isDarkMode ? <Lightbulb color="#ffdb58" weight="fill" /> : <Moon color="#f2f2f2" weight="fill" /> }
    </S.ContainerButton>
  )
}