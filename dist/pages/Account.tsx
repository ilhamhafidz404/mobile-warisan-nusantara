import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// icons
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FaIcon from 'react-native-vector-icons/FontAwesome';

export default function Account() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <Image
            source={require('./../images/1.jpg')}
            style={styles.headerImage}
          />
          <View style={styles.headerOverlay}></View>
          <Image
            source={require('./../images/profile.jpg')}
            style={styles.userProfile}
          />
          <View>
            <Text style={styles.userName}>Ilham Hafidz</Text>
            <Text style={styles.userRole}>Pengguna</Text>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.sectionTitle}>
          <View style={styles.sectionTitleIcon}>
            <FaIcon name="user" size={13} color={'#fff'} />
          </View>
          <Text style={styles.sectionTitleText}>Profile</Text>
        </View>
        <TouchableOpacity style={styles.itemLinks}>
          <Text>Edit Akun</Text>
          <View style={styles.itemLinksChevronIcon}>
            <EntypoIcon name="chevron-small-right" size={17} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemLinks}>
          <Text>Sosial Media</Text>
          <View style={styles.itemLinksChevronIcon}>
            <EntypoIcon name="chevron-small-right" size={17} />
          </View>
        </TouchableOpacity>

        <View style={{marginBottom: 30}}></View>

        <View style={styles.sectionTitle}>
          <View style={styles.sectionTitleIcon}>
            <FaIcon name="cog" size={13} color={'#fff'} />
          </View>
          <Text style={styles.sectionTitleText}>Setting</Text>
        </View>
        <TouchableOpacity style={styles.itemLinks}>
          <Text>Notifikasi</Text>
          <View style={styles.itemLinksChevronIcon}>
            <EntypoIcon name="chevron-small-right" size={17} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemLinks}>
          <Text>Dark Mode</Text>
          <View style={styles.itemLinksChevronIcon}>
            <EntypoIcon name="chevron-small-right" size={17} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemLinks}>
          <Text>Bahasa</Text>
          <View style={styles.itemLinksChevronIcon}>
            <EntypoIcon name="chevron-small-right" size={17} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            navigation.navigate('Login' as never);
          }}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    backgroundColor: '#2e2e42',
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 20,
    position: 'relative',
    height: 200,
  },
  headerImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    objectFit: 'cover',
    position: 'absolute',
    maxHeight: 200,
  },
  headerOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.6,
  },
  userProfile: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  userRole: {
    fontSize: 12,
    color: '#eaeaea',
  },

  //

  main: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: -40,
    marginBottom: 40,
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
    width: 25,
    height: 25,
    borderRadius: 200,
    backgroundColor: '#ef4444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  itemLinks: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLinksChevronIcon: {
    width: 20,
    height: 20,
    borderRadius: 10000,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    marginTop: 35,
    backgroundColor: '#ef4444',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  logoutButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
