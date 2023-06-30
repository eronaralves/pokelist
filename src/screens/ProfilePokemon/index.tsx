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
  weaknesses: Weaknesses[],
  base_experience: number;
  base_hp: number | undefined;
  base_attack: number | undefined;
  base_defense: number | undefined;
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

    // Stats
    const statsForFind = ["hp", "attack", "defense"]
    const statsHp = data.stats.filter(stat => statsForFind.includes(stat.stat.name))

    console.log(statsHp)
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
        weaknesses: dataType.damage_relations.double_damage_from as Weaknesses[],
        base_experience: data.base_experience,
        base_hp: statsHp[0].base_stat,
        base_attack: statsHp[1].base_stat,
        base_defense: statsHp[2].base_stat
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
              <S.TextTab isSelect={tabSelect === radio.value}>{radio.value}</S.TextTab>
              {tabSelect === radio.value && <S.ImageBackgroundTab source={Pokeball} /> }
            </S.BoxTab>
          ))}
        </S.ContainerTabs>
      </S.Header>

      <S.ContainerCharacteristics type={typeMain}>
        <S.ScrollViewContainer>
          {tabSelect === "about" ? (
            <S.ContentCharacteristics> 
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
                      <S.TypeWeaknesses type={item.name}>
                        {POKEMON_TYPES[item.name]?.icon}
                      </S.TypeWeaknesses>
                    )}
                    horizontal
                  />
                </S.BoxCharacteristic>
              </S.SectionCharacteristics>
            </S.ContentCharacteristics>
          ) : tabSelect === "stats" && (
            <S.ContentCharacteristics> 
              <S.SectionCharacteristics>
                <S.TitleSection type={typeMain}>
                  Base Stats
                </S.TitleSection>

                <S.BoxCharacteristic>
                  <S.LabelCharacteristic>HP</S.LabelCharacteristic>
                  <S.Characteristic>{pokemonSelect?.base_hp}</S.Characteristic>
                </S.BoxCharacteristic>
                <S.BoxCharacteristic>
                  <S.LabelCharacteristic>Attack</S.LabelCharacteristic>
                  <S.Characteristic>{pokemonSelect?.base_attack}</S.Characteristic>
                </S.BoxCharacteristic>
                <S.BoxCharacteristic>
                  <S.LabelCharacteristic>Desense</S.LabelCharacteristic>
                  <S.Characteristic>{pokemonSelect?.base_defense}</S.Characteristic>
                </S.BoxCharacteristic>
              </S.SectionCharacteristics>
            </S.ContentCharacteristics>
          )}
        </S.ScrollViewContainer>
      </S.ContainerCharacteristics>
    </S.Container>
  )
}