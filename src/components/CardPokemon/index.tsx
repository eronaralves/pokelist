import { FlatList, TouchableOpacityProps } from 'react-native';

// Images
import DetailsPattern from '../../assets/images/Pattern.png';
import PokeballCard from '../../assets/images/pokeball-card.png';

// Styles
import * as S from './styles';

// Ultils
import { POKEMON_TYPES } from '../../ultils/typesPokemons';
import { formatterNumberPokedex } from '../../ultils/formatter';

// Components
import { TagType } from '@components/TagType';

// Interfaces
export interface TypesPokemonProps {
  slot: number;
  type: {
    name: keyof typeof POKEMON_TYPES;
    url: string;
  }
}[]


export interface PokemonCard {
  id: number;
  name: string;
  numberPokedex: string;
  image: string;
  types: TypesPokemonProps[];
}

export interface CardPokemonProps extends TouchableOpacityProps {
  data: PokemonCard
}

export function CardPokemon({ data, ...rest }: CardPokemonProps) {
  const typeMain = data?.types[0].type
  const numberPorkedexAjusted = formatterNumberPokedex(data.id)
  
  return (
    <S.Container type={typeMain.name} {...rest}>
      <S.DetailsPatterns
        source={DetailsPattern}
      />
      <S.Informations>
        <S.NumberPokedex>
          #{numberPorkedexAjusted}
        </S.NumberPokedex>
        <S.Name>
          {data?.name}
        </S.Name>
        <FlatList
          data={data?.types}
          keyExtractor={item => item.type.name}
          renderItem={({ item }) => (
            <TagType 
              key={item.type.name}
              type={item.type.name}
            />
          )}
          horizontal
        />
      </S.Informations>
      
      <S.ImagePokemon 
        source={{uri: data?.image}}
      />

      <S.PokeballCard 
        source={PokeballCard}
      />
    </S.Container>
  )
}