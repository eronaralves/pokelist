import { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// Images
import Pokeball from "@assets/images/background-tab.png";

// PokeApi
import PokeAPI from "pokeapi-typescript"

// Styles
import * as S from './styles';

// Ultils
import { POKEMON_TYPES, Types } from "@ultils/typesPokemons";
import { formatterHeight, formatterNumberPokedex, formatterWeight } from "@ultils/formatter";

// Components
import { TagType } from "@components/TagType"
import { TypesPokemonProps } from "@components/CardPokemon";

// Interfaces
interface RouteParams {
  id: number;
}

interface Weaknesses {
  name: keyof typeof POKEMON_TYPES;
  url: string;
}

interface PokemonSelect {
  id: number;
  name: string;
  image: string;
  types: TypesPokemonProps[];
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    }
  }[];
  weaknesses: Weaknesses[]
}

const radioButtonsData = [
  {
    value: 'about'
  },
  {
    value: 'stats'
  }
  ,
  {
    value: 'evolution'
  }
];

export function ProfilePokemon() {
  const [pokemonSelect, setPokemonSelect] = useState<PokemonSelect>()
  const [tabSelect, setTabSelect] = useState<string>(radioButtonsData[0].value)

  const navigation = useNavigation()
  const route = useRoute()
  const { id } = route.params as RouteParams

  function handleSendToBack() {
    navigation.navigate('home')
  }

  async function fetchPokemonSelect() {
    const response = PokeAPI.Pokemon.get(id)
    const data = response
    
    const typeMain = data.types[0].type.name;
    const detailsType = PokeAPI.Type.resolve(typeMain)

    try {
      const dataType = await Promise.resolve(detailsType)
      
      const pokemonDetails: PokemonSelect = {
        id: data.id,
        name: data.name,
        image: data.sprites.other['official-artwork'].front_default,
        types: data.types as TypesPokemonProps[],
        weight: data.weight,
        height: data.height,
        abilities: data.abilities,
        weaknesses: dataType.damage_relations.double_damage_from as Weaknesses[]
      }
  
      setPokemonSelect(pokemonDetails)

    } catch(err) {
      console.log(err)
    }


  }

  useEffect(() => {
    fetchPokemonSelect()
  }, [])

  const typeMain = pokemonSelect?.types[0].type.name as keyof typeof POKEMON_TYPES;
  const numberPorkedexAjusted = pokemonSelect && formatterNumberPokedex(pokemonSelect.id)

  return (
    <S.Container>
      <S.Header type={typeMain}>
        <TouchableOpacity onPress={handleSendToBack}>
          <S.IconArrowLeft />
        </TouchableOpacity>

        <S.ContainerInfoHeader>
          <S.ImagePokemon source={{
            uri: pokemonSelect?.image
          }} />
          <S.ContentInfo>
            <S.NumberPokedex>#{numberPorkedexAjusted}</S.NumberPokedex>
            <S.Name>{pokemonSelect?.name}</S.Name>
            <FlatList 
              data={pokemonSelect?.types}
              keyExtractor={item => item.type.name}
              renderItem={({ item }) => (
                <TagType
                  type={item.type.name as keyof Types}
                />
              )}
              horizontal
            />
          </S.ContentInfo>
        </S.ContainerInfoHeader>

        <S.ContainerTabs>
          {radioButtonsData.map(radio => (
            <S.BoxTab key={radio.value} onPress={() => setTabSelect(radio.value)}>
              <S.Tab isSelect={tabSelect === radio.value}>{radio.value}</S.Tab>
              {tabSelect === radio.value && <S.ImageBackgroundTab source={Pokeball} /> }
            </S.BoxTab>
          ))}
        </S.ContainerTabs>
      </S.Header>

      <S.ContainerCharacteristics type={typeMain}>
        <S.ContentCharacteristics>
          {tabSelect === "about" && (
            <S.SectionCharacteristics>
              <S.TitleSection type={typeMain}>
                Pokédex Data
              </S.TitleSection>

              <S.BoxCharacteristic>
                <S.LabelCharacteristic>Species</S.LabelCharacteristic>
                <S.Characteristic>Seed Pokemon</S.Characteristic>
              </S.BoxCharacteristic>
              <S.BoxCharacteristic>
                <S.LabelCharacteristic>Height</S.LabelCharacteristic>
                <S.Characteristic>{formatterHeight(pokemonSelect?.height)}m</S.Characteristic>
              </S.BoxCharacteristic>
              <S.BoxCharacteristic>
                <S.LabelCharacteristic>Weight</S.LabelCharacteristic>
                <S.Characteristic>{formatterWeight(pokemonSelect?.weight)}kg</S.Characteristic>
              </S.BoxCharacteristic>
              <S.BoxCharacteristic>
                <S.LabelCharacteristic>Abilities</S.LabelCharacteristic>
                <S.Characteristic>1. {pokemonSelect?.abilities[0].ability.name}</S.Characteristic>
              </S.BoxCharacteristic>
              <S.BoxCharacteristic>
                <S.LabelCharacteristic>Weaknesses</S.LabelCharacteristic>
                <FlatList 
                  data={pokemonSelect?.weaknesses}
                  keyExtractor={item => item.name}
                  renderItem={({ item }) => (
                    <TagType 
                      type={item.name}
                      noText
                    />
                  )}
                  horizontal
                />
              </S.BoxCharacteristic>
            </S.SectionCharacteristics>
          )}
        </S.ContentCharacteristics>
      </S.ContainerCharacteristics>
    </S.Container>
  )
}