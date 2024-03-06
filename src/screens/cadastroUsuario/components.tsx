import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from 'react';
import { LoginScreen } from "../login";
import { WelcomeScreen } from "../welcome";
import logoFundo from './../../../assets/img/sysmobile.png';

export function InputCadastroUsuario() {
const [cpf, setCpf] = useState<number>(0)
const [nome, setNome] = useState<string>('')
const [email, setEmail] = useState<string>('')
const [telefone, setTelefone] = useState<number>(0)
const [senha, setSenha] = useState<string>('')
    return ( 
    <View style={styles.container}>
                <Image style={styles.logoContainer} source={logoFundo}/>
                        <TouchableOpacity style={styles.cabecalho}> 
                                <Text style={styles.corTexto}>Cadastro de Usuários</Text>
                        </TouchableOpacity>
                <TextInput style={styles.input} placeholder="CPF" 
                onChangeText={() => setCpf(cpf)} autoCorrect={false}></TextInput>
                <TextInput style={styles.input} placeholder="Nome" 
                onChangeText={() => setNome(nome)} autoCorrect={false}></TextInput>
                <TextInput style={styles.input} placeholder="Email" 
                onChangeText={() => setEmail(email)} autoCorrect={false}></TextInput>
                <TextInput style={styles.input} placeholder="Telefone" 
                onChangeText={() => setTelefone(telefone)} autoCorrect={false}></TextInput>
                <TextInput style={styles.input} placeholder="Senha" 
                onChangeText={() => setSenha(senha)} autoCorrect={false} secureTextEntry={true} ></TextInput>
   
    <TouchableOpacity style={styles.containerBotao1} onPress={() => {LoginScreen}}>
            <View style={styles.botaoNavegacao}>
                <Text style={styles.corTexto}>Gravar</Text>
            </View>
    </TouchableOpacity>   

    <TouchableOpacity style={styles.containerBotao2} onPress={() => {WelcomeScreen}}>
                    <View style={styles.botaoNavegacao}>
                        <Text style={styles.corTexto}>Voltar</Text>
                    </View>
    </TouchableOpacity> 
    </View>
)}
const styles = StyleSheet.create({
        container : {
            flex:0,
            alignItems:'center',
            justifyContent:'center',
            width: '90%'
        },
        logoContainer : {
            width:'50%',
            height: 200,
            alignItems:'center',
            marginRight: 200,
            marginTop: 5
        },
        input:{
            backgroundColor:'#dcdcdc',
            borderWidth: 1,
            borderRadius: 8,
            marginLeft: 20,
            height:40,
            width:'83%',
            padding:5,
            alignItems:'center',
            marginBottom: 18
        },
        botaoNavegacao:{
            backgroundColor:'#696969',
            width:'50%',
            borderWidth:2,
            borderRadius:10,
            height:45,
            padding:10,
            alignItems:'center',
            marginTop:10,
          },
          containerBotao1 : {
            flex:0,
            flexDirection:'row',
            alignItems: 'center',
            width: '70%'
          },
          containerBotao2 : {
            flex:0,
            flexDirection:'row',
            alignItems: 'center',
            width: '70%',
            marginLeft: 285,
            marginVertical: -55
          },
          cabecalho: {
            flex: 0,
            marginLeft: 37,
            marginTop: -40,
            backgroundColor: '#696969',
            height: '8%',
            marginVertical: 35,
            width: '100%',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center'
          },
          corTexto: {
            color: '#FFF',
            fontSize: 20
          }
});