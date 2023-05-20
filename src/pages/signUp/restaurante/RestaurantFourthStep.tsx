import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaskedInput } from '../../../components/inputs/MaskedInput';
import axios from 'axios';
import { InputField } from '../../../components/inputs/InputField';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import { LinearGradient } from 'expo-linear-gradient';
import { Logo } from '../../../components/Logo';
import { isAdressNotEmpty, isCepValid } from '../../../helpers/validations';
import { Adress, Restaurante, useUser } from '../../../helpers/UserContext';

interface RestaurantFourthStepProps {
  restaurante:Restaurante;
  adress: Adress;
}

export function RestaurantFourthStep({ adress,restaurante }: RestaurantFourthStepProps) {
  const { createRestaurant } = useUser();
  const [cep,setCep]= useState("");
  const [rua,setRua]= useState("");
  const [cidade,setCidade]= useState("");
  const [estado,setEstado]= useState("");
  const [numero,setNumero]= useState("");
  const [complemento,setComplemento]= useState("");

  const navigation = useNavigation();
  const [cepError, setCepError] = useState("");
  const [logradouroError, setLogradouroError] = useState("");
  const [cidadeError, setCidadeError] = useState("");
  const [estadoError, setEstadoError] = useState("");
  const [numeroError, setNumeroError] = useState("");

  async function inputValidation() {
    const cepValidation = isCepValid(cep);
    cepValidation !== 'valid' ?setCepError(cepValidation): setCepError('')
    const logradouroValidation = isAdressNotEmpty(rua);
    logradouroValidation !== 'valid' ?setLogradouroError(logradouroValidation): setLogradouroError('')
    const cidadeValidation = isAdressNotEmpty(cidade);
    cidadeValidation !== 'valid' ?setCidadeError(cidadeValidation): setCidadeError('')
    const estadoValidation = isAdressNotEmpty(estado);
    estadoValidation !== 'valid' ?setEstadoError(estadoValidation): setEstadoError('')
    const numeroValidation = isAdressNotEmpty(numero);
    numeroValidation !== 'valid' ?setNumeroError(numeroValidation): setNumeroError('')
   
    if (cepValidation==="valid" && logradouroValidation==="valid" && cidadeValidation==="valid" && estadoValidation==="valid" && numeroValidation==="valid"){
      adress.cep = cep;
      adress.city = cidade
      adress.uf = estado;
      adress.street = rua;
      adress.number = numero;
      adress.complement = complemento;
      console.log(restaurante)

      const responseCode = await createRestaurant(restaurante);
        if (responseCode === 200) {
          navigation.navigate('Login', { userType: 'Restaurante' });
        }else{
        console.log("Não foi possível criar usuárioRestaurante");
      } 
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      if (cep.length === 9) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          const data = (response.data);
          setRua(data.logradouro);
          setCidade(data.localidade);
          setEstado (data.uf);
        } catch (error) {
          console.error("Erro ao buscar CEP:", error);
        }
      }
    };
    fetchData();
  }, [cep]);

  return (
    <LinearGradient colors= {['#8169FD', '#49F392']}  start={[0, 0]}end={[1, 1]} style={styles.container}>
       <Logo />  
       <KeyboardAvoidingView enabled style={styles.registerView} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -520 }>
       <Text style={styles.title}>Endereço:</Text>
       <View style={styles.inputView}>
      <MaskedInput 
        placeholder='CEP' 
        value={cep} 
        onChangeText={text =>setCep(text)} 
        type='zip-code' 
        keyboardType='numeric' 
        error={cepError}/>
      <InputField 
        placeholder='UF' 
        maxLength={2} 
        value={estado} 
        onChangeText={text =>setEstado(text)} 
        secureTextEntry={false} 
        keyboardType='ascii-capable' 
        error={estadoError}/>
      <InputField 
        placeholder='Cidade' 
        maxLength={40} 
        value={cidade} 
        onChangeText={text =>setCidade(text)} 
        secureTextEntry={false} 
        keyboardType='ascii-capable' 
        error={cidadeError}/>
      <InputField 
        placeholder='Rua' 
        maxLength={40} 
        value={rua} 
        onChangeText={text =>setRua(text)} 
        secureTextEntry={false} 
        keyboardType='ascii-capable' 
        error={logradouroError}/>
      <InputField 
        placeholder='Número' 
        maxLength={10} 
        value={numero} 
        onChangeText={text =>setNumero(text)} 
        secureTextEntry={false} 
        keyboardType='numeric' error={numeroError}/>
      <InputField 
        placeholder='Complemento' 
        maxLength={40} 
        value={complemento} 
        onChangeText={text =>setComplemento(text)}  
        secureTextEntry={false} 
        keyboardType='default'/>
      <PrimaryButton label='Finalizar Cadastro' primary onPress={inputValidation}/>
      </View> 
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'flex-end',
  },
  registerView:{
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    backgroundColor:'#fff',
    padding:25,
    marginTop:120,
    
  },
  inputView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#fff",
    padding: 2,
    marginTop: -20,
    marginBottom: 20
  },
  title:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:25,
    lineHeight:37.5,
    color:'#806cfb',
    alignSelf:'flex-start',
    marginBottom:30,
  },
})
