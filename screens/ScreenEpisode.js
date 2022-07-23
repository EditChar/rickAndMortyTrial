// Sayfalardaki mainUrl'den gelen itemler içinden "url"i fetch edip gerekli itemleri listeliyoruz.
// listelenen "characters" dizinini ScreenCharacter'e bereaber geçiriyoruz.

import React, { Component, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, ImageBackground, FlatList, Image, StatusBar, SafeAreaView, ActivityIndicator, Dimensions, TouchableOpacity, Easing, Animated } from 'react-native'
import { back } from 'react-native/Libraries/Animated/Easing';

const mainURL = "https://rickandmortyapi.com/api/episode"
const ScreenEpisode = ({ navigation, route }) => {
    const item = route.params;

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(mainURL + rurl)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                //setData(json.characters);
            })
            .catch((error) => alert(error))

    }, []);
    // useEffect(() => { 
    //     let { results } = route.params;
    //     setResults(results)
    // }, [results])

    function renderHeader(item) {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Image source={require('../src/components/images/prevpng.png')}></Image>

                </TouchableOpacity>
                <View>
                    (<Text>{item?.name}</Text> )
                </View>
            </View>
        )
    }
    function renderEpisodeDetails() {
        return (
            <View >
                <View style={{ flexDirection: 'column' }}>

                    <Text style={{ color: '#cdb38b', opacity: 0.8 }}>Episode: {item.episode}</Text> 
                    <Text style={{ fontSize: 17, fontWeight: "bold", color: 'white' }}>{item.name}</Text>
                    <Text style={{ color: '#cdc8b1', opacity: 0.8 }}>Air Date: {item.air_date}</Text>
                </View>

            </View>
        )
    }


return (
    <SafeAreaView style={styles.container}>

        <ImageBackground
            style={styles.RMbackground}
            blurRadius={3}
            source={require('../src/components/images/RMcool.jpg')}>

            <FlatList
                data={data}
                keyExtractor={(item) => item}
                renderItem={({ item, index }) => {
                    <View>
                        
                        {renderEpisodeDetails()}

                    </View>

                }}
            />


        </ImageBackground>
        )

    </SafeAreaView>
);
};

const styles = StyleSheet.create({

    RMbackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    container: {
        flex: 1,
        //aligItems: 'center' animasyonda değiştirebiliriz belki.
        alignContent: "flex-start",
        justifyContent: "flex-start",
    },
    movieText: {
        flexDirection: 'column',
        fontSize: 13,
        fontWeight: "bold"
    },
    buttonstyle: {
        width: 50,
        marginHorizontal: 300,


    },
    imagestyle: {
        width: 40,
        marginTop: 5,

    },
});

export default ScreenEpisode;



