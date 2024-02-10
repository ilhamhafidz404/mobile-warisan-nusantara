import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// pages
import Login from './dist/pages/Login';
import Beranda from './dist/pages/Beranda';
import {Alert, Button} from 'react-native';

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
            name="Beranda"
            component={Beranda}
            options={{
              title: 'Warisan Nusantara',
              headerTintColor: '#fff',
              headerTransparent: true,
              headerBackVisible: false,
              headerRight: () => (
                <Button onPress={() => {}} title="==" color="#333" />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
