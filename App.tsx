import { StatusBar } from 'expo-status-bar';
import { LoginScreen } from './src/screens/login';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreen } from './src/screens/welcome';
import { CadastroUsuarioScreen } from './src/screens/cadastroUsuario';

export default function App() {
  return ( <CadastroUsuarioScreen/> ); 
}