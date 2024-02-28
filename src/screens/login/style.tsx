import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
        logoContainer : {
            width:'80%',
            height: 275,
            justifyContent:'center',
            alignItems:'center'
        },
        bemVindo: {
            fontSize: 20,
            marginVertical: 15,
            width: '32%',
            backgroundColor:'#35AAFF',
            color:'#FFF',
            padding: 5,
            height:30,
            borderWidth:1
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
        input:{
            backgroundColor:'#FFF',
            height:40,
            borderWidth: 3,
            width:'90%',
            borderRadius:5,
            marginBottom:20,
            fontSize:20,
            color:'#222',
            padding:10,
            alignItems:'center',
        },
        botaoAcessar:{
            backgroundColor:'#35AAFF',
            width:'65%',
            borderWidth:3,
            borderRadius:5,
            height:40,
            padding:10,
            alignItems:'center',
            marginBottom:30,
            marginTop:20
        },
        fontLogin:{
            fontSize:17,
            color: '#FFF',
        }
});