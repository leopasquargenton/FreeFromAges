import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { UserContext } from '../../helpers/UserContext';
import { ProfileHeaderEditing } from '../../components/headers/ProfileHeaderEditing';
import { InputField } from '../../components/inputs/InputField';
import PrimaryButton from '../../components/buttons/PrimaryButton';

export function RestaurantEditProfilePasswordAndEmail() {
  const navigation = useNavigation();
  const restaurante = useContext(UserContext);
  
  //Dados cadastro
  //nomeFantasia, email novoEmail confirmaNovoEmail, senha, novaSenha, confirmaNovaSenha
  const [ nomeFantasia, setNomeFantasia] = useState("");
  const [ email, setEmail] = useState("");
  const [ novoEmail, setNovoEmail] = useState("");
  const [ confirmaNovoEmail, setConfirmaNovoEmail] = useState("");
  const [ senha, setSenha] = useState("");
  const [ novaSenha, setNovaSenha] = useState("");
  const [ confirmaNovaSenha, setConfirmaNovaSenha] = useState("");

  
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
          <Text style={styles.subtitle}>Cadastro</Text>
          <InputField placeholder="Nome Fantasia"maxLength={50} keyboardType='ascii-capable' value={nomeFantasia} onChangeText={text =>setNomeFantasia(text)}/>
          <InputField placeholder="E-mail atual aqui"maxLength={50}keyboardType='email-address' value={email} editable={false} onChangeText={text =>setEmail(text)}/>
          <InputField placeholder="Novo E-mail"maxLength={50}keyboardType='email-address' value={novoEmail} onChangeText={text =>setNovoEmail(text)}/>
          <InputField placeholder="Confirmar E-mail"maxLength={50}keyboardType='email-address' value={confirmaNovoEmail} onChangeText={text =>setConfirmaNovoEmail(text)}/>
          <InputField placeholder="Senha"maxLength={50}secureTextEntry={true} value={senha} onChangeText={text =>setSenha(text)}/>
          <InputField placeholder="Nova Senha"maxLength={50}secureTextEntry={true} value={novaSenha} onChangeText={text =>setNovaSenha(text)}/>
          <InputField placeholder="Confirmar Senha"maxLength={50}secureTextEntry={true} value={confirmaNovaSenha} onChangeText={text =>setConfirmaNovaSenha(text)} />

          <PrimaryButton label='Salvar alterações' primary onPress={()=>navigation.navigate('OnBoarding')}/>
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