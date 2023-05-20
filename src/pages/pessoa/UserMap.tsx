import React from "react";
import {View,StyleSheet,Text} from "react-native";

export function UserMap() {
  return (
    <View style={styles.container}>
      <Text>Mapa </Text>
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