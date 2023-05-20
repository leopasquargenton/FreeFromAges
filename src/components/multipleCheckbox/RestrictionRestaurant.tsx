import React from 'react';
import { StyleSheet, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { allRestrictions, othersfoodRestrictions } from './RestrictionsData';
// import Icon from 'react-native-vector-icons/Feather';

export interface RestrictionRestaurantProps {
  name: string;
  id:any
}

function handleRestriction (id:number){
  
  const restriction = allRestrictions.find((restriction) => restriction.id === id);
  const restriction2 = othersfoodRestrictions.find((restriction2) => restriction2.id === id);

  if(restriction){
    restriction.checked = !restriction.checked
  }  
  if(restriction2){
    restriction2.checked = !restriction2.checked
  }  

}

export function RestrictionRestaurant({ name, id }: RestrictionRestaurantProps) {
  const [checkboxState, setCheckboxState] = React.useState(false);

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        style={styles.checkbox}
        text={name}
        size={25}
        isChecked={checkboxState}
        onPress={() => {
          setCheckboxState(!checkboxState);
           handleRestriction(id)
        }}
        fillColor='#806CFB'
        unfillColor='#FFF'
        textStyle={{
          textDecorationLine: 'none',
          color: checkboxState ? '#806CFB' : '#9B9B9B',
          fontSize: 15,
          fontFamily: 'Poppins_400Regular',
          lineHeight: 22.5,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  restrictionType: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 11,
    lineHeight: 16.5,
    color: '#9A9A9A',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  typeView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
