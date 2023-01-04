import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');
const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;

const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;

const images = [
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128',
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993',
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_2_1.jpg?ts=1606727889015',
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369',
  'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445',
];

const ZaraCarouselHorizontal = () => {
  console.log(height, ITEM_HEIGHT * 0.05);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{height: ITEM_HEIGHT, width: ITEM_WIDTH}}>
      <Animated.FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        snapToInterval={ITEM_WIDTH}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => {
          return (
            <View>
              <Image source={{uri: item}} style={styles.image} />
            </View>
          );
        }}
      />
      <View style={styles.pagination}>
        {images.map((_, index) => {
          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  opacity: scrollX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ]}
            />
          );
        })}
        {/* <Animated.View
          style={[
            styles.dotIndicator,
            {
              transform: [
                {
                  translateX: Animated.divide(scrollX, ITEM_WIDTH).interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, DOT_INDICATOR_SIZE],
                  }),
                },
              ],
            },
          ]}
        /> */}
      </View>
    </View>
  );
};

export default ZaraCarouselHorizontal;

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: 'cover',
  },
  pagination: {
    position: 'absolute',
    bottom: ITEM_HEIGHT * 0.05,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: '#333',
    marginRight: DOT_SPACING,
  },
  dotIndicator: {
    width: DOT_INDICATOR_SIZE,
    height: DOT_INDICATOR_SIZE,
    borderRadius: DOT_INDICATOR_SIZE,
    borderWidth: 1,
    borderColor: '#333',
    position: 'absolute',
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2,
  },
});
