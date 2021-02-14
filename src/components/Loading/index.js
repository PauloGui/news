import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <LottieView
            source={require('../../assets/loading-news.json')}
            autoPlay
            loop
            autoSize
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
  },
});

export default Loading;
