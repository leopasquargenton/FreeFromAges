import React, {useEffect, useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { BirthdayInput } from '../../../components/inputs/BirthdayInput';
import { OpcionalInput } from '../../../components/inputs/OpcionalInput';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import DropdownInput from '../../../components/inputs/DropDownInput';
import { Logo } from '../../../components/Logo';
import { TOSInput } from '../../../components/inputs/TOSInput';
import { isBirthdayValid, isCheckedValid, isPhoneValid } from '../../../helpers/validations';
import { Pessoa } from '../../../helpers/UserContext';

interface State {
  sigla: string;
  nome: string;
}
interface City {
  nome: string;
}

interface UserSecondStepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setPessoa: React.Dispatch<React.SetStateAction<Pessoa>>;
  pessoa: Pessoa;
}

export function UserSecondStep({setStep, setPessoa, pessoa}: UserSecondStepProps) {

  const [birthdayError, setBirthdayError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isCheckedError, setIsCheckedError] = useState('');
  const [states,setStates]=useState<string[]>([]);
  const [cities,setCities]=useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  function inputValidation() {
    const birthdayValidation = isBirthdayValid(pessoa.birthday);birthdayValidation !== 'valid' ? setBirthdayError(birthdayValidation):setBirthdayError('')
    const phoneValidation = isPhoneValid(pessoa.phone);phoneValidation !== 'valid' ? setPhoneError(phoneValidation):setPhoneError('')
    const isCheckedValidation = isCheckedValid(isChecked);isCheckedValidation !== 'valid' ? setIsCheckedError(isCheckedValidation):setIsCheckedError('')

    if (birthdayValidation==="valid" && phoneValidation==="valid" && isCheckedValidation==="valid" ){
      // ...Continuar criação do Usuário
      setStep(3)
    }
  }

  function handlePress() {
    setIsChecked(!isChecked)
  }
  

  useEffect(() => {
    const fetchDataUF = async () => {
        try {
          const response = await axios.get<State[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`);
          const {data} = response;
          const siglas = data.map(states => states.sigla)
          setStates(siglas); 
        } catch (error) {
          console.error("Erro ao buscar Estado:", error);
        }
    };
    fetchDataUF();
  }, [states]);

  useEffect(() => {
  const fetchDataCity = async () => {
    try {
      const response = await axios.get<City[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${pessoa.uf}/municipios`);
      const {data} = response;
      const cidades = data.map(cities => cities.nome)
      setCities(cidades); 
    } catch (error) {
      console.error("Erro ao buscar Cidade:", error);
    }
};
fetchDataCity();
}, [cities]);

  return (
    <LinearGradient colors= {['#8169FD', '#49F392']}  start={[0, 0]}end={[1, 1]} style={styles.container}>
      <View style={styles.logo}>
         <Logo />
      </View> 
      <KeyboardAvoidingView enabled style={styles.registerView} behavior={Platform.OS == "ios" ? "padding" : "padding"} keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -500 }>
        <Text style={styles.title}>Cadastro</Text>
        <View style={styles.inputView}>
        <BirthdayInput value={pessoa.birthday} onChangeText={text => setPessoa({ ...pessoa, birthday: text})} keyboardType='numeric' error={birthdayError} type='datetime'/>
        <OpcionalInput value={pessoa.phone}onChangeText={text => setPessoa({ ...pessoa, phone: text})}keyboardType='numeric'error={phoneError}type={'cel-phone'}placeholder='Telefone'/>
        <DropdownInput itens={states} onSelectItem={text => setPessoa({ ...pessoa, uf: text})} itemName='Estado'/>
        <DropdownInput itens={cities} onSelectItem={text => setPessoa({ ...pessoa, city: text})} itemName='Cidade'/>
        <TOSInput label='Aceito os ' labelLink='Termos e Condições' url='https://www.ages.pucrs.br/lista-de-projetos-2023-1/free-from-club/'error={isCheckedError}isChecked={isChecked} handlePress={handlePress}  />
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
  title:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:25,
    lineHeight:37.5,
    color:'#806cfb',
    padding: 10,
  },
})