import * as React from 'react';
import logoMarca from './../../assets/img/sysmobile.png';
import { View, Text, Image, StyleSheet, Button} from 'react-native';
import { Link } from 'expo-router';
import { BotaoAcesso} from './components';

export interface WelcomeScreenProps {
}
export default function WelcomeScreen (props: WelcomeScreenProps) {
    return (
      <View style={styles.container}>
         <Image style= {styles.logoContainer} source={logoMarca}/>
        <BotaoAcesso/>
      </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        backgroundColor: '#FFF',
        marginLeft: -10
    },
    logoContainer : {
        width:'100%',
        height: 500,
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 10,
        marginTop: -250
    },
});