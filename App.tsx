import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button} from 'react-native';

// pages
import Login from './dist/pages/Login';
import Register from './dist/pages/Register';
import Beranda from './dist/pages/Beranda';
import Detail from './dist/pages/Detail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Beranda"
            component={Beranda}
            options={{
              title: 'Warisan Nusantara',
              headerTintColor: '#fff',
              headerStyle: {backgroundColor: '#181818'},
              headerBackVisible: false,
              headerRight: () => (
                <Button onPress={() => {}} title="==" color="#181818" />
              ),
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              title: 'Warisan Nusantara',
              headerTintColor: '#fff',
              headerStyle: {backgroundColor: '#181818'},
              headerBackVisible: true,
              headerRight: () => (
                <Button onPress={() => {}} title="==" color="#181818" />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
