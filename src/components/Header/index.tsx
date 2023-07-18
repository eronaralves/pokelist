import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AppContext } from '@context/AppContext';

// Images
import PokeBall from '@assets/images/Pokeball.png';
import EuaIcon from '@assets/images/eua-icon.png';
import BrasilIcon from '@assets/images/brasil-icon.png';

// Components
import { ButtonDarkMode } from '@components/ButtonDarkMode';

// Styles
import * as S from './styles';

// Interfaces
interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const { i18n } = useTranslation()
  const { isDarkMode } = useContext(AppContext)

  function handleChangeLanguage() {
    if(i18n.language === 'pt') {
      return i18n.changeLanguage('en')
    }
    return i18n.changeLanguage('pt')
  }

  return (
    <S.Header>
      <S.HeadingIcons>
        <S.ButtonIconLaguage onPress={() => handleChangeLanguage()}>
          <S.ImageIconLaguage source={i18n.language === 'pt' ? BrasilIcon : EuaIcon} />
          <S.TextLaguage>{i18n.language === 'pt' ? 'PT' : 'EN'}</S.TextLaguage>
        </S.ButtonIconLaguage>
        <ButtonDarkMode />
      </S.HeadingIcons>
      {!isDarkMode && (
        <S.ImageHeaderBackground
          source={PokeBall}
          resizeMethod="resize"
        />
      )}
      <S.Title>{title}</S.Title>
      <S.Description>{subtitle}</S.Description>
    </S.Header> 
  )
}