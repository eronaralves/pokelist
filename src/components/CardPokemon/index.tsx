import { FlatList } from 'react-native';

// Images
import DetailsPattern from '../../assets/images/Pattern.png';
import PokeballCard from '../../assets/images/pokeball-card.png';

// Styles
import * as S from './styles';

// Ultils
import { POKEMON_TYPES } from '../../ultils/types';

// Interfaces


export interface CardPokemonProps {
  name: string;
  numberPokedex?: string;
  image: string;
  types: {
    slot: number;
    type: {
      name: keyof typeof POKEMON_TYPES;
      url: string;
    }
  }[]
}

export function CardPokemon({ name, numberPokedex, image, types }: CardPokemonProps) {
  const typeMain = types[0].type
  const numberPorkedexAjusted = numberPokedex?.padStart(3, '0')

  return (
    <S.Container type={typeMain.name}>
      <S.DetailsPatterns
        source={DetailsPattern}
      />
      <S.Informations>
        <S.NumberPokedex>
          #{numberPorkedexAjusted}
        </S.NumberPokedex>
        <S.Name>
          {name}
        </S.Name>
        <FlatList
          data={types}
          keyExtractor={item => item.type.name}
          renderItem={({ item }) => (
            <S.Type type={item.type.name}>
              {POKEMON_TYPES[item.type.name]?.icon}
              <S.TextType>{item.type.name}</S.TextType>
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