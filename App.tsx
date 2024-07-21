import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native';

// pages
import Detail from './dist/pages/Detail';
import Application from './dist/layouts/Application';

// icons
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import List from './dist/pages/List';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Notification from './dist/pages/Notification';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
              options={({navigation}) => ({
                title: 'DetailBerita',
                headerStyle: {backgroundColor: '#fff'},
                headerTintColor: '#D63447',
                headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('List')}>
                    <OcticonsIcon
                      name="bell"
                      color="#D63447"
                      size={20}
                      style={{
                        marginRight: 10,
                      }}
                    />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name="List"
              component={List}
              options={{
                title: 'List',
                headerStyle: {backgroundColor: '#fff'},
                headerTintColor: '#D63447',
                headerRight: () => (
                  <OcticonsIcon
                    name="bell"
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
            <Stack.Screen
              name="Notification"
              component={Notification}
              options={{
                title: 'Notification',
                headerStyle: {backgroundColor: '#fff'},
                headerTintColor: '#D63447',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
