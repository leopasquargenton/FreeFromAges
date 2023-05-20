import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { isAdressNotEmpty, isCepValid } from '../../helpers/validations';
import { ProfileHeaderEditing } from '../../components/headers/ProfileHeaderEditing';
import { MaskedInput } from '../../components/inputs/MaskedInput';
import { InputField } from '../../components/inputs/InputField';
import PrimaryButton from '../../components/buttons/PrimaryButton';
export function RestaurantEditProfileAddress() {
  const navigation = useNavigation();
  //Dados cadastro
  //dados cep
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  
  //Errors
  const [cepError, setCepError] = useState("");
  const [logradouroError, setLogradouroError] = useState("");
  const [cidadeError, setCidadeError] = useState("");
  const [estadoError, setEstadoError] = useState("");
  const [numeroError, setNumeroError] = useState("");

  function inputValidation() {
    const cepValidation = isCepValid(cep);cepValidation !== 'valid' ?setCepError(cepValidation): setCepError('')
    const logradouroValidation = isAdressNotEmpty(logradouro);logradouroValidation !== 'valid' ?setLogradouroError(logradouroValidation): setLogradouroError('')
    const cidadeValidation = isAdressNotEmpty(cidade);cidadeValidation !== 'valid' ?setCidadeError(cidadeValidation): setCidadeError('')
    const estadoValidation = isAdressNotEmpty(estado);estadoValidation !== 'valid' ?setEstadoError(estadoValidation): setEstadoError('')
    const numeroValidation = isAdressNotEmpty(numero);numeroValidation !== 'valid' ?setNumeroError(numeroValidation): setNumeroError('')
   
    if (cepValidation==="valid" && logradouroValidation==="valid" && cidadeValidation==="valid" && estadoValidation==="valid" && numeroValidation==="valid"){
      // ...Continuar criação do Usuário
      
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      if (cep.length === 9) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          const data = response.data;
          setLogradouro(data.logradouro); 
          setCidade(data.localidade);
          setEstado(data.uf);
       
        } catch (error) {
          console.error("Erro ao buscar CEP:", error);
        }
      }
    };
    fetchData();
  }, [cep]);

  return (        
<View style={styles.container}> 
<ProfileHeaderEditing/> 
<LinearGradient
  colors={['#5242A4' , '#8C76FF']}
  start={[0, 0]}
  end={[1, 0]}
  style={styles.container}      
  >       
  
   <KeyboardAvoidingView enabled style={styles.registerView} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 0 }>
    <ScrollView>
      <KeyboardAvoidingView
        enabled
        style={styles.registerView}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 520}
      >    
      <Text style={styles.subtitle}>Endereço</Text>
          <MaskedInput placeholder='CEP' value={cep} onChangeText={text => setCep(text)} type='zip-code' keyboardType='numeric' error={cepError}/>
          <InputField placeholder='UF' maxLength={2} value={estado} onChangeText={text => setEstado(text)} secureTextEntry={false} keyboardType='ascii-capable' error={estadoError}/>
          <InputField placeholder='Cidade' maxLength={40} value={cidade} onChangeText={text => setCidade(text)} secureTextEntry={false} keyboardType='ascii-capable' error={cidadeError}/>
          <InputField placeholder='Rua' maxLength={40} value={logradouro} onChangeText={text => setLogradouro(text)}secureTextEntry={false} keyboardType='ascii-capable' error={logradouroError}/>
          <InputField placeholder='Número' maxLength={10} value={numero} onChangeText={text => setNumero(text)} secureTextEntry={false} keyboardType='numeric' error={numeroError}/>
          <InputField placeholder='Complemento' maxLength={40} value={complemento} onChangeText={text => setComplemento(text)} secureTextEntry={false} keyboardType='default'/>         
          <PrimaryButton label='Salvar alterações' primary onPress={inputValidation}/>
          <Text></Text>
      </KeyboardAvoidingView>
    </ScrollView> 
  </KeyboardAvoidingView>
</LinearGradient>
</View>
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
    paddingTop:8,
    paddingHorizontal:14,    
    marginBottom:0,
  },  
  title:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:25,
    lineHeight:37.5,
    color:'#806cfb',
    alignSelf:'flex-start',
    marginBottom:30,
  },
  subtitle:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:25,
    lineHeight:27.5,
    color:'#806cfb',
    alignSelf:'flex-start',
    marginTop:8,
  },
  subtitle2:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:25,
    lineHeight:28,
    color:'#806cfb',
    alignSelf:'flex-start',
    marginBottom:4,
    marginTop:20,
  },
  bottomMargin:{
    marginBottom:20,
  },
  scroll:{
    padding:10,
   }
})