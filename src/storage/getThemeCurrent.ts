import AsyncStorage from "@react-native-async-storage/async-storage"

export async function getThemeCurrent() {
  try {
    const storage = await AsyncStorage.getItem("isDarkMode")
    const themeCurrent = storage ? JSON.parse(storage) : false

    return themeCurrent;
  } catch(error) {
    console.log(error)
  }
}