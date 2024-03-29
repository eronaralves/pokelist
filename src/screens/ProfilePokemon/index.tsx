import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// I18n
import { useTranslation } from "react-i18next";

// Images
import Pokeball from "@assets/images/background-tab.png";

// Styles
import * as S from "./styles";

// Ultils
import { POKEMON_TYPES, Types } from "@ultils/typesPokemons";
import {
  formatterHeight,
  formatterNumberPokedex,
  formatterWeight,
} from "@ultils/formatter";

// Components
import { TagType } from "@components/TagType";
import { TypesPokemonProps } from "@components/CardPokemon";

// Axios
import { api } from "../../lib/axios";

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
    };
  }[];
  weaknesses: Weaknesses[];
  base_experience: number;
  base_hp: number | undefined;
  base_attack: number | undefined;
  base_defense: number | undefined;
}

const radioButtonsData = [
  {
    value: "about",
  },
  {
    value: "stats",
  },
];

export function ProfilePokemon() {
  const [pokemonSelect, setPokemonSelect] = useState<PokemonSelect>();
  const [tabSelect, setTabSelect] = useState<string>(radioButtonsData[0].value);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  function handleSendToBack() {
    navigation.navigate("home");
  }

  async function fetchPokemonSelect() {
    try {
      setLoading(true);
      const response = await api.get(`pokemon/${id}`);
      const data = await response.data;

      const typeMain = data.types[0].type.name;
      const detailsType = api.get(`type/${typeMain}`);

      // Stats
      const statsForFind = ["hp", "attack", "defense"];
      const statsHp = data.stats.filter((stat) =>
        statsForFind.includes(stat.stat.name)
      );

      const dataType = await Promise.resolve(detailsType);

      const pokemonDetails: PokemonSelect = {
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default,
        types: data.types as TypesPokemonProps[],
        weight: data.weight,
        height: data.height,
        abilities: data.abilities,
        weaknesses: dataType.data.damage_relations
          .double_damage_from as Weaknesses[],
        base_experience: data.base_experience,
        base_hp: statsHp[0].base_stat,
        base_attack: statsHp[1].base_stat,
        base_defense: statsHp[2].base_stat,
      };

      setPokemonSelect(pokemonDetails);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPokemonSelect();
  }, []);

  const typeMain = pokemonSelect?.types[0].type
    .name as keyof typeof POKEMON_TYPES;
  const numberPorkedexAjusted =
    pokemonSelect && formatterNumberPokedex(pokemonSelect.id);

  return (
    <S.Container>
      {!loading ? (
        <>
          <S.Header type={typeMain}>
            <TouchableOpacity onPress={handleSendToBack}>
              <S.IconArrowLeft />
            </TouchableOpacity>

            <S.ContainerInfoHeader>
              <S.ImagePokemon
                source={{
                  uri: pokemonSelect?.image,
                }}
              />
              <S.ContentInfo>
                <S.NumberPokedex>#{numberPorkedexAjusted}</S.NumberPokedex>
                <S.Name>{pokemonSelect?.name}</S.Name>
                <FlatList
                  data={pokemonSelect?.types}
                  keyExtractor={(item) => item.type.name}
                  renderItem={({ item }) => (
                    <TagType type={item.type.name as keyof Types} />
                  )}
                  horizontal
                />
              </S.ContentInfo>
            </S.ContainerInfoHeader>

            <S.ContainerTabs>
              {radioButtonsData.map((radio) => (
                <S.BoxTab
                  key={radio.value}
                  onPress={() => setTabSelect(radio.value)}
                >
                  <S.TextTab isSelect={tabSelect === radio.value}>
                    {t(`tabsPokemon.${radio.value}.text`)}
                  </S.TextTab>
                  {tabSelect === radio.value && (
                    <S.ImageBackgroundTab source={Pokeball} />
                  )}
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
                      {t("tabsPokemon.about.sections.pokedex")}
                    </S.TitleSection>

                    <S.BoxCharacteristic>
                      <S.LabelCharacteristic>
                        {t("pokemons.height")}
                      </S.LabelCharacteristic>
                      <S.Characteristic>
                        {formatterHeight(pokemonSelect?.height)}m
                      </S.Characteristic>
                    </S.BoxCharacteristic>
                    <S.BoxCharacteristic>
                      <S.LabelCharacteristic>
                        {t("pokemons.weight")}
                      </S.LabelCharacteristic>
                      <S.Characteristic>
                        {formatterWeight(pokemonSelect?.weight)}kg
                      </S.Characteristic>
                    </S.BoxCharacteristic>
                    <S.BoxCharacteristic>
                      <S.LabelCharacteristic>
                        {t("pokemons.abilities")}
                      </S.LabelCharacteristic>
                      <S.Characteristic>
                        1. {pokemonSelect?.abilities[0].ability.name}
                      </S.Characteristic>
                    </S.BoxCharacteristic>
                    <S.BoxCharacteristic>
                      <S.LabelCharacteristic>
                        {t("pokemons.weaknesses")}
                      </S.LabelCharacteristic>
                      <FlatList
                        data={pokemonSelect?.weaknesses}
                        keyExtractor={(item) => item.name}
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
              ) : (
                tabSelect === "stats" && (
                  <S.ContentCharacteristics>
                    <S.SectionCharacteristics>
                      <S.TitleSection type={typeMain}>
                        {t("tabsPokemon.stats.sections.base_stats")}
                      </S.TitleSection>

                      <S.BoxCharacteristic>
                        <S.LabelCharacteristic>
                          {t("pokemons.hp")}
                        </S.LabelCharacteristic>
                        <S.Characteristic>
                          {pokemonSelect?.base_hp}
                        </S.Characteristic>
                      </S.BoxCharacteristic>
                      <S.BoxCharacteristic>
                        <S.LabelCharacteristic>
                          {t("pokemons.attack")}
                        </S.LabelCharacteristic>
                        <S.Characteristic>
                          {pokemonSelect?.base_attack}
                        </S.Characteristic>
                      </S.BoxCharacteristic>
                      <S.BoxCharacteristic>
                        <S.LabelCharacteristic>
                          {t("pokemons.defense")}
                        </S.LabelCharacteristic>
                        <S.Characteristic>
                          {pokemonSelect?.base_defense}
                        </S.Characteristic>
                      </S.BoxCharacteristic>
                    </S.SectionCharacteristics>
                  </S.ContentCharacteristics>
                )
              )}
            </S.ScrollViewContainer>
          </S.ContainerCharacteristics>
        </>
      ): (
        <ActivityIndicator
          style={{  
            flex: 1,
            margin: 'auto'
          }}
        />
      )}
    </S.Container>
  );
}
