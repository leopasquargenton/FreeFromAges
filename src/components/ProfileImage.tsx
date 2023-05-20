import React from "react";
import { TouchableOpacity, Image, StyleSheet, View, ImageSourcePropType} from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface ProfileImageProps {
  image: string ;
  isEmpty:boolean
  upload: any
  remove: any
}

export function ProfileImage({image, isEmpty, upload, remove } :ProfileImageProps){
  
  return (
    isEmpty ? (
    <TouchableOpacity onPress={upload} style={styles.view}>
      <Image style={styles.image} source={require('../assets/images/uploadImage.png')} />
    </TouchableOpacity>
      ) : (
        <View style={styles.view}>
          <TouchableOpacity  onPress={remove} >
            <AntDesign
                name="closecircle"
                size={20}
                color={"red"}
                style={styles.icon}
              >
              </AntDesign>
            </TouchableOpacity>
          <TouchableOpacity onPress={upload}>
            <Image style={styles.image}  source={{uri:image}} />
          </TouchableOpacity>
        </View>
      )
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    
  },
  icon:{
    marginLeft:75,
    marginBottom:-5
   
    
  },
  view: {
    flexDirection:'column',
    alignItems:'flex-start',
    marginRight:10,
  },
});
