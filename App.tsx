import React from 'react';

import { View, StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

// Theme
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme, darkTheme } from '@theme/index';

// Routes
import { Routes } from '@routes/index';


export default function App() {
  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <View/>}
    </ThemeProvider>
  );
}