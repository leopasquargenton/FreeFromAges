import React, { useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { RestaurantIDescriptionInput } from '../../../components/inputs/RestaurantIDescriptionInput';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import { LinearGradient } from 'expo-linear-gradient';
import { isInputNotEmpty } from '../../../helpers/validations';
import { ScrollView } from 'react-native-gesture-handler';
import { RestrictionRestaurant } from '../../../components/multipleCheckbox/RestrictionRestaurant';
import { allRestrictions } from '../../../components/multipleCheckbox/RestrictionsData';
import { Restaurante } from '../../../helpers/UserContext';

interface RestaurantThirdStepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setRestaurante: React.Dispatch<React.SetStateAction<Restaurante>>;
  restaurante: Restaurante;
}
interface Restriction {
  restriction: string;
  category: string;
}

export function RestaurantThirdStep({ setStep, setRestaurante, restaurante }: RestaurantThirdStepProps) {
  const [descriptionError, setDescriptionError] = useState('');

  function inputValidation() {
  const descriptionValidation = isInputNotEmpty(restaurante.description);
  descriptionValidation !== 'valid' ?
  setDescriptionError(descriptionValidation): 
  setDescriptionError('')
 
  if (descriptionValidation==="valid"){
    restaurante.restrictions =[]
    for (const objeto of allRestrictions) {
      if (objeto.checked === true) {  
        const newRestriction: Restriction={
          restriction:objeto.name,
          category:objeto.type
        }
        restaurante.restrictions.push(newRestriction)
        }
    }
    if(restaurante.restrictions.length==0){
      alert("Selecione no mínimo uma restrição alimentar")
    }else{
      setStep(7)
    }
  }
}

  return (
    <LinearGradient colors= {['#8169FD', '#49F392']}  start={[0, 0]}end={[1, 1]} style={styles.container}>
     <View style={styles.logo}>
      </View>
    <KeyboardAvoidingView enabled style={styles.registerView} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -520 }>
    <Text style={styles.cadastro}>Cadastro:</Text>
        <Text style={styles.title}>Detalhes:</Text>
        <RestaurantIDescriptionInput placeholder='Informe os benefícios do Restaurante para a comunidade FreeFrom...' onChangeText={text => setRestaurante({ ...restaurante, description: text})} value={restaurante.description} numberOfLines={5} style={{  height: 15 * 5}} error={descriptionError} blurOnSubmit={true} onSubmitEditing={() => Keyboard.dismiss()}/>
        <Text style={styles.title}>Temos opções free...</Text>
        <ScrollView style={styles.scroll}>
          {allRestrictions.map((item,index)=>(
            <View key={index}>
              <RestrictionRestaurant id = {item.id} name={item.name} />
            </View>
          ))}
          </ScrollView>
          <View style={styles.buttonView}>
        <PrimaryButton label='Próximo' primary onPress={inputValidation}/>
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
    flex:5,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    backgroundColor:'#fff',
    padding:25,
  },
  scroll:{
   padding:10,
  },
  cadastro:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:25,
    lineHeight:37.5,
    color:'#806cfb',
  },
  buttonView: {
    marginBottom: 15,
  },
  title:{
    fontFamily:'Poppins_500Medium',
    fontSize:14,
    lineHeight:21,
    color:'#7E7E7E',
    alignSelf:'flex-start',
    marginTop:15,
  },
})
