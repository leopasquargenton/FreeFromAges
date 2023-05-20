import React from 'react';
import { StyleSheet, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export interface RestrictionTypeProps {
  name: string;
}

export function RestrictionType({ name }: RestrictionTypeProps) {
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
    flex: 1,
  },
  checkbox: {
    marginVertical: 10,
  },
});
