import { FlatList } from 'react-native';

// Images
import DetailsPattern from '../../assets/images/Pattern.png';
import PokeballCard from '../../assets/images/pokeball-card.png';

// Styles
import * as S from './styles';

// Ultils
import { TYPES } from '../../ultils/types';

// Interfaces
export interface CardPokemonProps {
  name: string;
  numberPokedex: string;
  image: string;
  types: {
    name: keyof typeof TYPES;
  }[]
}

export function CardPokemon({ name, numberPokedex, image, types }: CardPokemonProps) {
  const typeMain = types[0]

  return (
    <S.Container type={typeMain.name}>
      <S.DetailsPatterns
        source={DetailsPattern}
      />
      <S.Informations>
        <S.NumberPokedex>
          #{numberPokedex}
        </S.NumberPokedex>
        <S.Name>
          {name}
        </S.Name>
        <FlatList
          data={types}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <S.Type type={item.name}>
              {TYPES[item.name].icon}
              <S.TextType>{item.name}</S.TextType>
            </S.Type>
          )}
          horizontal
        />
      </S.Informations>
      
      <S.ImagePokemon 
        source={{uri: image}}
      />

      <S.PokeballCard 
        source={PokeballCard}
      />
    </S.Container>
  )
}