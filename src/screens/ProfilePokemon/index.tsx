import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text } from "react-native";

import PokeAPI from "pokeapi-typescript"

// Axios
import { api } from "../../lib/axios";


// Interfaces
interface RouteParams {
  name: string;
}

export function ProfilePokemon() {
  const route = useRoute()
  const { name } = route.params as RouteParams

  async function fetchPokemonSelect() {
    const response = await PokeAPI.Pokemon.listAll()
  
  }

  useEffect(() => {
    fetchPokemonSelect()
  }, [])


  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}