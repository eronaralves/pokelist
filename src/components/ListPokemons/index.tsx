import { useCallback, useEffect, useState } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { debounce } from 'lodash'

// i18n
import { useTranslation } from 'react-i18next'

// Components
import { CardPokemon, PokemonCard, TypesPokemonProps } from '@components/CardPokemon'
import { Input } from '@components/Input'

// Styles
import * as S from './styles'

// PokeApi
import PokeApi from 'pokeapi-typescript';


export function ListPokemons() {
  const [pokemons, setPokemons] = useState<PokemonCard[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonCard[]>(pokemons);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation()
  const { t } = useTranslation()


  function handleSendToProfile(id: number) {
    navigation.navigate('pokemon', { id })
  }

  const handleFilterPokemon = useCallback(
    debounce(value => {
      const filtered = pokemons
        .filter((pokemon) => pokemon.name.startsWith(value) || pokemon.numberPokedex.startsWith(value) )
      
      setFilteredPokemons(filtered);
    }, 300),
    [filteredPokemons],
  );

  function onChangeText(value: string) {
    setSearchPokemon(value);
    handleFilterPokemon(value);
  };

  async function fecthPokemons() {
    const responsePokemons = await PokeApi.Pokemon.list(150)
    const promises = responsePokemons.results.map(item => PokeApi.Pokemon.resolve(item.name))
    
    try {
      setLoading(true)
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

      setPokemons(dataDetails);
      setFilteredPokemons(dataDetails);
      setLoading(false)
    } catch(err){
      console.log(err)
    } 
  }

  useEffect(() => {
    fecthPokemons()
  }, [])

  return (
    <S.Container>
      <Input 
        placeholder={t('header.placeholder')}
        onChangeText={onChangeText}
        value={searchPokemon}
      />
      {!loading ? (
        <FlatList
          data={filteredPokemons}
          keyExtractor={pokemon => pokemon.name}
          renderItem={({ item }) => (
            <CardPokemon 
              data={item}
              onPress={() => handleSendToProfile(item.id)}
            />
          )}
          ListEmptyComponent={() => (
            <S.TextListEmpty>{t('listPokemons.listEmpty')}</S.TextListEmpty>
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
              alignItems: 'center',
              
            }
          }
          showsVerticalScrollIndicator={false}
        />
      ): (
        <S.ContainerLoading>
          <ActivityIndicator />
        </S.ContainerLoading>
      )}
        
    </S.Container>
  )
}