import React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import { ProfileHeaderUser } from '../../components/headers/ProfileHeaderUser';
import { LinearGradient } from 'expo-linear-gradient';

export function UserProfile() {
  return (
    <LinearGradient
      colors={['#8169FD', '#49F392']}
      start={[0, 0]}
      end={[1, 1]}
      style={[styles.container]}
    >
      <ProfileHeaderUser/>
      <View style={styles.registerView}>
        <View style={styles.buttonView}>
        <View style={styles.conquistasButton}>
        <Image source={require('../../assets/images/profileTrophy.png')} style={styles.iconsView} />
        <Text style={styles.subtitle}> Conquistas </Text>
        </View>
        <View style={styles.conquistasButton}>
        <Image source={require('../../assets/images/profileHeart.png')} />
        <Text style={styles.subtitle}> Salvos </Text>
        </View>
        </View>
        <View style={styles.restrictionView}>
        <Text style={styles.subtitle2}> Minhas restrições </Text>
        </View>
        <View style={styles.communityView}>
        <Text style={styles.subtitle2}> Minhas comunidades </Text>
        </View>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'flex-end',
  },
  registerView:{
    backgroundColor:'#fff',
    paddingTop:8,
    paddingHorizontal:4,   
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30
  },  
  conquistasButton:{
    backgroundColor:'#8169FD',
    paddingTop:2, 
    height: 80,
    width: 185,     
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 }
  },  
  buttonView:{
    paddingHorizontal:4, 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15
  },
  restrictionView:{
    
    paddingStart: 12,
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginTop: 15
  },
  communityView:{
    
    paddingStart: 12,
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginTop: 15
  },
  iconsView:{ 
    height: 30,
    width: 30,
    justifyContent: 'space-evenly',
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
    fontSize:19,
    lineHeight:27.5,
    color:'#FFFFFF',
  },
  subtitle2:{
    fontFamily:'Poppins_600SemiBold',
    fontSize:16.5,
    lineHeight:27.5,
    color:'#424242',
  },
  scroll:{
    padding:10,
   }
});
