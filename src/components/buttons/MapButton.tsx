import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Octicons  } from '@expo/vector-icons'; 


export  function MapButton({size}:any) {
 
  return (
  
      <View style={styles.container}>
      <Octicons
        name="location"
        color='#fff'
        size={size}
      />
     </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#806CFB',
      height:60,
      width:60,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:60,
      marginBottom:40
  },
 
});

