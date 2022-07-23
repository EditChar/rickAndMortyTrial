
import React, { Component, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, StyleSheet, ImageBackground, FlatList, Image, StatusBar, SafeAreaView, ActivityIndicator, Dimensions, TouchableOpacity, Easing, Animated } from 'react-native'


const { width, height } = Dimensions.get('screen');
const mainURL = "https://rickandmortyapi.com/api/episode?page=3"
const ITEM_SIZE = 50 + 20 * 3;
const Sayfa3 = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch(mainURL)
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
        //setData(json.characters);
      })
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, []);

  const scrollY = React.useRef(new Animated.Value(0)).current;
  const pressHendler = (url) => {
    <FlatList
      data={data}
      keyExtractor={({ item }, index) => item.next}
      renderItem={({ item }) => {
        <Text>{item.id}</Text>
      }}
    />
  }

  return (
    <SafeAreaView style={styles.container}>

      {isLoading ? (
        <ActivityIndicator />)
        : (
          <ImageBackground
            style={styles.RMbackground}
            blurRadius={3}
            source={require('../src/components/images/RMsky.jpg')}>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{marginLeft: 5}} onPress={()=>{
                navigation.navigate('Sayfa2')
              }}>
                <Image source={require('../src/components/images/prevpng.png')}></Image>
              </TouchableOpacity>
              
            </View>

            <Animated.FlatList
              data={data}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
              )}
              keyExtractor={(item, index) => item.id}
              contentContainerStyle={{
                padding: 5,
               // paddingTop: StatusBar.currentHeight || 35
              }}
              renderItem={({ item, index }) => {
                const inputRange = [
                  -1,
                  0,
                  ITEM_SIZE * index,
                  ITEM_SIZE * (index + 2)
                ]
                const opacityInputRange = [
                  -1,
                  0,
                  ITEM_SIZE * index,
                  ITEM_SIZE * (index + 1)
                ]
                const scale = scrollY.interpolate({
                  inputRange,
                  outputRange: [1, 1, 1, 0]
                })
                const opacity = scrollY.interpolate({
                  inputRange: opacityInputRange,
                  outputRange: [1, 1, 1, 0]
                })

                return <TouchableOpacity onPress={() => {
                  
                }}
                  style={{
                    paddingBottom: 10, paddingTop: 10, flexDirection: 'row', marginBottom: 20, backgroundColor: 'rgba(255,255,255,0.25)', borderRadius: 25, shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 10
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 20,
                    opacity,
                    transform: [{ scale }]

                  }}>
                      
                  <Image style={styles.imagestyle} source={require('../src/components/images/RMlogo.png')}></Image>

                  <Text style={{ color: 'yellow', fontSize: 20, paddingTop: 17, flexDirection: 'row', paddingLeft: 3, paddingRight: 3, fontWeight: '700' }}>
                    {item.id}</Text>

                  <Text style={{ fontSize: 13, fontWeight: 'bold', paddingBottom: 5, paddingLeft: 7 }}>
                    <View style={{ flexDirection: 'column' }}>
                      <Text style={{ color: '#cdb38b', opacity: 0.8 }}>Episode: {item.episode}</Text>
                      <Text style={{ fontSize: 17, fontWeight: "bold", color: 'white' }}>{item.name}</Text>
                      <Text style={{ color: '#cdc8b1', opacity: 0.8 }}>Air Date: {item.air_date}</Text>
                    </View>
                  </Text>

                </TouchableOpacity>

              }}
            />
          </ImageBackground>
        )}

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

export default Sayfa3;