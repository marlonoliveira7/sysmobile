import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LoginScreen } from "../login";

export function BotaoAcesso() {
    return ( <TouchableOpacity style={styles.container} onPress={() => {LoginScreen}}>
      <View style={styles.botaoNavegacao}>
          <Text>Acessar o sistema</Text>
      </View>
   </TouchableOpacity>)
}
export function BotaoCadastro() {
    return ( <TouchableOpacity style={styles.container} onPress={() => {LoginScreen}}>
      <View style={styles.botaoNavegacao}>
          <Text>Cadastrar</Text>
      </View>
   </TouchableOpacity>)
}

  const styles = StyleSheet.create({
    container : {
    flex:0,
    alignItems:'center',
    width: '100%',
    marginLeft: 20
    },
    logoContainer : {
      width:'80%',
      height: 340,
      justifyContent:'center',
      alignItems:'center'
  },
    botaoNavegacao:{
      backgroundColor:'#dcdcdc',
      width:'50%',
      borderWidth:2,
      borderRadius:10,
      height:45,
      padding:10,
      alignItems:'center',
      marginTop:10
    }
});