import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import OcticonsIcon from 'react-native-vector-icons/Octicons';

export default function Notification() {
  const {width} = useWindowDimensions();

  return (
    <ScrollView style={{padding: 5, marginTop: 10}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          marginBottom: 5,
          paddingVertical: 14,
          paddingHorizontal: 10,
          borderRadius: 7,
          borderColor: '#eaeaea',
          borderWidth: 1,
        }}>
        <View
          style={{
            width: width * 0.2,
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#D63447',
              borderRadius: 25,
              width: 50,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <OcticonsIcon name="bell" color={'white'} size={18} />
          </View>
        </View>
        <View style={{width: width * 0.75}}>
          <Text style={{color: '#333', fontWeight: '500', fontSize: 15}}>
            Event Baru Tersedia
          </Text>
          <Text style={{color: '#222', fontSize: 12, marginTop: 2}}>
            Lorem ipsum dolor sit amet consectetur....
          </Text>
          <Text style={{color: '#333', fontSize: 11, fontStyle: 'italic'}}>
            2 Jam lalu
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
