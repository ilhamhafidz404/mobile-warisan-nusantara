import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// icons
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import EntypoIcon from 'react-native-vector-icons/Entypo';

// apis
import {getNews} from '../api/News';
import {getEvent} from '../api/Event';

// tools
import {formatDate} from '../tools/dateFormat';
import Carausel from '../components/Carausel';
import CategoryList from '../components/CategoryList';
import NewsCategory from '../components/NewsCategory';

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
  const [loadingGetNews, setLoadingGetNews] = useState(false);
  const [loadingGetEvents, setLoadingGetEvents] = useState(false);

  const getDataNewsData = async () => {
    setLoadingGetNews(true);
    let result = await getNews();
    if (result) {
      setNewsData(result.data.Data);
      setLoadingGetNews(false);
    }
  };

  const getDataEventData = async () => {
    setLoadingGetEvents(true);
    let result = await getEvent();
    if (result) {
      setEventData(result.data.Data);
      setLoadingGetEvents(false);
    }
  };

  useEffect(() => {
    getDataNewsData();
    getDataEventData();
  }, []);

  return (
    <ScrollView>
      <Carausel />

      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 20,
          marginBottom: 20,
          borderTopLeftRadius: 20,
          borderRadius: 20,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          elevation: 1,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#333',
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 25,
          }}>
          WARISAN NUSANTARA
        </Text>

        <CategoryList />

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
              <EntypoIcon
                name="chevron-small-right"
                size={15}
                color={'#e63946'}
              />
            </View>
          </View>

          <ScrollView
            horizontal={!loadingGetEvents}
            showsHorizontalScrollIndicator={false}>
            {loadingGetEvents ? (
              <Text
                style={{
                  textAlign: 'center',
                }}>
                Loading...
              </Text>
            ) : (
              eventData.map((item, index) => (
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
                        gap: 3,
                      }}>
                      <MaterialIcon name="calendar-today" color={'#EC5F5F'} />
                      <Text style={{color: '#D9D9D9', fontSize: 12}}>
                        17 sep 2024
                      </Text>
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
                      <Text style={{fontSize: 10}}>{item.location}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            )}
          </ScrollView>
        </View>
        {/*  */}
        {/*  */}
        <View style={{marginTop: 20}} />
        {/*  */}
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
              <EntypoIcon
                name="chevron-small-right"
                size={15}
                color={'#e63946'}
              />
            </View>
          </View>

          <NewsCategory />

          {loadingGetNews ? (
            <Text
              style={{
                textAlign: 'center',
              }}>
              Loading...
            </Text>
          ) : (
            newsData.map(item => (
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
                  <View
                    style={{
                      backgroundColor: '#F6F7FA',
                      paddingVertical: 2,
                      paddingHorizontal: 5,
                      borderRadius: 6,
                      height: 23,
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 70,
                      marginBottom: 3,
                    }}>
                    <Text style={{color: '#9D9FA0', fontSize: 12}}>
                      Category
                    </Text>
                  </View>
                  <Text style={{fontWeight: '500', color: 'black'}}>
                    {item.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 5,
                    }}>
                    <MaterialCommunityIcon name="eye" color="#9D9FA0" />
                    <Text style={{color: '#9D9FA0', fontSize: 12}}>
                      1234 views
                    </Text>
                  </View>
                  <Text style={{marginTop: 5, fontSize: 12}}>
                    {formatDate(item.date)}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
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
    backgroundColor: '#e63946',
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
    // marginTop: -60,
    borderRadius: 7,
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
    borderRadius: 7,
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
    marginTop: 0,
    color: '#333',
    marginBottom: 20,
  },
});

export default Beranda;
