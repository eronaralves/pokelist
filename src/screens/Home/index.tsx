import { useEffect, useState } from 'react';
import { FlatList, Text, ActivityIndicator, View } from 'react-native';

// Images
import PokeBall from '../../assets/images/Pokeball.png'

// Styles
import * as S from './styles';

// Components
import { CardPokemon, CardPokemonProps } from '@components/CardPokemon';
import { Input } from '@components/Input';

// Axios
import { api } from '../../lib/axios';


export function Home() {
  const [pokemons, setPokemons] = useState<CardPokemonProps[]>([]);

  async function fecthPokemons() {
    const response = await api.get('pokemon')
    const data = await response.data

    const listPokemons = data.results.map(async (item: any) => {
      const responsePokemonDetails = await api.get(`pokemon/${item.name}`)
      const details = await responsePokemonDetails.data

      const pokemon:CardPokemonProps = {
        name: details.name,
        image: details.sprites.other['official-artwork'].front_default,
        numberPokedex: String(details.id),
        types: details.types
      }
      
      return setPokemons(state => [...state, pokemon])
    })

    return listPokemons
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