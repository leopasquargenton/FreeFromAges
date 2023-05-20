import { useRoute, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { InputField } from '../../components/inputs/InputField';
import { PasswordInput } from '../../components/inputs/PasswordInput';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import { Logo } from '../../components/Logo';
import React from 'react';
import { useUser } from '../../helpers/UserContext';

interface ParamsProps {
  userType: string;
}
interface Restriction {
  name: string;
  category: string;
}
export interface Adress{
  cep:string;
  uf: string;
  city: string;
  street:string;
  number:string;
  complement:string;
  latitude:string;
  longitude:string;
}

export function Login() {
  const pessoa = useUser().pessoa;
  const restaurante= useUser().restaurante;
  const route = useRoute();
  const { userType } = route.params as ParamsProps;
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [emailError ] = useState('');


  const handleRegister = () => {
    userType === 'Pessoa'? 
    navigation.navigate("SignUp",{step: 1})
    : navigation.navigate("SignUp",{step: 4})
  };

  const handleLogin = () => {
      if(userType =='Pessoa'){
        if(pessoa.name==""){
          pessoa.birthday="12-05-1994"
          pessoa.city="Porto Alegre"
          pessoa.email="joao.silva@edu.pucrs.br"
          pessoa.name="João da Silva"
          pessoa.password="12345"
          pessoa.uf="RS"
          pessoa.phone="(51) 99162-5473"
          pessoa.profileImage="https://instagram.fpoa4-1.fna.fbcdn.net/v/t51.2885-15/340812701_628451355962200_4232435016622421818_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fpoa4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=g3cDFock3FsAX-3JGie&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4MDA3NDUwMDg4MDcyNzA0Nw%3D%3D.2-ccb7-5&oh=00_AfDklxBtJ9gdDnsX4Mq-VEsNzt42dIOxavmRsPo5iqW7KQ&oe=646C4894&_nc_sid=640168"
          const newRestriction: Restriction={
            name:"Milho",
            category:"Intolerância"
          }
          pessoa.restrictions.push(newRestriction)
          const newRestriction2: Restriction={
            name:"Azeitona",
            category:"Intolerância"
          }
          pessoa.restrictions.push(newRestriction2)
          navigation.navigate('TabRoutes',{screen:'UserHome'})    
      }else{
        navigation.navigate('TabRoutes',{screen:'UserHome'})
      }
    }
if(userType=='Restaurante'){
      if(restaurante.corporativeName==""){
        restaurante.cnpj="12.345.678/0009-10"
        restaurante.corporativeName="Restaurante dos FreeFrom"
        restaurante.email="freefrom.ages@gmail.com"
        restaurante.password="1234"
        restaurante.responsibleName="Maria da Silva"
        restaurante.responsiblePhone="(51) 99843-1235"
        restaurante.comercialPhone="(51) 3372-4368"
        restaurante.profileImage="https://instagram.fpoa4-1.fna.fbcdn.net/v/t51.2885…HRC9AcumvDdxRctp65nfzw&oe=646DA079&_nc_sid=640168"
        restaurante.productImages.push("https://www.sabornamesa.com.br/media/k2/items/cache/139702ff92e93f29d84ebf976a5dfd8f_XL.jpg")
        restaurante.productImages.push("https://s2.glbimg.com/8yui5WFUGth7zJ5tObxov1SOs_A=/smart/e.glbimg.com/og/ed/f/original/2019/04/12/paella-vegetariana.jpg")
        restaurante.productImages.push("https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/01/25/20220108_153053-t87duoqovinr.jpg")
        restaurante.description="FreeFrom Club é uma plataforma que ajuda pessoas com restrições alimentares a encontrar opções de restaurantes, produtos e comunidades inclusivas em todo o mundo"
        const adress: Adress={
          cep:"90619-900",
          uf:"RS",
          city:"Porto Alegre",
          street:"Av. Ipiranga",
          number:"6681",
          complement:"",
          latitude:"-30.059152777049146",
          longitude:"-51.17262881227007",
        }
        restaurante.adress = adress;
        navigation.navigate('RestaurantProfile');
      }else{
        navigation.navigate('RestaurantProfile');
      }
    }
  }  
  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const recuperar = () => {
      email === '' ? 
      alert('Digite seu e-mail') : 
      alert(`Um e-mail foi enviado para ${email}`);
  };
  return (
    <LinearGradient 
      colors={['#8169FD', '#49F392']}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.container}>
      <View style={styles.logo}>
         <Logo/>
      </View>
      <KeyboardAvoidingView enabled style={styles.registerView} behavior={Platform.OS == "ios" ? "padding" : "padding"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -500 }>
        <Text style={styles.title}>Login</Text>
      <View style={styles.dados}>
        <InputField placeholder='E-mail'maxLength={50}keyboardType='email-address'error={emailError}value={email}onChangeText={(text) => {setEmail(text);}}/>
        <PasswordInput isVisible={isVisible}toggleVisibility={handleToggleVisibility}value={password}onChangeText={(text) => {setPassword(text)}}/>
        <TouchableOpacity style={styles.forgetPassword} onPress={recuperar}>
          <Text style={styles.recuperar}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        </View>

        <PrimaryButton label='Entrar' primary onPress={handleLogin} />
        <PrimaryButton label='Cadastrar' primary={false} onPress={handleRegister} />
        <TouchableOpacity style={styles.overview} onPress={handleLogin}>
          <Text style={styles.entrar}>Entrar </Text>
          <Text style={styles.semConta}>sem conta</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo:{
    flex:1,
    justifyContent:'center'
  },
  registerView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 25,
    lineHeight: 37.5,
    color: '#806cfb',
    alignSelf: 'flex-start', 
    paddingBottom: '10%', 
    paddingTop: '5%', 
  },
  forgetPassword: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  recuperar: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Poppins_400Regular',
    color: '#7C7C7C',
    paddingTop: 5,
    alignItems: 'center',
  },
  overview: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  entrar: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#7b77f2',
    fontFamily: 'Poppins_500Medium',
    marginVertical: 25,
  },
  semConta: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#7b77f2',
    fontFamily: 'Poppins_700Bold',
    marginVertical: 25,
  },
  dados:{
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '10%',
  },
});

