import React,{Component} from 'react';
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native';

export default class Filme extends Component{
    render(){
        console.log(this.props.data);
        return(
            <View>
                <Text style={styles.nomeFilme}>{this.props.data.nome}</Text>
                <TouchableOpacity>
                <Image style={styles.capaFilme} source={{uri: this.props.data.foto}}/>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{

    },
    nomeFilme:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20
    },
    capaFilme:{
        width: 200,
        height: 200,
        borderRadius: 30,
        alignSelf: 'center',
    }
});