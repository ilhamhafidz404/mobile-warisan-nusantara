import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Register = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Text style={styles.appName}>Warisan Nusantara</Text>

      <Image source={require('./../images/auth.png')} style={styles.image} />

      <View
        style={{
          marginTop: 20,
        }}>
        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />

        <Button
          title="Submit"
          color={'#ef4444'}
          onPress={() => navigation.navigate('Application' as never)}
        />

        <Text
          onPress={() => navigation.navigate('Login' as never)}
          style={styles.feet}>
          Have an Account
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 40,
    color: '#2e2e42',
  },
  appName: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ef4444',
  },
  image: {
    width: Dimensions.get('window').width - 40,
    height: 300,
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginBottom: 20,
    borderColor: '#2e2e42',
  },
  feet: {
    marginTop: 20,
    fontWeight: 'bold',
    color: '#ef4444',
    textAlign: 'center',
  },
});

export default Register;
