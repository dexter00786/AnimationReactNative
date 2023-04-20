import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import AnimatedHeader from './source/AnimatedHeader';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      <AnimatedHeader />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
