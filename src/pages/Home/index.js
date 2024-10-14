import React from "react";
import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button 
      title="Ir para o perfil"  
      onPress={() => navigation.navigate('Perfil')} 
      />

      {/* <Button 
      title="Muda título" 
      onPress={() => navigation.setOptions({title: 'INICIO'})} /> */}
    </View>
  );
}
