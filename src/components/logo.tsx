import { StyleSheet } from 'react-native'
import {Image } from 'react-native'
import logoSistema from './../../../assets/img/sysmobile.png'

export function Logomarca() {
   return ( <Image style={styles.logoContainer} source={logoSistema}/>) 
}

export const styles = StyleSheet.create({
    logoContainer : {
        width:'80%',
        height: 340,
        justifyContent:'center',
        alignItems:'center'
    },
    bemVindo: {
        fontSize: 21,
        marginVertical: 15,
        width: '50%',
        color:'#000000',
        padding: 5,
        height:30,
    },
    backgroundContainer : {
        flex: 0,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FFF',
    },
    container : {
        flex:0,
        alignItems:'center',
        justifyContent:'center',
        width: '90%'
    }
})