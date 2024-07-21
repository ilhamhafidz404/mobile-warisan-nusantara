import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// icons
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

// components
import NewsCategory from './NewsCategory';

export default function RagamBerita() {
  const navigation = useNavigation();
  return (
    <View style={{paddingHorizontal: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <View style={styles.sectionTitle}>
          <View style={styles.sectionTitleIcon}>
            <MaterialIcon name="article" size={20} color={'#fff'} />
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#333',
            }}>
            Ragam Berita
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 11,
              color: '#333',
            }}>
            Lainnya
          </Text>
          <EntypoIcon name="chevron-small-right" size={15} color={'#e63946'} />
        </View>
      </View>

      <NewsCategory />

      <TouchableOpacity
        style={styles.newsCard}
        onPress={() => navigation.navigate('Detail' as never)}>
        <Image
          source={require('./../images/news/1.jpg')}
          style={styles.newsCardImage}
        />
        <View style={{flexShrink: 1}}>
          <View
            style={{
              backgroundColor: '#F6F7FA',
              paddingVertical: 2,
              paddingHorizontal: 2,
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
              width: 55,
              marginBottom: 3,
            }}>
            <Text style={{color: '#9D9FA0', fontSize: 10}}>Category</Text>
          </View>
          <Text style={{fontWeight: '500', color: 'black', marginBottom: 5}}>
            Wisatawan ke Labuan Bajo Incar Wisata Budaya
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <MaterialCommunityIcon name="eye" color={'#EC5F5F'} />
            <Text style={{color: '#9D9FA0', fontSize: 12}}>1234 views</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <MaterialCommunityIcon name="calendar" color={'#EC5F5F'} />
            <Text style={{color: '#9D9FA0', fontSize: 12}}>12 Juli 2022</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.newsCard}
        onPress={() => navigation.navigate('Detail' as never)}>
        <Image
          source={require('./../images/news/2.jpeg')}
          style={styles.newsCardImage}
        />
        <View style={{flexShrink: 1}}>
          <View
            style={{
              backgroundColor: '#F6F7FA',
              paddingVertical: 2,
              paddingHorizontal: 2,
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
              width: 55,
              marginBottom: 3,
            }}>
            <Text style={{color: '#9D9FA0', fontSize: 10}}>Category</Text>
          </View>
          <Text style={{fontWeight: '500', color: 'black', marginBottom: 5}}>
            Seminar Nasional Angkat Isu Keragaman Budaya
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <MaterialCommunityIcon name="eye" color={'#EC5F5F'} />
            <Text style={{color: '#9D9FA0', fontSize: 12}}>1234 views</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <MaterialCommunityIcon name="calendar" color={'#EC5F5F'} />
            <Text style={{color: '#9D9FA0', fontSize: 12}}>12 Juli 2022</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.newsCard}
        onPress={() => navigation.navigate('Detail' as never)}>
        <Image
          source={require('./../images/news/3.jpg')}
          style={styles.newsCardImage}
        />
        <View style={{flexShrink: 1}}>
          <View
            style={{
              backgroundColor: '#F6F7FA',
              paddingVertical: 2,
              paddingHorizontal: 2,
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
              width: 55,
              marginBottom: 3,
            }}>
            <Text style={{color: '#9D9FA0', fontSize: 10}}>Category</Text>
          </View>
          <Text style={{fontWeight: '500', color: 'black', marginBottom: 5}}>
            BRI Perkenalkan Keanekaragaman Budaya Tanah Air
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <MaterialCommunityIcon name="eye" color={'#EC5F5F'} />
            <Text style={{color: '#9D9FA0', fontSize: 12}}>1234 views</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <MaterialCommunityIcon name="calendar" color={'#EC5F5F'} />
            <Text style={{color: '#9D9FA0', fontSize: 12}}>12 Juli 2022</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  sectionTitleIcon: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: '#D63447',
    // backgroundColor: 'rgba(239, 68, 68, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //

  newsCard: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  newsCardImage: {
    height: 110,
    width: 150,
    borderRadius: 5,
  },
});
