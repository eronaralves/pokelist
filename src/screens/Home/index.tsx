
import { useEffect, useState, useCallback, useContext } from 'react';
import {
  FlatList,
  Text,
  ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AppContext } from '@context/AppContext';
import { debounce } from "lodash";

// I18n
import { useTranslation } from 'react-i18next'

// Images
import PokeBall from '@assets/images/Pokeball.png';

// Styles
import * as S from './styles';

// Components
import { CardPokemon, PokemonCard, TypesPokemonProps } from '@components/CardPokemon';
import { ButtonDarkMode } from '@components/ButtonDarkMode';
import { Input } from '@components/Input';

// PokeApi
import PokeApi from 'pokeapi-typescript';


export function Home() {
  const [pokemons, setPokemons] = useState<PokemonCard[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonCard[]>(pokemons);
  const [searchPokemon, setSearchPokemon] = useState('');
  
  const { isDarkMode } = useContext(AppContext)
  const navigation = useNavigation();
  const { t, i18n } = useTranslation()

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
    
    } catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fecthPokemons()
  }, [])

  console.log(t('pre'))

  return (
    <S.Container>
      <S.Header>
        <ButtonDarkMode />
        {!isDarkMode && (
          <S.ImageHeaderBackground
            source={PokeBall}
            resizeMethod="resize"
          />
        )}
        <S.Title>Pokédex</S.Title>
        <S.Description>{t('header.subtitle')}</S.Description>
        <Input 
          placeholder={t('header.placeholder')}
          onChangeText={onChangeText}
          value={searchPokemon}
        />
      </S.Header>      
      
      <S.Content>
        {pokemons.length > 0 ? (
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