import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Footer = () => {

    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.buttonBuscar}
            >
                <Text style={styles.txt} ><Text style={styles.icon}>⌕</Text> Buscar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonFavoritos}
            >
                <Text style={styles.txt} ><Text style={styles.icon}>★</Text> Favoritos</Text>
            </TouchableOpacity>
        </View>
    )
   
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        flex: 0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        height:80,
        alignItems:'center',
        zIndex: 2,
        justifyContent: 'center'
    },
    buttonBuscar:{
        backgroundColor: '#ff6600',
        height: 50,
        width: '46%',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 4,
        margin: '2%',
        marginTop: 0
    },
    buttonFavoritos:{
        backgroundColor: 'purple',
        height: 50,
        width: '46%',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 4,
        margin: '2%',
        marginTop: 0
    },
    txt:{
        marginLeft: '5%',
        color: '#FFF',
        fontWeight: "bold",
        fontSize: 20
    },
});

export default Footer;