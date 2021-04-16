import React, { Component } from 'react';
import { Image, Keyboard, TouchableOpacity, ScrollView, StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {};

export default class Body extends Component<Props> {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            items:[
            ],
            favorites:[  
            ],
        }
        this.insertItem = this.insertItem.bind(this);
    }

    renderItem(obj){
        return(
            <View style={styles.cardMovie}>
                <Image
                style={styles.tinyLogo}
                source={{uri: obj.item.banner}}
                />
                <View style={styles.cardContent}>
                    <View style={styles.cardText}>
                        <Text style={styles.title}>{obj.item.itemTitle}</Text>
                        <Text style={styles.year}>Ano: {obj.item.year}</Text>
                    </View>

                    <TouchableOpacity
                    style={styles.iconContent}
                    title="Favorite Button"
                    >
                        <Text style={styles.icon}>★</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    insertFavorite( tituloFavorite, chaveFavorite ){
        let favorites = this.state.favorites;
        let newItemFavorite = {
            key: chaveFavorite,
            name: tituloFavorite
        }
        
        favorites.push(newItemFavorite);
    }

    insertItem(){
        fetch('http://www.omdbapi.com/?apikey=925eba28&s='+ this.state.text , {
        method: 'GET',
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.state.items = [];
            let items = this.state.items;

            for (let index = 0; index < responseJson.Search.length; index++) {
                var titulo = responseJson.Search[index].Title;
                var ano = responseJson.Search[index].Year;
                var poster = responseJson.Search[index].Poster;

                let newItem = {
                    key: this.state.items.length.toString(),
                    itemTitle: titulo,
                    year: ano,
                    banner: poster 
                }
                items.push(newItem);
                this.setState({items});
                let text = '';
                this.setState({text});
            }
        })
        .catch((error) => {
            alert('Sua busca não encontrou um filme!');
            console.error(error);
        });
        Keyboard.dismiss();
    }

    render(){
        return(
            <View style={styles.form} nativeID='formulario'>
                <FlatList
                    data={this.state.items}
                    renderItem={this.renderItem}
                    extraData={this.state}
                />

                <View style={styles.searchBar}>
                    <TextInput
                    style={styles.input}
                    onChangeText={(text)=>{this.setState({text})}}
                    value={this.state.text}
                    placeholder="Procure Filmes por título..."
                    />
                    <TouchableOpacity
                    style={styles.button}
                    onPress={this.insertItem}
                    >
                        <Text style={styles.buttonText}>Buscar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    form:{
        flexDirection: 'column-reverse',
        marginBottom: 40
    },
    searchBar:{
        flexDirection: 'row',
    },  
    input: {
        height: 40,
        margin: 10,
        paddingLeft: 10,
        color: '#000000',
        backgroundColor: '#e0e0e0',
        borderRadius: 4,
        width: '70%',
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        height: 40,
        backgroundColor: '#ff6600',
        padding: 10,
        borderRadius: 4,
        color: '#FFF',
        width: '100%',
        paddingHorizontal: 23,
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardMovie:{
        flexDirection: 'row',
        backgroundColor: '#e1e1fe',
        padding: '3%',
        margin: '2%',
        borderRadius: 4,
    },
    tinyLogo:{
        width: 95,
        height: 140,
        borderRadius: 4,
        marginRight: '10%',
    },
    cardContent:{
        flexDirection: 'row',
        marginTop: '10%'
    },
    cardText:{
        width: 200
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold'
    },iconContent:{
        marginLeft: 10
    },
    icon:{
        marginTop: '90%',
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 26
    },
});