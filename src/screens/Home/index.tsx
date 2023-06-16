import { useEffect, useState } from 'react';
import { FlatList, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Images
import PokeBall from '../../assets/images/Pokeball.png';

// Styles
import * as S from './styles';

// Components
import { CardPokemon, PokemonCard, TypesPokemonProps } from '@components/CardPokemon';
import { Input } from '@components/Input';

// PokeApi
import PokeApi from 'pokeapi-typescript';


export function Home() {
  const [pokemons, setPokemons] = useState<PokemonCard[]>([]);
  const [searchPokemon, setSearchPokemon] = useState('');

  const navigation = useNavigation();

  function handleSendToProfile(id: number) {
    navigation.navigate('pokemon', { id })
  }


  async function fecthPokemons() {
    const responsePokemons = await PokeApi.Pokemon.list(60)
    const promises = responsePokemons.results.map(item => PokeApi.Pokemon.resolve(item.name))

    try {
      const responses = await Promise.all(promises)
      const dataDetails = responses.map(item => {
        const pokemon:PokemonCard = {
          id: item.id,
          name: item.name,
          image: item.sprites.other['official-artwork'].front_default,
          numberPokedex: String(item.id),
          types: item.types as TypesPokemonProps[]
        }

        return pokemon
      })

      setPokemons(dataDetails)
    
    } catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fecthPokemons()
  }, [])


  const filterPokemons = pokemons.filter(pokemon => pokemon.name.startsWith(searchPokemon))

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
          onChangeText={setSearchPokemon}
          value={searchPokemon}
        />
      </S.Header>
      <S.Content>
        {pokemons.length > 0 ? (
          <FlatList
            data={filterPokemons}
            keyExtractor={pokemon => pokemon.name}
            renderItem={({ item }) => (
              <CardPokemon 
                data={item}
                onPress={() => handleSendToProfile(item.id)}
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