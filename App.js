// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'

function HomeScreen({navigation}) {
  return (
    <View >
      <SearchScreen  navigation={navigation}/>
    </View>
  );
};  
function ResultShow({navigation, route}){
  return(
    <View>
    <ResultsShowScreen navigation={navigation} route={route}/>
    </View>
  )
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Result" component={ResultShow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;