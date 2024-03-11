import * as React from 'react';
import logoMarca from './../../../assets/img/sysmobile.png'
import { View, Text, Image, StyleSheet, Button} from 'react-native';
import { LoginScreen } from '../login';
import { BotaoAcesso, BotaoCadastro } from './components';

export interface WelcomeScreenProps {
}
export function WelcomeScreen (props: WelcomeScreenProps) {
    return (
      <View style={styles.container}>
         <Image style= {styles.logoContainer} source={logoMarca}/>
        <BotaoAcesso/>
        <BotaoCadastro/>
      </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width: '90%',
    },
    logoContainer : {
        width:'100%',
        height: 500,
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 25
    },
});