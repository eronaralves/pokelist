// Styles
import * as S from './styles';

// Ultils
import { POKEMON_TYPES } from '../../ultils/typesPokemons';

// Components
import { TypeProps } from '@components/CardPokemon/styles';

// Interfaces
interface TagTypeProps extends TypeProps {
  hasText?: boolean;
}

export function TagType({ type, hasText = true }: TagTypeProps) {
  return (
    <S.Type type={type}>
       {POKEMON_TYPES[type]?.icon}
       {hasText && <S.TextType>{type}</S.TextType>}
    </S.Type>
  )
}