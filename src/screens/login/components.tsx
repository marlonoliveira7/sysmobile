import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from 'react';
import HomeScreen from "../home";

const [usuario, setUsuario] = useState<string>('')
const [senha, setSenha] = useState<string>('')

export function Botao() {
  return ( <TouchableOpacity style={styles.container} onPress={() => {HomeScreen}}>
    <View style={styles.botaoAcessar}>
        <Text style={styles.fontLogin}>Entrar</Text>
    </View>
 </TouchableOpacity>)
}
    
export function InputLogin() {
    return (
        <View style={styles.backgroundContainer}>   
            <TextInput style={styles.input} onChangeText={() => setUsuario(usuario)}
                autoCorrect={false} placeholder='Usuário'></TextInput>
                
            <TextInput style={styles.input} onChangeText={() => setSenha(senha)}
                autoCorrect={false} placeholder='Senha' secureTextEntry={true} ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
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
    },
    botaoAcessar:{
        backgroundColor:'#35AAFF',
        width:'75%',
        borderWidth:3,
        borderRadius:20,
        height:45,
        padding:10,
        alignItems:'center',
        marginBottom:30,
        marginTop:20
    },
    input:{
        backgroundColor:'#dcdcdc',
        height:40,
        borderWidth: 3,
        width:'90%',
        borderRadius:20,
        marginBottom:20,
        fontSize:20,
        color:'#222',
        padding:10,
        alignItems:'center',
    },
    fontLogin:{
        fontSize:17,
        color: '#FFF',
    }
});