import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// pages
// import Login from './dist/pages/Login';
// import Register from './dist/pages/Register';
import Detail from './dist/pages/Detail';
import Application from './dist/layouts/Application';
// import Introduce from './dist/pages/Introduce';

// icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import DetailCategory from './dist/pages/DetailCategory';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Introduce"
            component={Introduce}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          /> */}
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
              title: 'Detail Berita',
              headerTintColor: '#fff',
              headerStyle: {backgroundColor: '#181818'},
              headerBackVisible: true,
              // headerRight: () => (
              //   <FontAwesome5Icon
              //     name="bars"
              //     color="#fff"
              //     size={15}
              //     onPress={() => {}}
              //   />
              // ),
            }}
          />
          <Stack.Screen
            name="DetailCategory"
            component={DetailCategory}
            options={{
              title: 'List Tari Daerah',
              headerTintColor: '#fff',
              headerStyle: {backgroundColor: '#181818'},
              headerBackVisible: true,
              headerRight: () => (
                <FontAwesome5Icon
                  name="bars"
                  color="#fff"
                  size={15}
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
