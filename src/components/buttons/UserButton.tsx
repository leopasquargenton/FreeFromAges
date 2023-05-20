import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

interface btnProps {
  onPress: () => void;
  label: string;
  user: boolean;
}

function UserButton(props: btnProps) {
  let customStyle;
  let customText;

  if (props.user) {
    customStyle = styles.buttonContainer;
    customText = styles.buttonText;
  } else {
    customStyle = styles.secondaryContainer;
    customText = styles.secondaryText;
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={customStyle}>
      <Text style={customText}>{props.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 55,
    width: '90%',
    backgroundColor: '#F9F9FB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
  },
  buttonText: {
    color: '#54D8A7',
    fontSize: 20,
    lineHeight: 27,
    fontFamily: 'Poppins_500Medium',
  },
  secondaryContainer: {
    height: 55,
    width: '90%',

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderColor: '#F9F9FB',
    borderWidth: 2,
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
  },
  secondaryText: {
    color: '#F9F9FB',
    fontSize: 20,
    lineHeight: 27,
    fontFamily: 'Poppins_500Medium',
  },
});

export default UserButton;
