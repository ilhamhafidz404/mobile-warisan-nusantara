import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryList = () => {
  const data = [
    {id: 1, title: 'Makanan', icon: 'food-variant'},
    {id: 2, title: 'Tari', icon: 'dance-ballroom'},
    {id: 3, title: 'Musik', icon: 'music-clef-treble'},
    {id: 4, title: 'Arsitektur', icon: 'warehouse'},
    {id: 5, title: 'Upacara', icon: 'trumpet'},
    {id: 6, title: 'Bahasa', icon: 'script-text'},
    {id: 7, title: 'Suku', icon: 'account-group'},
    {id: 8, title: 'Lainnya', icon: 'apps'},
    // Tambahkan data lainnya
  ];

  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            width: '25%', // Each item takes 25% of the container width for 4 columns
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: index < 4 ? 20 : 0, // Add marginBottom for every 4th item
          }}>
          <View
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.3)',
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              borderRadius: 10,
              position: 'relative',
            }}>
            <MaterialCommunityIcon
              name={item.icon}
              size={30}
              color={'#e63946'}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryList;
