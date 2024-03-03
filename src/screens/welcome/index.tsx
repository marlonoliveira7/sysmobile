import * as React from 'react';
import logoMarca from './../../../assets/img/sysmobile.png'
import { View, Text, Image, StyleSheet, Button} from 'react-native';
import { LoginScreen } from '../login';

export interface WelcomeScreenProps {
}

export function WelcomeScreen (props: WelcomeScreenProps) {
    return (
      <View style={styles.container}>
         <Text>A melhor gestão, para sua locação.</Text>
         <Image source={logoMarca}/>
         <Button title='Acessar o sistema' onPress={LoginScreen}/>
         <Button title='Cadastrar' onPress={LoginScreen}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width: '90%'
    },
    logoMarcaWelcome : {
        flex: 1,
        width:'100%',
        height: 800,
    }
});
