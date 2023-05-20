import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInputMask, type TextInputMaskProps } from 'react-native-masked-text';

interface BirthdayInputProps extends TextInputMaskProps {
  error?: string;
}

export function BirthdayInput({ error, ...rest }: BirthdayInputProps) {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInputMask
          placeholder='Data de nascimento'
          placeholderTextColor='#939393'
          style={styles.input}
          options={{
            format: 'DD-MM-YYYY',
          }}
          {...rest}
        />
        <Icon color='#7C75F3' style={styles.icon} name='calendar' size={20} />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontStyle: 'normal',
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    lineHeight: 22,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '100%',
    height: 45,
    borderRadius: 100,
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 10,
  },
  icon: {
    marginLeft: 10,
  },
  error: {
    color: '#ff4040',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 18,
  },
});
