import React from 'react';
import {ScrollView} from 'react-native';

// pages
import Beranda from './dist/pages/Beranda';
import Login from './dist/pages/Login';

export default function App() {
  return (
    <>
      <ScrollView>
        <Login />
        <Beranda />
      </ScrollView>
    </>
  );
}
