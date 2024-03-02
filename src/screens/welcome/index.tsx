import { Button } from '@rneui/base';
import * as React from 'react';
import logoMarca from './../../../assets/img/sysmobile.png'
import { View, Text, Image, StyleSheet } from 'react-native';

export interface WelcomeScreenProps {
}

export function WelcomeScreen (props: WelcomeScreenProps) {
    return (
      <View style={styles.container}>
         <Text>A melhor gestão, para sua locação.</Text>
         <Image source={logoMarca}/>
         <Button style={styles.acessoCadastro}> Acessar o sistema </Button>
         <Button style={styles.acessoCadastro}> Cadastrar </Button>
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
    acessoCadastro : {
        width: '75%',
        padding:10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoMarcaWelcome : {
        flex: 1,
        width:'100%',
        height: 800,
        marginHorizontal: 25
    }
});
