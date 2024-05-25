import React, {useState} from 'react';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';

export default function Carausel() {
  const carauselData = [
    {
      id: 1,
      title: 'Seren Taun',
      subtitle: 'Upacara adat panen padi masyarakat Sunda',
      image: require('./../images/serentaun.jpg'),
    },
    {
      id: 2,
      title: 'Gamelan',
      subtitle: 'Alat musik tradisional Jawa dan Bali',
      image: require('./../images/header1.jpg'),
    },
    {
      id: 3,
      title: 'Nasi Liwet',
      subtitle: 'Dimasak dalam santan, disajikan dengan berbagai lauk pauk',
      image: require('./../images/nasiliwet.jpg'),
    },
  ];

  const renderItem = ({item, index}: {item: any; index: any}) => {
    return (
      <View style={{position: 'relative'}} key={index}>
        <Image
          source={item.image}
          style={{height: 270, width: Dimensions.get('window').width}}
        />
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'black',
            opacity: 0.3,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}></View>
        <View
          style={{
            zIndex: 10000,
            position: 'absolute',
            bottom: 50,
            left: 0,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <Text style={{fontSize: 19, color: 'white', fontWeight: 'bold'}}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: 'white',
              maxWidth: Dimensions.get('window').width - 100,
            }}>
            {item.subtitle}
          </Text>
        </View>
      </View>
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = scrollPosition / Dimensions.get('window').width;

    setActiveIndex(index);
  };

  const renderDotIndicators = () => {
    return carauselData.map((dot, index) => {
      if (activeIndex == index) {
        return (
          <View
            key={index}
            style={{
              width: 7,
              height: 7,
              borderRadius: 10,
              backgroundColor: '#FFFFFF',
            }}></View>
        );
      } else {
        return (
          <View
            key={index}
            style={{
              width: 5,
              height: 5,
              borderRadius: 10,
              backgroundColor: '#FFFFFF',
              opacity: 0.5,
            }}></View>
        );
      }
    });
  };

  return (
    <>
      <FlatList
        data={carauselData}
        renderItem={renderItem}
        onScroll={handleScroll}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
          marginVertical: 10,
          marginTop: -40,
        }}>
        {renderDotIndicators()}
      </View>
    </>
  );
}
