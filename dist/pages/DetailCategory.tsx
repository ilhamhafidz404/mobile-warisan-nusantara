import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import React, {useEffect, useState} from 'react';

// icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

// apis
import {getTari} from '../api/Tari';

// interfaces
interface TariItem {
  id: number;
  name: string;
  from: string;
  image: string;
}

const dataFilter = [
  {label: 'Jawa Barat', value: '1'},
  {label: 'Jawa Tengah', value: '2'},
  {label: 'Kalimantan Utara', value: '3'},
  {label: 'Aceh', value: '4'},
  {label: 'Sulawesi Selatan', value: '5'},
  {label: 'Bengkulu', value: '6'},
  {label: 'Sumatra Selatan', value: '7'},
  {label: 'Papua', value: '8'},
];

export default function DetailCategory() {
  const navigation = useNavigation();

  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  const [data, setData] = useState<TariItem[]>([]);

  const getDataTari = async () => {
    let result = await getTari();

    if (result) {
      setData(result.data.Data);
      console.log(result.data.Data[0]);
    }
  };

  useEffect(() => {
    getDataTari();
  }, []);

  return (
    <>
      <View
        style={{
          padding: 10,
          backgroundColor: '#eaeaea',
          flexDirection: 'row',
          gap: 10,
          borderBottomColor: 'white',
          borderBottomWidth: 7,
        }}>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: '#ef4444'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dataFilter}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Filter Provinsi' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <FontAwesome5Icon
              style={styles.icon}
              color={isFocus ? '#ef4444' : '#333'}
              name="filter"
              size={20}
            />
          )}
        />
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#ef4444',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 7,
          }}>
          <FontAwesome5Icon name="search" size={17} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{
          paddingHorizontal: 10,
          paddingBottom: 40,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            marginBottom: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <View>
              <FontAwesome5Icon
                name="info-circle"
                color={'#ef4444'}
                size={25}
              />
            </View>
            <Text
              style={{
                color: 'black',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                {data.length}
              </Text>{' '}
              Tarian Daerah Terlihat
            </Text>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcon
              name="dots-horizontal"
              size={25}
              color={'#333'}
            />
          </TouchableOpacity>
        </View>

        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: 'row',
              gap: 15,
              alignItems: 'center',
              marginBottom: 10,
            }}
            onPress={() => {
              navigation.navigate('Detail' as never);
            }}>
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                width: 130,
                height: 100,
                borderRadius: 5,
              }}
            />
            <View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'black',
                }}>
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 7,
                }}>
                <FontAwesome5Icon name="map-marked-alt" />
                <Text>{item.from}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: '#eaeaea',
                width: 20,
                height: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 200,
                position: 'absolute',
                right: 10,
              }}>
              <FontAwesome5Icon name="chevron-right" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
        <View
          style={{
            backgroundColor: '#eaeaea',
            paddingVertical: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
            }}>
            Anda sudah mencapai akhir
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    width: Dimensions.get('window').width - 80,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  icon: {
    marginRight: 10,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
