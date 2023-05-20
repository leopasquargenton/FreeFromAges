import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import UserButton from '../../components/buttons/UserButton';
import { Logo } from '../../components/Logo';

export function OnBoarding() {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#8169FD', '#49F392']}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.container}
    >  
      <Logo />
      <Text style={styles.title}>Bem-Vindo!</Text>
      <Text style={styles.subTitle} >Aqui você encontra opções alimentares seguras e deliciosas</Text>
      <UserButton
        label='Sou Usuário'
        user
        onPress={() => {
          navigation.navigate('Login', { userType: 'Pessoa' });
        }}
      />
      <UserButton
        label='Sou Empresa'
        user={false}
        onPress={() => {
          navigation.navigate('Login', { userType: 'Restaurante' });
        }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontWeight: '600',
    fontSize: 25,
    lineHeight: 37.5,
    color: '#FFFFFF',
    marginTop: 130,
    fontFamily: 'Poppins_600SemiBold',
  },
  subTitle: {
    fontSize: 18,
    lineHeight: 27,
    color: '#F4F4F4',
    fontFamily: 'Poppins_400Regular', 
    textAlign: 'center',
    paddingHorizontal:'10%',
    paddingBottom:100,
  },
});
