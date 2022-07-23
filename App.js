import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Sayfa1 from './anaSayfalar/Sayfa1'
import Sayfa2 from './anaSayfalar/Sayfa2'
import Sayfa3 from './anaSayfalar/Sayfa3'
import ScreenEpisode from './screens/ScreenEpisode';
import ScreenCharacter from './screens/ScreenCharacter'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoteName='Sayfa1' screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen
          name='Sayfa1'
          component={Sayfa1}
         
        />
         <Stack.Screen
          name='Sayfa2'
          component={Sayfa2}
         
        />
         <Stack.Screen
          name='Sayfa3'
          component={Sayfa3}
         
        />
        <Stack.Screen
          name='ScreenEpisode'
          component={ScreenEpisode}
         
        />
        <Stack.Screen
          name='ScreenCharacter'
          component={ScreenCharacter}
         
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;