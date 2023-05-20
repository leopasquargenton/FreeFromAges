import React, { useState } from "react";
import {View,StyleSheet,Text,KeyboardAvoidingView,Platform,ScrollView,} from "react-native";
import { ProfileHeader } from "../../components/headers/ProfileHeader";
import { InputField } from "../../components/inputs/InputField";
import { foodRestrictions } from "../../components/multipleCheckbox/RestrictionsData";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { RestrictionRestaurant } from "../../components/multipleCheckbox/RestrictionRestaurant";


export function UserEditProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function inputValidation(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <View style={styles.container}>
      <ProfileHeader />
      <KeyboardAvoidingView 
              enabled 
              style={styles.registerView} 
              behavior={Platform.OS == "ios" ? "padding" : "padding"} 
              keyboardVerticalOffset={Platform.OS == "ios" ? 0 : -500 }>
          <ScrollView>
              <InputField
                placeholder="Nome"
                maxLength={50}
                keyboardType="ascii-capable"
                value={name}
                onChangeText={(text) => setName(text)}
              />
              <InputField
                placeholder="E-mail"
                maxLength={50}
                keyboardType="email-address"
                value={email}
                editable={false}
                onChangeText={(text) => setEmail(text)}
              />
              <InputField
                placeholder="Senha"
                maxLength={50}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />

              <ScrollView style={styles.scroll}>
                <Text style={styles.text}>Minhas Restrições</Text>
                {foodRestrictions.map((item, index) => (
                  <View key={index}>
                    <RestrictionRestaurant id={item.id} name={item.name} />
                  </View>
                ))}
              </ScrollView>

              <PrimaryButton
                label="Adicionar nova restrição"
                primary={false}
                onPress={inputValidation}
              />
              <PrimaryButton
                label="Finalizar Cadastro"
                primary
                onPress={inputValidation}
              />
          </ScrollView>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  registerView: {
    backgroundColor:'#fff',
    padding:10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingHorizontal:4,
    height: 560,
    width: 415,    
    borderRadius: 30,
    marginTop: 335
  },
  inputView: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#fff",
    paddingTop: 8,
    paddingHorizontal: 4,
    marginBottom: 0,
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 25,
    lineHeight: 27.5,
    color: "#000",
    alignSelf: "flex-start",
  },
  scroll: {
    padding: 10,
  },

  text: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 23,
    letterSpacing: 0,
    textAlign: "left",
    padding: 10
  },
});
