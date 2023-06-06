import { useEffect, useState } from 'react';
import { FlatList, Text, ActivityIndicator, View } from 'react-native';

import axios from 'axios';

// Images
import PokeBall from '../../assets/images/Pokeball.png'

// Styles
import * as S from './styles';

// Components
import { CardPokemon, CardPokemonProps } from '@components/CardPokemon';
import { Input } from '@components/Input';


export function Home() {
  const [pokemons, setPokemons] = useState<CardPokemonProps[]>([]);

  async function fecthPokemons() {
    let endpoints = []
    for(var pokemonId = 1; pokemonId <= 30; pokemonId++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    }

    const detailsPokemons = await axios.all(endpoints.map(endpoint => axios.get(endpoint)))

    const pokemonWithDetails = detailsPokemons.map(item => {
      const pokemon:CardPokemonProps = {
        name: item.data.name,
        image: item.data.sprites.other['official-artwork'].front_default,
        numberPokedex: String(item.data.id),
        types: item.data.types
      }

      setPokemons(state => [...state, pokemon])
    })

    return pokemonWithDetails;
  }

  useEffect(() => {
    fecthPokemons()
  }, [])


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
        {pokemons.length > 0 ? (
          <FlatList
            data={pokemons}
            keyExtractor={pokemon => pokemon.name}
            renderItem={({ item }) => (
              <CardPokemon 
                name={item.name}
                numberPokedex={item.numberPokedex}
                image={item.image}
                types={item.types}
              />
            )}
            ListEmptyComponent={() => (
              <Text>Nenhum pokemon encontrado!</Text>
            )}
            contentContainerStyle={
              pokemons.length > 0 ?
              {
                paddingTop: 20,
                paddingBottom: 100,
              } :
              {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }
            }
            showsVerticalScrollIndicator={false}
          />
        ): (
          <S.ContainerLoading>
            <ActivityIndicator />
          </S.ContainerLoading>
        )}
        
      </S.Content>
    </S.Container>
  );
}