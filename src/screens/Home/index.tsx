import { useState } from 'react';
import { FlatList, Text } from 'react-native';

// Images
import PokeBall from '../../assets/images/Pokeball.png'

// Styles
import * as S from './styles';

// Components
import { CardPokemon, CardPokemonProps } from '@components/CardPokemon';
import { Input } from '@components/Input';


export function Home() {
  const [pokemons, setPokemons] = useState<CardPokemonProps[]>([]);

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
      <S.Content>
        <FlatList
            data={pokemons}
            keyExtractor={pokemon => pokemon.numberPokedex}
            renderItem={({ item }) => (
              <CardPokemon 
                name={item.name}
                numberPokedex={item.numberPokedex}
                image={item.image}
                types={item.types}
              />
            )}
            ListEmptyComponent={() => (
              <Text>Nada encotrado!</Text>
            )}
            contentContainerStyle={
              pokemons.length > 0 ?
              {
                marginTop: 30,
                paddingTop: 20,
                paddingBottom: 100
              } :
              {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }
            }
            showsVerticalScrollIndicator={false}
          />
      </S.Content>
    </S.Container>
  );
}