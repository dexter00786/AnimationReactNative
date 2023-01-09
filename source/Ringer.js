import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const OUTER_CIRCLE = 200;
const INNER_CIRCLE = 100;

const Ringer = () => {
  return (
    <>
      <View style={styles.outer_circle}></View>
      <View style={styles.inner_circle}></View>
      <Image
        source={require('../source/assets/images/calling.png')}
        style={styles.image}
      />
    </>
  );
};

export default Ringer;

const styles = StyleSheet.create({
  outer_circle: {
    height: OUTER_CIRCLE,
    borderRadius: OUTER_CIRCLE,
    width: OUTER_CIRCLE,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.3,
    alignSelf: 'center',
  },
  inner_circle: {
    height: INNER_CIRCLE,
    borderRadius: INNER_CIRCLE,
    width: INNER_CIRCLE,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(56, 138, 182, 1)',
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.36,
    alignSelf: 'center',
  },
  image: {
    height: INNER_CIRCLE / 2,
    width: INNER_CIRCLE / 2,
    borderWidth: 1,
    borderRadius: INNER_CIRCLE / 2,
    backgroundColor: 'rgba(23, 164, 239, 1)',
    position: 'absolute',
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.39,
    alignSelf: 'center',
  },
});
