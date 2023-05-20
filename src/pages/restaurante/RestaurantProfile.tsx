import React from 'react';
import { View , StyleSheet} from 'react-native';
import { ExampleButton } from '../../components/buttons/ExampleButton';
import { useNavigation } from '@react-navigation/native';

export function RestaurantProfile() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ExampleButton label='EDIT PROFILE' onPress={()=> navigation.navigate('RestaurantEditProfile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    justifyContent:'center',
    alignItems:"center"
}
});
