import React, {useState} from 'react';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';

export default function Carausel() {
  const carauselData = [
    {
      id: 1,
      image: require('./../images/header1.jpg'),
    },
    {
      id: 2,
      image: require('./../images/header2.jpg'),
    },
    {
      id: 3,
      image: require('./../images/header3.jpg'),
    },
    {
      id: 4,
      image: require('./../images/header4.jpg'),
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
            borderLeftColor: '#e63946',
            borderLeftWidth: 3,
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          }}>
          <Text style={{fontSize: 19, color: 'white', fontWeight: 'bold'}}>
            Seren Taun
          </Text>
          <Text style={{fontSize: 13, color: 'white'}}>
            Upacara adat dari Cigugur, Kuningan
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
              width: 10,
              height: 10,
              borderRadius: 10,
              backgroundColor: '#e63946',
            }}></View>
        );
      } else {
        return (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: 10,
              backgroundColor: 'rgba(239, 68, 68, 0.6)',
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
