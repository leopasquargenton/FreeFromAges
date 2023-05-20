import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { InputField } from '../../../components/inputs/InputField';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import { Logo } from '../../../components/Logo';
import {isEmailValid,isPasswordsEqualsValid,isPasswordValid,isNameValid} from '../../../helpers/validations';
import { Pessoa } from '../../../helpers/UserContext';

interface UserFirstStepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setPessoa: React.Dispatch<React.SetStateAction<Pessoa>>;
  pessoa: Pessoa;
}

export function UserFirstStep({setStep, setPessoa, pessoa}: UserFirstStepProps) {
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');

   async function inputValidation() {
    const nameValidation = isNameValid(pessoa.name);
    nameValidation !== 'valid' ? setNameError(nameValidation): setNameError('')
    const emailValidation = isEmailValid(pessoa.email);
    emailValidation !== 'valid' ?setEmailError(emailValidation):setEmailError('')
    const passwordValidation = isPasswordValid(pessoa.password);
    passwordValidation !== 'valid' ?setPasswordError(passwordValidation) :  setPasswordError('')
    const passwordsEqualsValidation = isPasswordsEqualsValid(pessoa.password, passwordConfirmation); 
    passwordsEqualsValidation !== 'valid'? setPasswordConfirmationError(passwordsEqualsValidation) : setPasswordConfirmationError('')

    if (nameValidation==="valid" && emailValidation==="valid" && passwordValidation === "valid" && passwordsEqualsValidation === "valid"){ 
      setStep(2)
  }
  }  
  return (
    <LinearGradient colors= {['#8169FD', '#49F392']}  start={[0, 0]}end={[1, 1]} style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <KeyboardAvoidingView enabled style={styles.registerView} behavior={Platform.OS == "ios" ? "padding" : "padding"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -500 }>
        <Text style={styles.title}>Cadastro</Text>
        <View style={styles.inputView}>
        <InputField placeholder="Nome"maxLength={50} keyboardType='ascii-capable' error={nameError}value={pessoa.name}onChangeText={text =>setPessoa({ ...pessoa,name:text})}/>
        <InputField placeholder="E-mail"maxLength={50}keyboardType='email-address'error={emailError}value={pessoa.email}onChangeText={text =>setPessoa({ ...pessoa,email:text})}/>
        <InputField placeholder="Senha"maxLength={50}secureTextEntry={true}error={passwordError}value={pessoa.password}onChangeText={text =>setPessoa({ ...pessoa,password:text})}/>
        <InputField placeholder="Confirmar senha" maxLength={50}secureTextEntry={true}error={passwordConfirmationError}value={passwordConfirmation}onChangeText={text=> setPasswordConfirmation(text)}/>
        <View style={styles.buttonView}>
        <PrimaryButton label='Próximo' primary onPress={inputValidation}/>
        </View>
        </View>
        </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  logo:{
    flex:1,
    justifyContent:'center'
  },
  registerView:{
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    backgroundColor:'#fff',
    padding:12,
  },
  inputView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#fff",
    marginBottom: 30
  },
  buttonView: {
    marginTop: 10,
  },
  title:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:25,
    lineHeight:37.5,
    color:'#806cfb',
    padding: 10,
  },
})
