import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    height: 500,
    width: Dimensions.get('window').width,
  },
  headerOverflow: {
    height: 500,
    width: Dimensions.get('window').width,
    backgroundColor: '#000',
    position: 'absolute',
    opacity: 0.4,
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

  footer: {
    textAlign: 'center',
    marginVertical: 20,
  },
});

const Detail = () => {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image
          source={require('./../images/header.jpg')}
          style={styles.headerImage}
        />
        <View style={styles.headerOverflow} />
        <View
          style={{
            position: 'absolute',
            left: 10,
            bottom: 85,
          }}>
          <View
            style={{
              backgroundColor: '#fd6b87',
              alignSelf: 'flex-start',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 2,
              borderRadius: 100,
            }}>
            <Text
              style={{
                fontSize: 11,
                color: 'white',
              }}>
              Destinasi Wisata
            </Text>
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Waduk Darma Objek Wisata Kuningan
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: 'white',
              marginTop: 10,
            }}>
            12 Februari 2024
          </Text>
        </View>
      </View>

      <View style={styles.main}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 10,
          }}>
          <Image
            source={require('./../images/profile.jpg')}
            style={{
              width: 45,
              height: 45,
              borderRadius: 100,
            }}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Ilham Hafidz
          </Text>
        </View>
        <Text
          style={{
            marginTop: 20,
          }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          placeat expedita blanditiis libero qui, illum quaerat iste incidunt
          cumque ipsum ab esse id quia eveniet autem consectetur reprehenderit
          odio ipsam?
        </Text>
        <Text
          style={{
            marginTop: 10,
          }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          placeat expedita blanditiis libero qui, illum quaerat iste incidunt
          cumque ipsum ab esse id quia eveniet autem consectetur reprehenderit
          odio ipsam?
        </Text>
        <Text
          style={{
            marginTop: 10,
          }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          placeat expedita blanditiis libero qui, illum quaerat iste incidunt
          cumque ipsum ab esse id quia eveniet autem consectetur reprehenderit
          odio ipsam?
        </Text>
        <Text
          style={{
            marginTop: 10,
          }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          placeat expedita blanditiis libero qui, illum quaerat iste incidunt
          cumque ipsum ab esse id quia eveniet autem consectetur reprehenderit
          odio ipsam?
        </Text>
        <Text
          style={{
            marginTop: 10,
          }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          placeat expedita blanditiis libero qui, illum quaerat iste incidunt
          cumque ipsum ab esse id quia eveniet autem consectetur reprehenderit
          odio ipsam?
        </Text>
      </View>

      <Text style={styles.footer}>Copyright by ALOPE 2024</Text>
    </ScrollView>
  );
};

export default Detail;
