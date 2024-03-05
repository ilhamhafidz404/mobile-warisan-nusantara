import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    height: 400,
    width: Dimensions.get('window').width,
  },
  headerOverflow: {
    height: 400,
    width: Dimensions.get('window').width,
    backgroundColor: '#000',
    position: 'absolute',
    opacity: 0.4,
  },
  headerItemContainer: {
    position: 'absolute',
    top: 0,
    zIndex: 100,
    marginTop: 130,
  },
  headerSearch: {
    width: Dimensions.get('window').width - 40,
    borderRadius: 100,
    backgroundColor: 'white',
    paddingHorizontal: 25,
  },
  headerLinksContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25,
  },
  headerLinksItemText: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },

  //

  main: {
    marginHorizontal: 7,
    padding: 20,
    backgroundColor: 'white',
    marginTop: -60,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },

  //

  newsCard: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  newsCardImage: {
    height: 100,
    width: 150,
    borderRadius: 5,
  },

  //

  footer: {
    textAlign: 'center',
    marginVertical: 20,
  },
});

const newsData = [
  {
    id: 1,
    image: require('./../images/header.jpg'),
    title: 'WADUK DARMA JADI DESTINASI PILIHAN JABAR',
    date: '2 Februari 2024',
  },
  {
    id: 2,
    image: require('./../images/header.jpg'),
    title: 'WADUK DARMA JADI DESTINASI PILIHAN JABAR',
    date: '2 Februari 2024',
  },
  {
    id: 3,
    image: require('./../images/header.jpg'),
    title: 'WADUK DARMA JADI DESTINASI PILIHAN JABAR',
    date: '2 Februari 2024',
  },
];

const Beranda = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image
          source={require('./../images/header.jpg')}
          style={styles.headerImage}
        />
        <View style={styles.headerOverflow} />
        <View style={styles.headerItemContainer}>
          <TextInput style={styles.headerSearch} placeholder="Search..." />
          <View style={styles.headerLinksContainer}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#51d1fc',
                  borderRadius: 100,
                }}
              />
              <Text style={styles.headerLinksItemText}>Tari</Text>
            </View>

            <View
              style={{
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#fdb865',
                  borderRadius: 100,
                }}
              />
              <Text style={styles.headerLinksItemText}>Musik</Text>
            </View>

            <View
              style={{
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#fd6b87',
                  borderRadius: 100,
                }}
              />
              <Text style={styles.headerLinksItemText}>Makanan</Text>
            </View>

            <View
              style={{
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#a980dd',
                  borderRadius: 100,
                }}
              />
              <Text style={styles.headerLinksItemText}>Event</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.main}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          RAGAM BERITA
          {/* <Icon name="comment" size={30} color="red" /> */}
        </Text>

        {newsData.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.newsCard}
            onPress={() => navigation.navigate('Detail' as never)}>
            <Image source={item.image} style={styles.newsCardImage} />
            <View style={{flexShrink: 1}}>
              <Text style={{fontWeight: '500'}}>{item.title}</Text>
              <Text style={{marginTop: 5, fontSize: 12}}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.footer}>Copyright by ALOPE 2024</Text>
    </ScrollView>
  );
};

export default Beranda;
