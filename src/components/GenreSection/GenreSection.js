/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

//Components
import Movie from '../Movie/Movie';

class GenreSection extends Component {
  render() {
    const {
      genre,
      moviesByGenre,
      navigation,
      movieStyle,
      title,
      showButton,
      genreTitleStyle,
    } = this.props;

    return (
      <View style={styles.genreSectionView}>
        <View style={styles.genreHeader}>
          <Text style={genreTitleStyle ? genreTitleStyle : styles.genreTitle}>
            {title}
          </Text>
          <Text
            style={showButton ? styles.showAllBtn : {display: 'none'}}
            onPress={() => navigation.navigate('ShowAll', {genre: genre})}>
            Show All
          </Text>
        </View>
        <View style={styles.genreList}>
          <FlatList
            data={moviesByGenre ? moviesByGenre : null}
            horizontal={true}
            renderItem={({item}) => (
              <View key={Math.random()}>
                <Movie
                  movie={item}
                  navigation={navigation}
                  styles={movieStyle}
                />
              </View>
            )}
            ListEmptyComponent={() => (
              <ActivityIndicator
                animating
                size="large"
                style={styles.activityIndicator}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  genreSectionView: {
    marginBottom: 10,
  },
  genreHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 35,
  },
  genreTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 23,
    backgroundColor: '#00000000',
  },
  showAllBtn: {
    fontSize: 14,
    color: '#3462FF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 16,
  },
  genreList: {
    marginTop: 16,
    marginLeft: 5,
    marginRight: 15,
    display: 'flex',
    alignItems: 'center',
  },
  activityIndicator: {
    marginTop: 20,
    marginBottom: 30,
  },
});

export default GenreSection;
