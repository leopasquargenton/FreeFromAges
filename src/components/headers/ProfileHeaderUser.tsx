import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { View, Image, StyleSheet, Text } from 'react-native';

export function ProfileHeaderUser() {
  const navigation = useNavigation();
  const [userProfileImage] = useState(require('../../assets/images/UserDefaultPhoto.png'))

  function editProfile(): void {
    navigation.navigate('UserEditProfile');    
  }

  return (
    
    <View style={styles.container}>
      <TouchableOpacity style={styles.editProfileButton} onPress={editProfile} >
        <Image source={require('../../assets/images/editProfile.png')} />
    </TouchableOpacity>
      <View style={styles.profileImageContainer}>
      <Image
        source={userProfileImage}
        style={styles.profileImage}
      />
      </View>
      
      <Text style={styles.titleWelcome}>Olá,</Text>
      <Text style={styles.titleName}>Pessoa!</Text>
      <View style={styles.numbersContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.numeroComunidades}>0</Text>
          <Text style={styles.textComunidades}> Comunidades </Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.infoContainer}>
          <Text style={styles.numeroRestricoes}>3</Text>
          <Text style={styles.textComunidades}> Restrições </Text>
        </View>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
    
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      profileImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
        marginBottom: 20,
        marginTop: 5,
        alignSelf:'center',
      },
      profileImage: {
        width: 130,
        height: 130,
        borderRadius: 50,
        marginBottom: 20,
        marginTop: -18,
        alignSelf:'center',
      },
      titleWelcome:{
        fontFamily:'Poppins_400Regular',
        fontSize:36,
        lineHeight:37.5,
        color:'#FFFFFF',
        alignSelf:'center',
        
      },
      titleName:{
        fontFamily:'Poppins_600SemiBold',
        fontSize:36,
        lineHeight:37.5,
        color:'#FFFFFF',
        alignSelf:'center',
      },
      textComunidades:{
        fontFamily:'Poppins_400Regular',
        fontSize:16,
        lineHeight: 20,
        color:'#FFFFFF',
        alignSelf:'center',
        },
      numeroComunidades:{
        fontFamily:'Poppins_600SemiBold',
        fontSize:25,
        lineHeight:55,
        color:'#FFFFFF',
        alignSelf:'center',
        textAlign: 'center',
        marginBottom: 5
      },
      verticalLine: {
        height: '80%',
        width: 1,
        backgroundColor: '#FFFFFF',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: -20
      },
      numeroRestricoes:{
        fontFamily:'Poppins_600SemiBold',
        fontSize:25,
        lineHeight:54,
        color:'#FFFFFF',
        alignSelf:'center',
        textAlign: 'center',
        marginBottom: 5
      },
      numbersContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      infoContainer: {
        alignItems: 'center',
        marginBottom: 20
      },
      editProfileButton: {
        alignSelf:'flex-end',
        margin: 20,
      },
});
