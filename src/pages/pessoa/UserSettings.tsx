import React from "react";
import {View,StyleSheet,Text} from "react-native";

export function UserSettings() {
  return (
    <View style={styles.container}>
      <Text>UserSettings </Text>
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