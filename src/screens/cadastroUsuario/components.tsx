import { StyleSheet, Text, Image, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from 'react';
import { LoginScreen } from "../login";
import { WelcomeScreen } from "../welcome";
import logoFundo from './../../../assets/img/sysmobile.png';
import { Formik } from "formik";
import * as Yup from 'yup';

export function InputCadastroUsuario() {
    return ( 
      <Formik 
      initialValues={{cpf: '', nome: '', email: '', telefone: '', senha:''}}
      validationSchema={Yup.object
        ({
            cpf: Yup.string().required('Campo obrigatório'),
            nome: Yup.string().required('Campo obrigatório'),
            email: Yup.string().required('Campo obrigatório').email('Digite um email válido'),
            telefone: Yup.string().required('Campo obrigatório'),
            senha: Yup.string().required('Digite sua senha').min(8, 'Necessário no mínimo 8 caracteres')
        })
    }
        onSubmit={(dados) => {
            console.log(dados.cpf)
            console.log(dados.nome)
            console.log(dados.email)
            console.log(dados.senha)
        }}
     >          
     {({values,errors,handleChange,handleSubmit}) => (

        <View style={styles.container}>
                <Image style={styles.logoContainer} source={logoFundo}/>
                        <TouchableOpacity style={styles.cabecalho}> 
                                <Text style={styles.corTexto}>Cadastro de Usuários</Text>
                        </TouchableOpacity>

                <Text style={styles.erroText}>{errors.cpf}</Text>
                <TextInput value={values.cpf} style={styles.input} placeholder="CPF" 
                onChangeText={handleChange('cpf')} autoCorrect={false}></TextInput>
                

                 <Text style={styles.erroText}>{errors.nome}</Text>
                <TextInput value={values.nome} style={styles.input} placeholder="Nome" 
                onChangeText={handleChange('nome')} autoCorrect={false}></TextInput> 
                

                <Text style={styles.erroText}>{errors.email}</Text>
                <TextInput value={values.email} style={styles.input} placeholder="Email"   
                onChangeText={handleChange('email')} autoCorrect={false}></TextInput>
                
                <Text style={styles.erroText}>{errors.telefone}</Text>
                <TextInput value={values.telefone} style={styles.input} placeholder="Telefone"
                onChangeText={handleChange('telefone')} autoCorrect={false}></TextInput>

                <Text style={styles.erroText}>{errors.senha}</Text> 
                <TextInput value={values.senha} style={styles.input} placeholder="Senha" 
               onChangeText={handleChange('senha')} autoCorrect={false} secureTextEntry={true} ></TextInput>
               
   
        <TouchableOpacity style={styles.containerBotao1} onPress={() =>handleSubmit()}>
            <View style={styles.botaoNavegacao}>
                <Text style={styles.corTexto}>Gravar</Text>
            </View>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.containerBotao2}>
            <View style={styles.botaoNavegacao}>
                <Text style={styles.corTexto}>Voltar</Text>
            </View>
        </TouchableOpacity>
        </View>)} 
        </Formik>
    )
}
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
          },
          erroText: {
            color: 'red',
            marginBottom: 3,
            flex: 0,
            marginRight:165
          }
});