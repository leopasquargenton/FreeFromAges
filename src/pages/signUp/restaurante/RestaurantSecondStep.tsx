
import React, { useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { InputField } from '../../../components/inputs/InputField';
import { MaskedInput } from '../../../components/inputs/MaskedInput';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import { LinearGradient } from 'expo-linear-gradient';
import { Logo } from '../../../components/Logo';
import { isMandatoryPhoneValid, isNameValid, isPhoneCommercialValid } from '../../../helpers/validations';
import * as ImagePicker from 'expo-image-picker';
import { UploadProduct } from '../../../components/UploadProduct';
import { ProfileImage } from '../../../components/ProfileImage';
import { AntDesign } from "@expo/vector-icons";
import { Restaurante } from '../../../helpers/UserContext';

interface RestaurantSecondStepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setRestaurante: React.Dispatch<React.SetStateAction<Restaurante>>;
  restaurante: Restaurante;
}
interface Product{
  id: number;
  uri:string;
}

export function RestaurantSecondStep({ setStep, setRestaurante, restaurante }: RestaurantSecondStepProps) {
  const [responsibleNameError, setResponsibleNameError] = useState('');
  const [responsiblePhoneError, setResponsiblePhoneError] = useState('');
  const [comercialPhoneError, setComercialPhoneError] = useState('');
  const [products,setProducts]  = useState <Product[]>([]);
  const [isImageEmpty,setIsImageEmpty] = useState(true);
  const [productId,setProductId]= useState<number>(0);
  const largura = Dimensions.get('window').width

  function inputValidation() {
    const responsibleNameValidation = isNameValid(restaurante.responsibleName);responsibleNameValidation !== 'valid' ?setResponsibleNameError(responsibleNameValidation): setResponsibleNameError('')
    const responsiblePhoneValidation = isMandatoryPhoneValid(restaurante.responsiblePhone);responsiblePhoneValidation !== 'valid' ?setResponsiblePhoneError(responsiblePhoneValidation): setResponsiblePhoneError('')
    const comercialPhoneValidation = isPhoneCommercialValid(restaurante.comercialPhone);comercialPhoneValidation !== 'valid' ?setComercialPhoneError(comercialPhoneValidation): setComercialPhoneError('')
    
    if (responsibleNameValidation==="valid" && responsiblePhoneValidation==="valid" && comercialPhoneValidation==="valid"){
      setStep(6)
    }
  }
  async function uploadImage(){
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.canceled) {
      restaurante.profileImage = (result.assets[0].uri);
      setIsImageEmpty(false)
    }
  }
  function removeImage(){
    restaurante.profileImage =("");
      setIsImageEmpty(true)
  }
  async function uploadProduct(){
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.canceled) {
      const newProduct: Product={
        id: productId,
        uri: result.assets[0].uri
      }
      products.push(newProduct);
      setProductId(productId+1);
      restaurante.productImages.push(newProduct.uri);
      console.log(products)   
    }
  }
    function removeProduct(id:number){
      setProducts(products.filter((item) => item.id !== id));
      restaurante.productImages.splice(id,1);
      console.log(products)    
}
function margimsize():number{
  const margim = largura- 130 -(105*products.length);
  if(margim>=0){
    return margim
  }else{
    return 0;
  }
}
  
  return (
    <LinearGradient colors= {['#8169FD', '#49F392']}  start={[0, 0]}end={[1, 1]} style={styles.container}>  
      <View style={styles.logo}>
        <Logo />
        </View>
      <KeyboardAvoidingView enabled style={styles.registerView} behavior={Platform.OS == "ios" ? "padding" : "padding"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -500 }>
        <Text style={styles.title}>Cadastro:</Text>
        
        <InputField placeholder="Nome do responsável" maxLength={50}keyboardType="ascii-capable"value={restaurante.responsibleName}onChangeText={text => setRestaurante({ ...restaurante, responsibleName: text})}error={responsibleNameError}/>
        <MaskedInput placeholder="Telefone do responsável"type={"cel-phone"}keyboardType="numeric"value={restaurante.responsiblePhone}onChangeText={text => setRestaurante({ ...restaurante, responsiblePhone: text })}error={responsiblePhoneError}/>
        <MaskedInput placeholder="Telefone comercial"type={"cel-phone"}keyboardType="numeric"value={restaurante.comercialPhone}onChangeText={text => setRestaurante({ ...restaurante, comercialPhone: text })}error={comercialPhoneError}/> 
        <Text style={styles.textInput}>Faça upload da imagem do restaurante</Text>
        <ProfileImage image={restaurante.profileImage} isEmpty={isImageEmpty} upload={uploadImage} remove={removeImage}/>
        <Text style={styles.textInput}>Faça upload dos produtos</Text>
       
        <View style={styles.products}> 
         
          <FlatList
            data={products}
          
            extraData={products}
            horizontal={true}
            renderItem={({item}) => (
            <View style={styles.view}> 
            <TouchableOpacity  onPress={()=>removeProduct(item.id)} >
            <AntDesign
                name="closecircle"
                size={20}
                color={"red"}
                style={styles.icon}
              >
              </AntDesign>
            </TouchableOpacity>
            <Image source={{uri: item.uri }} 
              style={{
                marginRight:10,
                borderRadius:10,
                height:80,
                width: 80}}/>   
            </View>
  )}
          />
           <UploadProduct upload={uploadProduct} margim={margimsize()}/>
        </View>
        <View style={styles.buttonView}> 
          <PrimaryButton label='Próximo' primary onPress={inputValidation}/> 
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
   
  );
  
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'flex-end',
  },
  logo:{
    flex:1,
    justifyContent:'center'
  },
  registerView:{
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    backgroundColor:'#fff',
    padding:25,
  },
  products:{
   flexDirection:'row',
  
  },
  view: {
    flexDirection:'column',
    alignItems:'flex-start',
    marginRight:10,
   
  },
  
  textInput: {
    color: "#7E7E7E",
    fontFamily: "Poppins_500Medium",
    fontSize: 14,
    lineHeight: 40,
    justifyContent:"flex-end",
    alignItems:"flex-end"
  },
  title:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:25,
    lineHeight:37.5,
    color:'#806cfb',
  },
  uploadText:{
    color:'#7E7E7E',
    fontFamily:'Poppins_500Medium',
    fontSize:14,
    lineHeight:21,
  },
  flatList:{
    flexDirection:'row'
  },
  icon:{
    marginLeft:75,
    marginBottom:-5
   
    
  },
  buttonView:{
    marginBottom: 15,
  },
})
