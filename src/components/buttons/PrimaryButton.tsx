import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

interface btnProps {
  onPress: () => void;
  label: string;
  primary: boolean;
}

function PrimaryButton(props: btnProps) {
  let customStyle;
  let customText;

  if (props.primary) {
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
    height: 44,
    width: '100%',
    backgroundColor: '#806CFB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: 10,
  },
  buttonText: {
    color: '#F9F9FB',
    fontSize: 18,
    lineHeight: 27,
    fontFamily: 'Poppins_500Medium',
  },
  secondaryContainer: {
    height: 44,
    width: '100%',
    backgroundColor: '#F9F9FB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderColor: '#806CFB',
    borderWidth: 1,
    marginTop: 10,
  },
  secondaryText: {
    color: '#806CFB',
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    lineHeight: 27,
  },
});

export default PrimaryButton;
