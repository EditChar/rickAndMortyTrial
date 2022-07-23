//ScreenEpisode'dan gelen "characters" dizinininde seçilen characterin apisi burada fetch edip listeliyoruz.

//ALTERNATİF: main url i https://rickandmortyapi.com/api/character verdiğimizde 34 sayfadaki 671 karakterin hepsini burada listeleyebiliriz. Ama bu saçma bir yöntem olabilir.
//screenEpisode içine de bu sayfadaki "episode" içinde seçilen episode'u aratıp filtreleyerek eğer örtüşüyorsa screenEpsiode'a gönderebiliriz.


// Sayfalardaki mainUrl'den gelen itemler içinden "url"i fetch edip gerekli itemleri listeliyoruz.
// listelenen "characters" dizinini ScreenCharacter'e bereaber geçiriyoruz.

import React, { Component, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, ImageBackground, FlatList, Image, StatusBar, SafeAreaView, ActivityIndicator, Dimensions, TouchableOpacity, Easing, Animated } from 'react-native'



const ScreenCharacter = ({ navigation, route }) => {
    const { character } = route.params;


    function renderHeader(character) {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Image source={require('../src/components/images/prevpng.png')}></Image>

                </TouchableOpacity>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground
                style={styles.RMbackground}
                blurRadius={3}
                source={require('../src/components/images/RMcool.jpg')}>

                <View>
                    {renderEpisodeDetails()}

                    <Image style={styles.imageChar} source={{ uri: character.image }} />
                    <Text>Name : {character.name}</Text>
                    <Text>Status : {character.status}</Text>
                    <Text>Species : {character.species}</Text>

                </View>
                
            </ImageBackground>
            )

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    RMbackground: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
    imageChar: {
        position: "relative",
        width: 300,
        height: 300,
        borderWidth: 1,
        borderRadius: 150,
        padding: 100
    },
});

export default ScreenCharacter;



