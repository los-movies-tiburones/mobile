/* eslint-disable prettier/prettier */
import React from 'react';

import {View, TouchableOpacity, Image} from 'react-native';
import {WebView} from 'react-native-webview';

// Styles
import {styles} from '../MovieScreen/movieScreenStyles';
// Assets
import videoIcon from '../../assets/videoIcon.png';

const MovieTrailer = ({playVideo, videoId, playAction}) => {
  return (
    <>
      {!playVideo ? (
        <TouchableOpacity
          style={styles.playIconView}
          onPress={() => playAction()}>
          <Image style={styles.playIcon} source={videoIcon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.trailerView}>
          <WebView
            style={styles.trailerPlayer}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: `https://www.youtube.com/embed/${videoId}`}}
          />
        </View>
      )}
    </>
  );
};

export default MovieTrailer;
