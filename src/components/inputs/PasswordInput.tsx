import React from 'react';
import { View, TextInput, StyleSheet, Text, type TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PasswordInputProps extends TextInputProps {
  isVisible: boolean;
  toggleVisibility: () => void;
  error?: string;
}

export function PasswordInput({ isVisible, toggleVisibility, error, ...rest }: PasswordInputProps) {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor='#939393'
          placeholder='Senha'
          maxLength={50}
          secureTextEntry={!isVisible}
          {...rest}
        />
        <Icon
          color='#939393'
          style={styles.icon}
          name={isVisible ? 'eye' : 'eye-slash'}
          size={20}
          onPress={toggleVisibility}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </>
  );
}

const styles = StyleSheet.create({
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
  input: {
    flex: 1,
    fontFamily: 'Poppins_400Regular',
    fontSize: 15,
    lineHeight: 22,
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
