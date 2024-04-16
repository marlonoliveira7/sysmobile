import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";

export function BotaoAcesso() {
    return ( 
    <TouchableOpacity style={styles.container}>
      <View style={styles.botaoNavegacao}>
            <Link href={"login/index"}>
                <Text>Acessar o sistema</Text>
            </Link>
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
      borderWidth:3,
      borderRadius:10,
      height:45,
      padding:10,
      alignItems:'center',
      marginTop:-100
    }
});