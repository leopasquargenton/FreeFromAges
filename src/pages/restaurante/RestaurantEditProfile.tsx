import React, { useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { ProfileHeader } from '../../components/headers/ProfileHeader';
import { RestaurantIDescriptionInput } from '../../components/inputs/RestaurantIDescriptionInput';
import { foodRestrictions } from '../../components/multipleCheckbox/RestrictionsData';
import { RestrictionRestaurant } from '../../components/multipleCheckbox/RestrictionRestaurant';
import PrimaryButton from '../../components/buttons/PrimaryButton';

export function RestaurantEditProfile() {
  const navigation = useNavigation();
  const [description, setDescription] = useState('');
  const [lines, setLines] = useState(5);
  const [descriptionError, setDescriptionError] = useState('');


  function inputValidation() {
    navigation.navigate('RestaurantProfile');
  }

  function updateSize(text: React.SetStateAction<string>) {
    setDescription(text);
    setLines(Math.max(5, Math.ceil(text.length / 54)));
  }

  function editPasswordAndEmail(): void {    
    navigation.navigate("RestaurantEditProfilePasswordAndEmail");
  }

  function editAddress(): void {    
    navigation.navigate("RestaurantEditProfileAddress");
  }  

  return (        
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : 0}>
      <ProfileHeader/> 
      <LinearGradient
        colors={['#5242A4' , '#8C76FF']}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.container}      
        >       
        <View style={styles.registerView}>
          <ScrollView style={styles.scroll}>
            <Text style={styles.subtitle2}>Restaurante</Text>
            
            <RestaurantIDescriptionInput placeholder='Informe os benefícios do Restaurante para a comunidade FreeFrom...' onChangeText={text => updateSize(text)} value={description} numberOfLines={lines} style={{  height: 15 * lines, marginTop: 0}} error={descriptionError} blurOnSubmit={true} onSubmitEditing={() => Keyboard.dismiss()}/>
            <Text style={styles.subtitle2}>Temos opções free...</Text>
            <ScrollView style={styles.scroll}>
              {foodRestrictions.map((item,index)=>(
                <View key={index}>
                  <RestrictionRestaurant id={index} name={item.name} />
                </View>
              ))}
            </ScrollView>
            
            <PrimaryButton label='Alterar nome, e-mail ou senha' primary={false} onPress ={editPasswordAndEmail}/>
            <PrimaryButton label='Alterar endereço' primary={false} onPress ={editAddress}/>
            <PrimaryButton label='Salvar alterações' primary onPress={inputValidation}/>
            <Text></Text>
          </ScrollView> 
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
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
