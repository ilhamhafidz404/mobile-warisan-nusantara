import {StyleSheet, Text, View, ScrollView} from 'react-native';

// components
import Carausel from '../components/Carausel';
import CategoryList from '../components/CategoryList';
import EventBudaya from '../components/EventBudaya';
import RagamBerita from '../components/RagamBerita';

const Beranda = () => {
  return (
    <ScrollView>
      <Carausel />

      <View style={styles.container}>
        <Text style={styles.title}>WARISAN NUSANTARA</Text>

        <CategoryList />

        <EventBudaya />
        <View style={{marginTop: 20}} />
        <RagamBerita />
      </View>

      <Text style={styles.footer}>Copyright by ALOPE 2024</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 20,
    marginBottom: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    elevation: 1,
  },
  title: {
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 25,
  },
  footer: {
    textAlign: 'center',
    marginTop: 0,
    color: '#333',
    marginBottom: 20,
  },
});

export default Beranda;
