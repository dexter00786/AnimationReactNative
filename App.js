import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import DonutChart from './source/DonutChart';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      <DonutChart />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
