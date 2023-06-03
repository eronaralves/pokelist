
// Images
import PokeBall from '../../assets/images/Pokeball.png'

// Styles
import * as S from './styles';

// Components
import { Input } from '@components/Input';


export function Home() {
  return (
    <S.Container>
      <S.Header
        source={PokeBall}
        resizeMethod='resize'
      >
        <S.Title>Pokédex</S.Title>
        <S.Description>Search for Pokémon by name or using the National Pokédex number.</S.Description>
        <Input 
          placeholder='What Pokémon are you looking for?'
        />
      </S.Header>
    </S.Container>
  );
}