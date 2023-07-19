import { useContext } from "react";
import { StatusBar, View } from "react-native";
import { AppContext } from "@context/AppContext";

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";

// Routes
import { Routes } from "@routes/index";

// Theme
import { ThemeProvider } from "styled-components/native";
import { darkTheme, defaultTheme } from "@theme/index";


export function AppContent() {
  const { isDarkMode } = useContext(AppContext)

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={!isDarkMode ? defaultTheme : darkTheme}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content" }
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <View/>}
    </ThemeProvider>
  )
}