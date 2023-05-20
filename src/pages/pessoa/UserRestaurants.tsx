import React from "react";
import {View,StyleSheet,Text} from "react-native";

export function UserRestaurants() {
  return (
    <View style={styles.container}>
      <Text>Restaurantes </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
   
  },
});