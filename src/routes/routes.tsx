import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RestaurantProfile } from "../pages/restaurante/RestaurantProfile";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login } from "../pages/login/Login";
import { OnBoarding } from "../pages/onboarding/OnBoarding";
import { UserProfile } from "../pages/pessoa/UserProfile";
import { UserEditProfile } from "../pages/pessoa/UserEditProfile";
import { UserHome } from "../pages/pessoa/UserHome";
import { UserMap } from "../pages/pessoa/UserMap";
import { UserComunity } from "../pages/pessoa/UserComunity";
import { SignUp } from "../components/SignUp";
import { Octicons, FontAwesome5  } from '@expo/vector-icons'; 
import { UserRestaurants } from "../pages/pessoa/UserRestaurants";
import { UserSettings } from "../pages/pessoa/UserSettings";
import { MapButton } from "../components/buttons/MapButton";
import { RestaurantEditProfile } from "../pages/restaurante/RestaurantEditProfile";
import { RestaurantEditProfileAddress } from "../pages/restaurante/RestaurantEditProfileAddress";
import { RestaurantEditProfilePasswordAndEmail } from "../pages/restaurante/RestaurantEditProfilePasswordAndEmail";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function TabRoutes(){
  return(
    <Tab.Navigator initialRouteName="UserHome" screenOptions={{headerShown:false, tabBarShowLabel:false,tabBarStyle:{position:'absolute',height: 70,borderTopLeftRadius:40,borderTopRightRadius:40,backgroundColor:'#fff'}}}>
      <Tab.Screen name='UserHome'   component={UserHome}        options={{tabBarIcon:() =>(<Octicons     name="home"  color={'#806CFB'}size={25}/>)}}/>
      <Tab.Screen name='Restaurants'component={UserRestaurants} options={{tabBarIcon:() =>(<Octicons     name="search"color={'#806CFB'}size={25}/>)}}/>
      <Tab.Screen name='Map'        component={UserMap}         options={{tabBarIcon:() =>(<MapButton                                  size={25}/>)}}/>
      <Tab.Screen name='Comunity'   component={UserComunity}    options={{tabBarIcon:() =>(<FontAwesome5 name="users" color={'#806CFB'}size={25}/>)}}/>
      <Tab.Screen name='UserSettings' component={UserSettings}  options={{tabBarIcon:() =>(<Octicons     name="gear"  color={'#806CFB'}size={25}/>)}}/>
    </Tab.Navigator>
  )
}

export function Routes() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ 
          headerShown:false,
        }}
      >
        <Stack.Screen name='OnBoarding' component={OnBoarding} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='UserProfile' component={UserProfile} />
        <Stack.Screen name='RestaurantProfile' component={RestaurantProfile} />
        <Stack.Screen name='UserEditProfile' component={UserEditProfile} />
        <Stack.Screen name='RestaurantEditProfile' component={RestaurantEditProfile} />
        <Stack.Screen name='RestaurantEditProfileAddress' component={RestaurantEditProfileAddress} />
        <Stack.Screen name='RestaurantEditProfilePasswordAndEmail' component={RestaurantEditProfilePasswordAndEmail} />
        <Stack.Screen name='TabRoutes' component={TabRoutes} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
