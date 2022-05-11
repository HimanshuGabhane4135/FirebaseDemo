import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';


const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    messaging().getToken().then(token => {
      console.log(token);
    });
  },[]);
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
