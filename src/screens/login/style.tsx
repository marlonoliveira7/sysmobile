import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        fontLogin:{
            fontSize:17,
            color: '#FFF',
        }
});