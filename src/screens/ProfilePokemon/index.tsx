import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// PokeApi
import PokeAPI, { IPokemon } from "pokeapi-typescript"

// Styles
import * as S from './styles';

// Ultils
import { POKEMON_TYPES } from "../../ultils/typesPokemons";
import { formatterNumberPokedex } from "../../ultils/formatterNumberPokedex";

// Interfaces
interface RouteParams {
  id: number;
}

const radioButtonsData = [
  {
    value: 'about'
  },
  {
    value: 'stats'
  }
];

export function ProfilePokemon() {
  const [pokemonSelect, setPokemonSelect] = useState<IPokemon>()
  const [radioButons, setRadiosButtons] = useState<string>(radioButtonsData[0].value)


  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as RouteParams

  async function fetchPokemonSelect() {
    const response = PokeAPI.Pokemon.get(id)
    const data = response
    console.log(data.name)
    setPokemonSelect(data)
  }

  useEffect(() => {
    fetchPokemonSelect()
  }, [])

  const typeMain = pokemonSelect?.types[0].type.name as keyof typeof POKEMON_TYPES;
  const numberPorkedexAjusted = pokemonSelect && formatterNumberPokedex(pokemonSelect.id)

  return (
    <S.Container>
      <S.Header type={typeMain}>
        <S.IconArrowLeft />

        <S.ContainerInfoHeader>
          <S.ImagePokemon source={{
            uri: pokemonSelect?.sprites.other['official-artwork'].front_default
          }} />
          <S.ContentInfo>
            <S.NumberPokedex>#{numberPorkedexAjusted}</S.NumberPokedex>
            <S.Name>{pokemonSelect?.name}</S.Name>
          </S.ContentInfo>
        </S.ContainerInfoHeader>

        <View>
          {radioButtonsData.map(radio => (
            <Text key={radio.value}>{radio.value}</Text>
          ))}
        </View>
      </S.Header>

      <Text>{pokemonSelect?.name}</Text>
    </S.Container>
  )
}