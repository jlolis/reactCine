import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {
    
    render(){
        return (
            <View style={styles.header}>
                <Text> </Text>
                <Text> </Text>
                <Text style={ styles.title }>Cinema APP</Text>
                <Text style={ styles.txt }>Bem-vindo ao espetacular mundo do cinema</Text>
            </View>
        )
    }
}

export default Header;

const styles = StyleSheet.create({
    header: {
    }, title:{
        marginLeft: '5%',
        fontSize: 20,
        fontWeight: "bold"
    },
    txt:{
        marginLeft: '5%', 
        margin: '1%',
    },
});