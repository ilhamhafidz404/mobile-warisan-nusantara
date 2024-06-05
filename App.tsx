import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// pages
import Detail from './dist/pages/Detail';
import Application from './dist/layouts/Application';

// icons
import FaIcon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Application"
            component={Application}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              title: 'DetailBerita',
              headerStyle: {backgroundColor: '#fff'},
              headerTintColor: '#D63447',
              headerRight: () => (
                <FaIcon
                  name="bell-o"
                  color="#D63447"
                  size={20}
                  style={{
                    marginRight: 10,
                  }}
                  onPress={() => {}}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
