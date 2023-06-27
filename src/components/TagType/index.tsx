// Styles
import * as S from './styles';

// Ultils
import { POKEMON_TYPES } from '../../ultils/typesPokemons';

// Components
import { TypeProps } from '@components/CardPokemon/styles';

// Interfaces
interface TagTypeProps extends TypeProps {
  noText?: boolean;
}

export function TagType({ type, noText = false }: TagTypeProps) {
  return (
    <S.Type type={type}>
      {POKEMON_TYPES[type]?.icon}
      {!noText && <S.TextType>{type}</S.TextType>}
    </S.Type>
  )
}