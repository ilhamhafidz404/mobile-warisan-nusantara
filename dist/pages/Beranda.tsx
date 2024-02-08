import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';

const Beranda = () => {
  return (
    <ScrollView>
      <View
        style={{
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('./../images/header.jpg')}
          style={{
            height: 350,
            width: Dimensions.get('window').width,
          }}
        />

        <View
          style={{
            height: 350,
            width: Dimensions.get('window').width,
            backgroundColor: '#000',
            position: 'absolute',
            opacity: 0.4,
          }}
        />

        <View
          style={{
            position: 'absolute',
            top: 0,
            zIndex: 100,
            marginTop: 100,
          }}>
          <TextInput
            style={{
              width: Dimensions.get('window').width - 40,
              borderRadius: 100,
              backgroundColor: 'white',
              paddingHorizontal: 25,
            }}
            placeholder="Search..."
          />
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 25,
            }}>
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
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 5,
                }}>
                Tari
              </Text>
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
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 5,
                }}>
                Musik
              </Text>
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
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 5,
                }}>
                Makanan
              </Text>
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
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 5,
                }}>
                Event
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 10,
          padding: 15,
          backgroundColor: 'white',
          marginTop: -40,
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          RAGAM BERITA
        </Text>
      </View>
    </ScrollView>
  );
};

export default Beranda;
