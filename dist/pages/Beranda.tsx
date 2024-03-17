import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
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

// icons
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';

// apis
import {getNews} from '../api/News';
import {getEvent} from '../api/Event';

// tools
import {formatDate} from '../tools/dateFormat';

// interfaces
interface NewsItem {
  image: string;
  title: string;
  date: string;
}

interface EventsItem {
  image: string;
  title: string;
  start_date: string;
  end_date: string;
  location: string;
}

const Beranda = () => {
  const navigation = useNavigation();

  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [eventData, setEventData] = useState<EventsItem[]>([]);
  const [loading, setLoading] = useState(false);

  const getDataNewsData = async () => {
    setLoading(true);
    let result = await getNews();
    if (result) {
      setNewsData(result.data.Data);
      setLoading(false);
    }
  };

  const getDataEventData = async () => {
    setLoading(true);
    let result = await getEvent();
    if (result) {
      setEventData(result.data.Data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataNewsData();
    getDataEventData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image
          source={require('./../images/header.jpg')}
          style={styles.headerImage}
        />
        <View style={styles.headerOverflow} />
        <View style={styles.headerItemContainer}>
          <View
            style={{
              position: 'relative',
            }}>
            <TextInput style={styles.headerSearch} placeholder="Search..." />
            <FeatherIcon
              name="search"
              size={25}
              color={'#ef4444'}
              style={styles.headerSearchIcon}
            />
          </View>
          <View style={styles.headerLinksContainer}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('DetailCategory' as never);
              }}>
              <View style={styles.headerLinksItem}>
                <MaterialCommunityIcon
                  name="human-female-dance"
                  size={25}
                  color={'white'}
                />
              </View>
              <Text style={styles.headerLinksItemText}>Tari</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('DetailCategory' as never);
              }}>
              <View style={styles.headerLinksItem}>
                <FontistoIcon name="music-note" size={25} color={'white'} />
              </View>
              <Text style={styles.headerLinksItemText}>Musik</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('DetailCategory' as never);
              }}>
              <View style={styles.headerLinksItem}>
                <FontAwesome6Icon name="bowl-food" size={25} color={'white'} />
              </View>
              <Text style={styles.headerLinksItemText}>Makanan</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('DetailCategory' as never);
              }}>
              <View style={styles.headerLinksItem}>
                <MaterialIcon name="architecture" size={25} color={'white'} />
              </View>
              <Text style={styles.headerLinksItemText}>Arsitektur</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.eventMain}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <View style={styles.sectionTitle}>
            <View style={styles.sectionTitleIcon}>
              <MaterialIcon name="event" size={15} color={'#fff'} />
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
            <EntypoIcon
              name="chevron-small-right"
              size={15}
              color={'#ef4444'}
            />
          </View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {eventData.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('Detail' as never)}
              style={{marginRight: 7}}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.eventCardImage}
              />
              <View>
                <Text style={{fontWeight: '500', color: 'black'}}>
                  {item.title}
                </Text>
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
                  <Text style={{fontSize: 10}}>{item.location}</Text>
                </View>
                {/* <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 3,
                  }}>
                  <MaterialCommunityIcon
                    name="timelapse"
                    size={10}
                    style={{marginRight: 5}}
                  />
                  <Text style={{fontSize: 10}}>{formatDate('2024-02-09')}</Text>
                </View> */}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {/*  */}

      <View style={{marginTop: 80}} />

      {/*  */}
      <View style={styles.main}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <View style={styles.sectionTitle}>
            <View style={styles.sectionTitleIcon}>
              <MaterialIcon name="article" size={15} color={'#fff'} />
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
            <EntypoIcon
              name="chevron-small-right"
              size={15}
              color={'#ef4444'}
            />
          </View>
        </View>

        {loading ? (
          <Text
            style={{
              textAlign: 'center',
            }}>
            Loading...
          </Text>
        ) : (
          newsData.map(item => (
            // <SkeletonContent isLoading={true}>
            // </SkeletonContent>
            <TouchableOpacity
              key={item.title}
              style={styles.newsCard}
              onPress={() => navigation.navigate('Detail' as never)}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.newsCardImage}
              />
              <View style={{flexShrink: 1}}>
                <Text style={{fontWeight: '500', color: 'black'}}>
                  {item.title}
                </Text>
                <Text style={{marginTop: 5, fontSize: 12}}>
                  {formatDate(item.date)}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>

      <Text style={styles.footer}>Copyright by ALOPE 2024</Text>
    </ScrollView>
  );
};

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
  headerSearchIcon: {
    position: 'absolute',
    right: 20,
    top: '50%',
    transform: [{translateY: -13}],
  },
  headerLinksContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25,
  },
  headerLinksItem: {
    width: 50,
    height: 50,
    backgroundColor: '#ef4444',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLinksItemText: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },

  //

  eventMain: {
    marginHorizontal: 7,
    padding: 20,
    backgroundColor: 'white',
    marginTop: -60,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
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
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  sectionTitleIcon: {
    width: 27,
    height: 27,
    borderRadius: 200,
    backgroundColor: '#ef4444',
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
    height: 100,
    width: 150,
    borderRadius: 5,
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

  //

  footer: {
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Beranda;
