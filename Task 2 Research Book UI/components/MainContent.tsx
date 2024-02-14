import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from './Header';
import HorizontalLine from './HorizontalLine';
import Sidebar from './Sidebar';

const MainContent = () => {
  return (
    <View>
      <Header />
      <HorizontalLine />
      <Sidebar />
    </View>
  );
};

export default MainContent;
