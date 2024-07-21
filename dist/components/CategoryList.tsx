import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity, View, Text} from 'react-native';

const CategoryList = () => {
  const navigation = useNavigation();

  const data = [
    {id: 1, title: 'Makanan', icon: require('./../images/icons/makanan.png')},
    {id: 2, title: 'Musik', icon: require('./../images/icons/musik.png')},
    {id: 3, title: 'Suku', icon: require('./../images/icons/suku.png')},
    {
      id: 4,
      title: 'Arsitektur',
      icon: require('./../images/icons/arsitektur.png'),
    },
    {id: 5, title: 'Lainnya', icon: require('./../images/icons/lainnya.png')},
    // Tambahkan data lainnya
  ];

  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('List' as never)}
          style={{
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: item.title != 'Lainnya' ? '#F6F7FA' : '#D63447',
              alignItems: 'center',
              justifyContent: 'center',
              width: 50,
              height: 50,
              borderRadius: 10,
              position: 'relative',
            }}>
            <Image source={item.icon} style={{width: 20, height: 20}} />
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
