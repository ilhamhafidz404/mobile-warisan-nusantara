import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Introduce = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Image
        source={require('./../images/1.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}></View>

      <Text style={styles.team}>ALOPE TEAM</Text>

      <View style={styles.container}>
        <Text style={styles.title}>WARISAN NUSANTARA</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          voluptatibus minus illum architecto quam repellendus reprehenderit sit
          iure ducimus, odio quidem sunt quia totam nisi blanditiis, excepturi
          nobis quis unde!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Login' as never);
          }}>
          <Text style={styles.buttonText}>Buka Aplikasi</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    opacity: 0.4,
  },
  team: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    width: Dimensions.get('window').width - 50,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paragraph: {
    color: 'white',
    fontSize: 14,
    marginBottom: 30,
  },
  button: {
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#ef4444',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Introduce;
