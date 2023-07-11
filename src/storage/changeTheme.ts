import AsyncStorage from "@react-native-async-storage/async-storage"

export async function changeTheme(isDarkMode: boolean) {
  try {
    await AsyncStorage.setItem("isDarkMode", JSON.stringify(isDarkMode))
  } catch(error) {
    console.log(error)
  }
}