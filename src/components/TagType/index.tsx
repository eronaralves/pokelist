// Styles
import * as S from './styles';

// Ultils
import { POKEMON_TYPES } from '@ultils/typesPokemons';

// Components
import { TypeProps } from '@components/CardPokemon/styles';

// I18n
import { useTranslation } from 'react-i18next'

// Interfaces
interface TagTypeProps extends TypeProps {
  noText?: boolean;
}

export function TagType({ type, noText = false }: TagTypeProps) {
  const { t, i18n } = useTranslation()

  return (
    <S.Type type={type}>
      {POKEMON_TYPES[type]?.icon}
      {!noText && <S.TextType>{t(`pokemons.types.${type}`)}</S.TextType>}
    </S.Type>
  )
}