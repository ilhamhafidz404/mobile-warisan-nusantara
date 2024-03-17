import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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

// apis

const Login = () => {
  const navigation = useNavigation();

  //
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formError, setFormError] = useState({
    email: '',
    password: '',
  });

  const formSubmit = () => {
    let validate = {
      email: '',
      password: '',
    };

    if (!formData.email) {
      validate.email = 'Email harus diisi!';
    }
    if (!formData.password) {
      validate.password = 'Password harus diisi!';
    }

    const errors = Object.values(validate).filter(value => value !== '');
    if (errors.length > 0) {
      setFormError(validate);
    } else {
      if (
        formData.email == 'ilhamhafidz@gmail.com' &&
        formData.password == 'password'
      ) {
        navigation.navigate('Application' as never);
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <Text style={styles.appName}>Warisan Nusantara</Text>

      <Image source={require('./../images/auth.png')} style={styles.image} />

      <View
        style={{
          marginTop: 20,
        }}>
        <View style={styles.formControl}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={text => setFormData({...formData, email: text})}
          />
          <Text style={styles.errorMessage}>{formError.email}</Text>
        </View>

        <View style={styles.formControl}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={formData.password}
            onChangeText={text => setFormData({...formData, password: text})}
          />
          <Text style={styles.errorMessage}>{formError.password}</Text>
        </View>

        <Button
          title="Submit"
          color={'#ef4444'}
          onPress={() => {
            formSubmit();
          }}
        />

        <Text
          style={styles.feet}
          onPress={() => navigation.navigate('Register' as never)}>
          Create an Account
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    minHeight: Dimensions.get('window').height,
    marginBottom: 20,
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
  formControl: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderColor: '#2e2e42',
  },
  errorMessage: {
    color: '#ef4444',
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 3,
  },
  feet: {
    marginTop: 20,
    marginBottom: 100,
    fontWeight: 'bold',
    color: '#ef4444',
    textAlign: 'center',
  },
});

export default Login;
