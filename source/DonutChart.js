import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, Animated, Platform} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

const DonutChart = ({
  percentge = 90,
  radius = 40,
  strokeWidth = 10,
  duration = 1000,
  color = 'tomato',
  delay = 0,
  textColor,
  max = 100,
}) => {
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;

  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef(null);

  const animation = toValue => {
    console.log('running');
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: Platform.OS === 'ios' ? true : false,
    }).start();
  };

  useEffect(() => {
    animation(percentge);
    animatedValue.addListener(v => {
      if (circleRef?.current) {
        const maxPercent = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPercent) / 100;
        circleRef.current?.setNativeProps({strokeDashoffset});
        console.log(circleRef);
      }
    }, []);
    return () => {
      animatedValue.removeAllListeners();
    };
  });
  return (
    <Svg
      width={radius * 2}
      height={radius * 2}
      viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
      <G rotation={-90} origin={`${halfCircle}, ${halfCircle}`}>
        <Circle
          cx={'50%'}
          cy={'50%'}
          stroke={color}
          strokeWidth={strokeWidth}
          r={radius}
          fill={'transparent'}
          strokeOpacity={0.2}
        />
        <AnimatedCircle
          ref={circleRef}
          cx={'50%'}
          cy={'50%'}
          stroke={color}
          strokeWidth={strokeWidth}
          r={radius}
          fill={'transparent'}
          strokeDasharray={circleCircumference}
          strokeDashoffset={circleCircumference}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};

export default DonutChart;

const styles = StyleSheet.create({});
