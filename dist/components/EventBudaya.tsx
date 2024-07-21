import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// icons
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default function EventBudaya() {
  const navigation = useNavigation();

  return (
    <View style={{paddingHorizontal: 20, marginTop: 50}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <View style={styles.sectionTitle}>
          <View style={styles.sectionTitleIcon}>
            <MaterialIcon name="event" size={20} color={'#fff'} />
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#333',
            }}>
            Event Budaya
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

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail' as never)}
          style={{marginRight: 7}}>
          <Image
            source={require('./../images/events/ogoh.webp')}
            style={styles.eventCardImage}
          />
          <View>
            <Text style={{fontWeight: '500', color: 'black'}}>
              Festival Ogoh-ogoh
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 3,
              }}>
              <MaterialIcon name="calendar-today" color={'#EC5F5F'} />
              <Text style={{color: '#9D9FA0', fontSize: 12}}>17 sep 2024</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <FontistoIcon
                name="map-marker-alt"
                style={{marginRight: 5}}
                size={10}
              />
              <Text style={{fontSize: 10}}>Darma</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail' as never)}
          style={{marginRight: 7}}>
          <Image
            source={require('./../images/events/danauToba.webp')}
            style={styles.eventCardImage}
          />
          <View>
            <Text style={{fontWeight: '500', color: 'black'}}>
              Festival Danau Toba
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 3,
              }}>
              <MaterialIcon name="calendar-today" color={'#EC5F5F'} />
              <Text style={{color: '#9D9FA0', fontSize: 12}}>17 sep 2024</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <FontistoIcon
                name="map-marker-alt"
                style={{marginRight: 5}}
                size={10}
              />
              <Text style={{fontSize: 10}}>Darma</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail' as never)}
          style={{marginRight: 7}}>
          <Image
            source={require('./../images/events/erau.webp')}
            style={styles.eventCardImage}
          />
          <View>
            <Text style={{fontWeight: '500', color: 'black'}}>
              Festival Erau Kertanegara
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 3,
              }}>
              <MaterialIcon name="calendar-today" color={'#EC5F5F'} />
              <Text style={{color: '#9D9FA0', fontSize: 12}}>17 sep 2024</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <FontistoIcon
                name="map-marker-alt"
                style={{marginRight: 5}}
                size={10}
              />
              <Text style={{fontSize: 10}}>Darma</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
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

  eventCard: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  eventCardImage: {
    height: 100,
    width: 150,
    borderRadius: 5,
    marginBottom: 5,
  },
});
