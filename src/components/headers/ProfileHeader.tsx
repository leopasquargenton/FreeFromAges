import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions } from 'react-native';
import { View, Image, StyleSheet, Text } from 'react-native';

export function ProfileHeader() {

  return (
    <LinearGradient
      colors={['#5242A4' , '#8C76FF']}
      start={[0, 0]}
      end={[1, 0]}
      style={styles.logo}      
      >
      <View style={styles.container}>
        <Text style={styles.label}>EDITAR PERFIL</Text>
        <Image
          source={{uri: 'https://i.imgur.com/ZLOvpRh.jpeg'}}
          style={styles.profileImage}
        />
        <Text style={styles.title}>Nome da Empresa</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.32,
    width: Dimensions.get('window').width,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    marginVertical: 6,
    borderColor: 'white',
  },
  label: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 8,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Poppins_600SemiBold',
  },
  title:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:36,
    lineHeight:37.5,
    color:'#FFFFFF',
    alignSelf:'center',
    marginTop:12,
    marginBottom:24,
  },
});
