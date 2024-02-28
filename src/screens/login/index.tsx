import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import HomeScreen from '../home';
import logoFundo from './../../../assets/img/sysmobile.png';

export interface LoginScreenProps {
}

export function LoginScreen (props: LoginScreenProps) {
    return (
  <View style={styles.backgroundContainer}>
        <Image style={styles.logoContainer} source={logoFundo}/>
            <Text style={styles.bemVindo}>Bem-vindo(a)</Text>
            <TextInput style={styles.input} autoCorrect={false} placeholder='Usuário'></TextInput>
            <TextInput secureTextEntry={true} style={styles.input} autoCorrect={false} placeholder='Senha'></TextInput>
        <View style={styles.botaoAcessar}>
            <TouchableOpacity onPress={HomeScreen}>
                <Text style={styles.fontLogin}>ACESSAR</Text>
            </TouchableOpacity>
        </View>
  </View>
    );
}