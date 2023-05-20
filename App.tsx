import React from 'react';
import { Text } from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_400Regular_Italic,
} from '@expo-google-fonts/poppins';

import { UserProvider } from './src/helpers/UserContext';
import { Routes } from './src/routes/routes';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  return (
  <UserProvider>
    <Routes/>
  </UserProvider>
  );
}