//ScreenEpisode'dan gelen "characters" dizinininde seçilen characterin apisi burada fetch edip listeliyoruz.

//ALTERNATİF: main url i https://rickandmortyapi.com/api/character verdiğimizde 34 sayfadaki 671 karakterin hepsini burada listeleyebiliriz. Ama bu saçma bir yöntem olabilir.
//screenEpisode içine de bu sayfadaki "episode" içinde seçilen episode'u aratıp filtreleyerek eğer örtüşüyorsa screenEpsiode'a gönderebiliriz.


// Sayfalardaki mainUrl'den gelen itemler içinden "url"i fetch edip gerekli itemleri listeliyoruz.
// listelenen "characters" dizinini ScreenCharacter'e beraber geçiriyoruz.

import React, { Component, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, ImageBackground, FlatList, Image, StatusBar, SafeAreaView, ActivityIndicator, Dimensions, TouchableOpacity, Easing, Animated } from 'react-native'



async function Characters(page) {
    const url = "https://rickandmortyapi.com/api/character/?page=" + page
    const characters = await fetch(url)
      .then(resp => resp.json())
      .then(function(data) {
        return data.results
      })
    return characters
  }
  
  export default function CharactersScreen({ navigation }) {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
  
    useEffect(() => {
      async function fetchData() {
        const characters = await getCharacters(page)
        setCharacters(characters)
      }
      fetchData()
    }, [page])
  
    return (
      <View style={styles.container}>
        <FlatList
          data={characters}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Character", {
                    character: item
                  })
                }}
              >
                <Image
                  style={styles.imageGrid}
                  source={{
                    uri: item.image
                  }}
                />
              </TouchableOpacity>
            </View>
          )}
          numColumns={4}
          keyExtractor={(item, index) => index}
        />
  
        <Button
          title="Next"
          onPress={() => {
            if (page < 34) setPage(page + 1)
          }}
        />
  
        <Button
          title="Previous"
          onPress={() => {
            if (page > 0) setPage(page - 1)
          }}
        />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      justifyContent: "center",
      flex: 1,
      paddingTop: 1
    },
  
    imageGrid: {
      justifyContent: "center",
      alignItems: "center",
      height: 126.3
    }
  })

export default Characters;



