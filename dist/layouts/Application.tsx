import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from '../pages/Beranda';

// icons
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Content from '../pages/Content';
import {TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();

const Application = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Beranda}
        options={({navigation}) => ({
          title: 'Beranda',
          headerStyle: {backgroundColor: '#fff'},
          headerTintColor: '#D63447',
          tabBarActiveTintColor: '#ef4444',
          tabBarIcon: ({focused}) => (
            <FoundationIcon
              name={focused ? 'home' : 'home'}
              size={20}
              color={focused ? '#ef4444' : '#b3b3b3'}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}>
              <OcticonsIcon
                name="bell"
                color="#D63447"
                size={20}
                style={{marginRight: 18}}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen
        name="Content"
        component={Content}
        options={({navigation}) => ({
          title: 'Konten',
          headerStyle: {backgroundColor: '#fff'},
          headerTintColor: '#D63447',
          tabBarActiveTintColor: '#ef4444',
          tabBarIcon: ({focused}) => (
            <IonIcon
              name={focused ? 'newspaper' : 'newspaper'}
              size={20}
              color={focused ? '#ef4444' : '#b3b3b3'}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Notification')}>
              <OcticonsIcon
                name="bell"
                color="#D63447"
                size={20}
                style={{marginRight: 10}}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default Application;
