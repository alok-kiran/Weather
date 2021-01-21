import React from 'react';
import {
  StyleSheet,
  Text,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  View
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import SearchInput from './components/SearchInput'
import getImageForWeather from './utils/getImageForWeather';

const App = () => {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="height"
  >
    <ImageBackground
      source={getImageForWeather('Clear')}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <View style={styles.detailsContainer}>
        <Text style={[styles.largeText, styles.textStyle]}>
          San Francisco
        </Text>
        <Text style={[styles.smallText, styles.textStyle]}>
Light Cloud
        </Text>
        <Text style={[styles.largeText, styles.textStyle]}>
24° </Text>
        <SearchInput placeholder="Search any city" />
      </View>
    </ImageBackground>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white'  
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
},
 imageContainer: {
    flex: 1,
},
image: {
  resizeMode: 'cover',
  flex: 1,
  height: null,
  width: null
},
detailsContainer: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0,0.1)',
  paddingHorizontal: 20,
},
});

export default App;
