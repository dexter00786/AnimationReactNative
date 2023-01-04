import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import ZaraCarousel from './source/ZaraCarousel';
import ZaraCarouselHorizontal from './source/ZaraCarouselHorizontal';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <ZaraCarouselHorizontal />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
