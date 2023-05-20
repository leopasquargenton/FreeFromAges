import React from "react";
import { TouchableOpacity, Image, StyleSheet} from "react-native";

interface UploadProductProps {
  upload: any,
  margim:number
}

export function UploadProduct({upload, margim} :UploadProductProps){
  return (
    <TouchableOpacity onPress={upload}>
      <Image style={{
        width: 80,
        height: 80,
        borderRadius: 10,
        marginTop:15,
        marginLeft:0,
        marginRight: margim}} 
        source={
          require('../assets/images/uploadImage.png')
          } />
    </TouchableOpacity>
  )
}
