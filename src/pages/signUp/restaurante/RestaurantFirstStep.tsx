import React, {useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { MaskedInput } from '../../../components/inputs/MaskedInput';
import { InputField } from '../../../components/inputs/InputField';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import { Logo } from '../../../components/Logo';
import {isCnpjValid,isEmailValid,isFantasyNameValid,isPasswordValid,isPasswordsEqualsValid,} from '../../../helpers/validations';
import { Restaurante } from '../../../helpers/UserContext';

interface RestaurantFirstStepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setRestaurante: React.Dispatch<React.SetStateAction<Restaurante>>;
  restaurante: Restaurante;
}

export function RestaurantFirstStep({ setStep, setRestaurante, restaurante }: RestaurantFirstStepProps) {
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [cnpjError,setCnpjError] = useState('');
  const [fantasyNameError, setFantasyNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');

  async function inputValidation() {
    const cnpjValidation = isCnpjValid(restaurante.cnpj);cnpjValidation !== 'valid' ?setCnpjError(cnpjValidation):setCnpjError('')
    const fantasyNameValidation = isFantasyNameValid(restaurante.corporativeName);fantasyNameValidation !== 'valid' ?setFantasyNameError(fantasyNameValidation):setFantasyNameError('')
    const emailValidation = isEmailValid(restaurante.email);emailValidation !== 'valid' ?setEmailError(emailValidation):setEmailError('')
    const passwordValidation = isPasswordValid(restaurante.password);passwordValidation !== 'valid' ?setPasswordError(passwordValidation):setPasswordError('')
    const passwordsEqualsValidation = isPasswordsEqualsValid(restaurante.password, passwordConfirmation);passwordsEqualsValidation !== 'valid'?setPasswordConfirmationError(passwordsEqualsValidation):setPasswordConfirmationError('')

    if (cnpjValidation ==="valid" && fantasyNameValidation==="valid" && emailValidation==="valid" && passwordValidation === "valid" && passwordsEqualsValidation === "valid"){
      
    setStep(5);
  }
  }  
 
  return (
    <LinearGradient colors= {['#8169FD', '#49F392']}  start={[0, 0]}end={[1, 1]} style={styles.container}>
       <View style={styles.logo}>
         <Logo />
      </View> 
      <KeyboardAvoidingView enabled style={styles.registerView} behavior={Platform.OS == "ios" ? "padding" : "padding"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -500 }>
        <Text style={styles.title}>Cadastro:</Text>
        <View style={styles.inputView}>
        <MaskedInput placeholder='CNPJ'            type='cnpj'    keyboardType='numeric'       value={restaurante.cnpj}  onChangeText={text => setRestaurante({ ...restaurante, cnpj: text })}  error={cnpjError} />
        <InputField  placeholder="Nome Fantasia"   maxLength={50} keyboardType='ascii-capable' value={restaurante.corporativeName}  onChangeText={text => setRestaurante({ ...restaurante, corporativeName: text })} error={fantasyNameError}/>
        <InputField  placeholder="E-mail"          maxLength={50} keyboardType='email-address' value={restaurante.email} onChangeText={text => setRestaurante({ ...restaurante, email: text })} error={emailError}/>
        <InputField  placeholder="Senha"           maxLength={50} secureTextEntry={true}       value={restaurante.password} onChangeText={text => setRestaurante({ ...restaurante, password: text })} error={passwordError}/>
        <InputField  placeholder="Confirmar senha" maxLength={50} secureTextEntry={true}       value={passwordConfirmation} onChangeText={setPasswordConfirmation} error={passwordConfirmationError}/>
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
    padding:15,
    marginTop:-55,
  },
  inputView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 5,
    marginBottom: 40
  },
  buttonView: {
    padding: 0,
    marginTop: 10,
    marginBottom: -10,
  },
  title:{ 
    fontFamily:'Poppins_600SemiBold',
    lineHeight:37.5,
    fontSize:25,
    color:'#806cfb',
    marginLeft: 10
  },
})
