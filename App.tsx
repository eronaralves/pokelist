import './src/i18n/index'
import React, { useContext } from 'react';
import { AppContext, AppContextProvider } from '@context/AppContext';

import { View, StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

// Theme
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme, darkTheme } from '@theme/index';

// Routes
import { Routes } from '@routes/index';


export default function App() {

  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
}

function AppContent() {
  const { isDarkMode } = useContext(AppContext);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
      <StatusBar 
        barStyle={isDarkMode ? "light-content" : "dark-content" }
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <View/>}
    </ThemeProvider>
  );
}





