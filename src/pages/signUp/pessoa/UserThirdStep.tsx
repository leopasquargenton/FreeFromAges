import React, {useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import { foodRestrictions, foodRestrictionsTypes, othersfoodRestrictions } from '../../../components/multipleCheckbox/RestrictionsData';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { RestrictionUser } from '../../../components/multipleCheckbox/RestrictionUser';
import { RestrictionRestaurant } from '../../../components/multipleCheckbox/RestrictionRestaurant';
import { RestrictionType } from '../../../components/multipleCheckbox/RestrictionType';
import { Pessoa, useUser } from '../../../helpers/UserContext';

interface Restriction {
  restriction: string;
  category: string;
}

interface UserThirdStepProps {
  pessoa: Pessoa;
}

export function UserThirdStep({pessoa}: UserThirdStepProps) {
  const { createPessoa } = useUser();
  const navigation = useNavigation();
  
  async function save(){
    for (const objeto of foodRestrictions) {
      if (objeto.checked === true) {  
        const newRestriction: Restriction={
          restriction:objeto.name,
          category:objeto.type
        }
        pessoa.restrictions.push(newRestriction)
        }
    }
    for (const objeto of othersfoodRestrictions) {
      if (objeto.checked === true) {
        const newRestriction: Restriction={
          restriction:objeto.name,
          category:objeto.type
        }
        pessoa.restrictions.push(newRestriction)
        }
    }
    if(pessoa.restrictions.length==0){
      alert("Selecione no mínimo uma restrição alimentar")

    }else{
      
      console.log(pessoa)
      
      const responseCode = await createPessoa(pessoa);
        if (responseCode === 200) {
          navigation.navigate('Login', { userType: 'Pessoa' });
        }else{
        console.log("Não foi possível criar usuário");
      }
      }
    }
  const modalizeRef = useRef<Modalize>(null);

  function onOpen(){
    modalizeRef.current?.open()
  }
  
  function onClose(){modalizeRef.current?.close()}


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LinearGradient colors= {['#8169FD', '#49F392']}  start={[0, 0]}end={[1, 1]} style={styles.container}>
        <Text style={styles.title}>Restrições Alimentares</Text>
        <View style={styles.registerView}>
        <ScrollView>
          <Text style={styles.subtitulo}>Selecione suas restrições</Text>
      
          {foodRestrictions.map((item,index)=>(
            <View key={index}>
            <RestrictionUser id = {item.id} name={item.name} openModal={onOpen} />
            </View>
          ))}
          <Divider width={1} style={styles.divider}/>
           <Text style={styles.subtitulo}>Outros:</Text>
           {othersfoodRestrictions.map((item,index)=>(
            <View key={index}>
             <RestrictionRestaurant id = {item.id} name={item.name}/>
            </View>
            ))}
          </ScrollView>
         
          <Modalize ref={modalizeRef} adjustToContentHeight withHandle={false} >
            
            <View style={styles.modal}>
              <Text style={styles.subtituloModal}>Selecione o tipo de restrição:</Text>

              {foodRestrictionsTypes.map((item,index)=>(
            <View key={index}>
             <RestrictionType name={item.name}/>
            </View>
          ))}
            
              <PrimaryButton label='Salvar' onPress={onClose} primary/>
            </View>
          </Modalize>
         
          <PrimaryButton label='Finalizar Cadastro' primary onPress={save}/> 
        </View>
      </LinearGradient>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'flex-end',
    alignItems:'center' ,
    flex:1, 
  },
  registerView:{
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    backgroundColor:'#fff',
    padding:25,
    width:'100%',
    flex:1,
  },
  divider:{
    marginTop:10,
    
  },
  modal:{
    margin:25,
  },
  title:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:25,
    lineHeight:37.5,
    color:'#fff',
    marginBottom:10,
    marginTop:100,
    
  },
  subtitulo:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:15,
    lineHeight:22.5,
    color:'#939393',
    marginBottom:16,
    marginTop:40
  },
  subtituloModal:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:15,
    lineHeight:22.5,
    color:'#939393',
    marginBottom:16,
    marginTop:40,
    marginLeft:20
  }
})

