import React from "react";
import {View,StyleSheet, Text} from "react-native";


export function UserComunity() {
  return (
    <View style={styles.container}>
      <Text>Comunidades</Text>
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


