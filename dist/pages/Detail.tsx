import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

// apis
import {getNewsById} from '../api/News';

// tools
import {formatDate} from '../tools/dateFormat';

interface NewsData {
  id?: number;
  title?: string;
  category?: string;
  date?: string;
  author?: string;
  author_photo?: string;
  body?: string;
}

const Detail = () => {
  const [data, setData] = useState<NewsData>({});

  const getDataNewsById = async () => {
    let result = await getNewsById();

    if (result) {
      setData(result.data.Data);
      console.log(result.data.Data);
    }
  };

  useEffect(() => {
    getDataNewsById();
  }, []);

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image
          source={require('./../images/news/tari.jpeg')}
          style={styles.headerImage}
        />
        <View style={styles.headerOverflow} />
        <View style={styles.headerText}>
          <View style={styles.headerBadgeCategory}>
            <Text style={styles.headerBadgeCategoryText}>{data.category}</Text>
          </View>
          <Text style={styles.headerTextTitle}>{data.title}</Text>
          <Text style={styles.headerTextDate}>{formatDate(data.date)}</Text>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.author}>
          <Image
            source={{
              uri: data.author_photo,
            }}
            style={styles.authorImage}
          />
          <Text style={styles.authorName}>{data.author}</Text>
        </View>
        <Text style={styles.paragraph}>{data.body}</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          placeat expedita blanditiis libero qui, illum quaerat iste incidunt
          cumque ipsum ab esse id quia eveniet autem consectetur reprehenderit
          odio ipsam?
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          placeat expedita blanditiis libero qui, illum quaerat iste incidunt
          cumque ipsum ab esse id quia eveniet autem consectetur reprehenderit
          odio ipsam?
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          placeat expedita blanditiis libero qui, illum quaerat iste incidunt
          cumque ipsum ab esse id quia eveniet autem consectetur reprehenderit
          odio ipsam?
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          placeat expedita blanditiis libero qui, illum quaerat iste incidunt
          cumque ipsum ab esse id quia eveniet autem consectetur reprehenderit
          odio ipsam?
        </Text>
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
    height: 500,
    width: Dimensions.get('window').width,
  },
  headerOverflow: {
    height: 500,
    width: Dimensions.get('window').width,
    backgroundColor: '#000',
    position: 'absolute',
    opacity: 0.4,
  },
  headerText: {
    position: 'absolute',
    left: 10,
    bottom: 85,
  },
  headerTextTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  headerTextDate: {
    fontSize: 13,
    color: 'white',
    marginTop: 10,
  },
  headerBadgeCategoryText: {
    fontSize: 11,
    color: 'white',
  },
  headerBadgeCategory: {
    backgroundColor: '#ef4444',
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 100,
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
  author: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  authorImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  authorName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  paragraph: {
    marginTop: 10,
  },

  //

  footer: {
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Detail;
