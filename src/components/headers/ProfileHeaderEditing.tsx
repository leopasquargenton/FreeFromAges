import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';

export function ProfileHeaderEditing() {
  return (
    <LinearGradient
      colors={['#5242A4' , '#8C76FF']}
      start={[0, 0]}
      end={[1, 0]}
      style={styles.box}      
      >
      <View style={styles.container}>
        <Text style={styles.label}> EDITAR PERFIL</Text>        
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {    
    justifyContent: 'center',
    alignItems: 'center',
    flex : 1,    
  },
  box: {
    height: 160,
    width: Dimensions.get('window').width,    
  },  
  label: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Poppins_600SemiBold',    
  },
});
