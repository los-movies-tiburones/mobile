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
    const {genre, moviesByGenre, navigation, allGenres} = this.props;

    return (
      <View style={styles.genreSectionView}>
        <View style={styles.genreHeader}>
          {allGenres.includes(genre) ? (
            <Text style={styles.genreTitle}>Top movies in {genre}</Text>
          ) : (
            <Text style={{...styles.genreTitle, fontWeight: '500'}}>
              Top 100
            </Text>
          )}
          <Text
            style={styles.showAllBtn}
            onPress={() => navigation.navigate('ShowAll', {genre: genre})}>
            Show All
          </Text>
        </View>
        {moviesByGenre && moviesByGenre.length > 0 ? (
          <View style={styles.genreList}>
            <FlatList
              data={moviesByGenre ? moviesByGenre : null}
              horizontal={true}
              renderItem={({item}) => (
                <View key={Math.random()}>
                  <Movie
                    movie={item}
                    navigation={navigation}
                    size={allGenres.includes(genre) ? 'Small' : 'Medium'}
                  />
                </View>
              )}
            />
          </View>
        ) : (
          <ActivityIndicator
            animating
            size="large"
            style={{marginTop: 20, marginBottom: 30}}
          />
        )}
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
    paddingRight: 30,
  },
  genreTitle: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 16,
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
  },
});

export default GenreSection;
