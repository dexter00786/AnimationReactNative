import {Animated, Platform, StyleSheet, Text, View} from 'react-native';
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
          {useNativeDriver: Platform.OS === 'ios' ? true : false},
        )}
        // scrollEventThrottle={16}
        bounces={false}>
        <View style={{height: 900}} />
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
    // height: 100,
  },
  scrollView: {flex: 1},
});
