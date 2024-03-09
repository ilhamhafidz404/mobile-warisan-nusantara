import {useNavigation} from '@react-navigation/native';
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

const newsData = [
  {
    id: 1,
    image: require('./../images/news/tari.jpeg'),
    title: 'Pagelaran Seni Tari Pelajar di Semarang',
    date: '2 Februari 2024',
  },
  {
    id: 2,
    image: require('./../images/news/kebaya.jpeg'),
    title: 'Mari Kenali Kebaya, Pakai Adat Sunda',
    date: '2 Februari 2024',
  },
  {
    id: 3,
    image: require('./../images/news/topeng.jpeg'),
    title: 'Kenalkan Topeng Panji Kepada Pelajar Lewat Lomba Mewarnai',
    date: '2 Februari 2024',
  },
];

// icons
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import FeatherIcon from 'react-native-vector-icons/Feather';

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
            <View
              style={{
                alignItems: 'center',
              }}>
              <View style={styles.headerLinksItem}>
                <MaterialCommunityIcon
                  name="human-female-dance"
                  size={25}
                  color={'white'}
                />
              </View>
              <Text style={styles.headerLinksItemText}>Tari</Text>
            </View>

            <View
              style={{
                alignItems: 'center',
              }}>
              <View style={styles.headerLinksItem}>
                <FontistoIcon name="music-note" size={25} color={'white'} />
              </View>
              <Text style={styles.headerLinksItemText}>Musik</Text>
            </View>

            <View
              style={{
                alignItems: 'center',
              }}>
              <View style={styles.headerLinksItem}>
                <FontAwesome6Icon name="bowl-food" size={25} color={'white'} />
              </View>
              <Text style={styles.headerLinksItemText}>Makanan</Text>
            </View>

            <View
              style={{
                alignItems: 'center',
              }}>
              <View style={styles.headerLinksItem}>
                <MaterialIcon name="architecture" size={25} color={'white'} />
              </View>
              <Text style={styles.headerLinksItemText}>Arsitektur</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.main}>
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
    marginBottom: 20,
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

  footer: {
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Beranda;
