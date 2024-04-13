import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from 'react';
import HomeScreen from "../home";
import { Formik } from "formik";
import * as Yup from 'yup';

export function InputLogin() {
    return (
     <Formik initialValues={{email: '', senha: ''}}
     validationSchema={Yup.object
        ({
            email: Yup.string().required('Informe seu email').email('Digite um email válido'),
            senha: Yup.string().required('Digite sua senha').min(8, 'Necessário no mínimo 8 caracteres' )
        })
    }
        onSubmit={(dados) => {
            console.log(dados.email)
            console.log(dados.senha)
        }}
     >
            {({values,errors, handleBlur, handleChange,handleSubmit,setFieldValue}) => (

        <View style={styles.container}>  
                <Text style={styles.erroText}>{errors.email}</Text> 
            <TextInput value={values.email} style={styles.input} onChangeText={handleChange('email')}
                autoCorrect={false} placeholder='Email'></TextInput>
              
                <Text style={styles.erroText}>{errors.senha}</Text>
            <TextInput value={values.senha} style={styles.input} onChangeText={handleChange('senha')}
                autoCorrect={false} placeholder='Senha' secureTextEntry={true} ></TextInput>
                

            <TouchableOpacity style={styles.container} onPress={() =>handleSubmit()}>
                <View style={styles.botaoAcessar}>
                    <Text style={styles.fontLogin}>Entrar</Text>
                </View>
            </TouchableOpacity>
        </View>)}
    </Formik>
    )
}
export function Botao() {
    return ( <TouchableOpacity style={styles.container} onPress={() => {HomeScreen}}>
      <View style={styles.botaoAcessar}>
          <Text style={styles.fontLogin}>Entrar</Text>
      </View>
   </TouchableOpacity>)
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
    },
    erroText: {
        color: 'red',
        marginBottom: 3,
        flex: 0,
        marginRight:165
      }
});