import { FlatList, TouchableOpacityProps } from 'react-native';

// Images
import DetailsPattern from '../../assets/images/Pattern.png';
import PokeballCard from '../../assets/images/pokeball-card.png';

// Styles
import * as S from './styles';

// Ultils
import { POKEMON_TYPES } from '../../ultils/typesPokemons';

// Interfaces
export interface TypesPokemonProps {
  slot: number;
  type: {
    name: keyof typeof POKEMON_TYPES;
    url: string;
  }
}[]


export interface PokemonCard {
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
  const numberPorkedexAjusted = String(data.numberPokedex).padStart(3, '0')
  
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
            <S.Type type={item.type.name}>
              {POKEMON_TYPES[item.type.name]?.icon}
              <S.TextType>{item.type.name}</S.TextType>
            </S.Type>
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