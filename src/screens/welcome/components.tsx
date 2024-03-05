import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LoginScreen } from "../login";

export function BotaoAcesso() {
    return ( <TouchableOpacity style={styles.container} onPress={() => {LoginScreen}}>
      <View>
          <Text>Entrar</Text>
      </View>
   </TouchableOpacity>)
}
export function BotaoCadastro() {
    return ( <TouchableOpacity style={styles.container} onPress={() => {LoginScreen}}>
      <View >
          <Text >Entrar</Text>
      </View>
   </TouchableOpacity>)
}

  const styles = StyleSheet.create({
    container : {
    flex:0,
    alignItems:'center',
    justifyContent:'center',
    width: '90%'
    }
});