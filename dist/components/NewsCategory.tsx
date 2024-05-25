import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function NewsCategory() {
  const styles = StyleSheet.create({
    badge: {
      backgroundColor: '#F6F7FA',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 3,
      marginRight: 5,
    },
    activeBadge: {
      backgroundColor: '#D63447',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 3,
      marginRight: 5,
    },
  });

  return (
    <ScrollView horizontal style={{marginBottom: 15}}>
      <View style={styles.activeBadge}>
        <Text style={{color: '#fff'}}>Semua</Text>
      </View>
      <View style={styles.badge}>
        <Text style={{color: '#9D9FA0'}}>Makanan</Text>
      </View>
      <View style={styles.badge}>
        <Text style={{color: '#9D9FA0'}}>Musik</Text>
      </View>
      <View style={styles.badge}>
        <Text style={{color: '#9D9FA0'}}>Suku</Text>
      </View>
      <View style={styles.badge}>
        <Text style={{color: '#9D9FA0'}}>Arsitektur</Text>
      </View>
      <View style={styles.badge}>
        <Text style={{color: '#9D9FA0'}}>Tari</Text>
      </View>
      <View style={styles.badge}>
        <Text style={{color: '#9D9FA0'}}>Upacara</Text>
      </View>
    </ScrollView>
  );
}
