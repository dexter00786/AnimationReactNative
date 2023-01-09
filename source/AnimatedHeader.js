import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AnimatedHeader = () => {
  const scrolling = React.useRef(new Animated.Value(-100)).current;
  const translation = scrolling.interpolate({
    inputRange: [0, 100],
    outputRange: [-100, 0],
    extrapolate: 'clamp',
  });
  return (
    <>
      <Animated.View
        style={[styles.header, , {transform: [{translateY: translation}]}]}
      />
      <Animated.ScrollView
        style={styles.scrollView}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrolling}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}>
        <View style={{backgroundColor: 'blue', height: 900}} />
      </Animated.ScrollView>
    </>
  );
};

export default AnimatedHeader;

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'tomato',
  },
  scrollView: {flex: 1},
});
