/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';

// Components
import LinearGradient from 'react-native-linear-gradient';
import NavigationHeader from '../NavigationHeader/NavigationHeader';
import Movie from '../Movie/Movie';
import NavigationBar from '../NavigationBar/NavigationBar';
// Actions
import * as genreActions from '../../store/actions/genreActions';
import {stylesLargeTop} from '../Movie/movieStyles';

// Screen Properties
const {width, height} = Dimensions.get('window');

class ShowAllGenreScreen extends Component {
  state = {
    data: [],
    page: 0,
    error: null,
  };

  componentDidMount() {
    const {clearMovies} = this.props;
    clearMovies();
    this.fetchMoviesByGenre();
  }

  fetchMoviesByGenre = () => {
    const {page} = this.state;
    const {getMoviesByGenre, route} = this.props;
    const {genre} = route.params;
    getMoviesByGenre(genre, page);
  };

  _handleLoadMore = () => {
    const {loadMore, moviesByGenre, route} = this.props;
    const {genre} = route.params;
    if (moviesByGenre.length > 9) {
      if (genre === 'Top 100' && moviesByGenre.length === 100) {
        console.log('Reach Top 100');
      } else {
        loadMore();
        this.setState(
          (prevState, nextProps) => ({
            page: prevState.page + 1,
          }),
          () => {
            this.fetchMoviesByGenre();
          },
        );
      }
    }
  };

  _renderFooter = () => {
    return this.props.loadingMore ? (
      <View
        style={{
          position: 'relative',
          width: width,
          height: height,
          paddingVertical: 20,
          marginTop: 10,
          marginBottom: 10,
        }}>
        <ActivityIndicator animating size="large" />
      </View>
    ) : null;
  };

  render() {
    const {route, navigation, moviesByGenre, loading, error} = this.props;
    const {genre} = route.params;

    return (
      <LinearGradient
        start={{x: 0.01, y: 0.01}}
        end={{x: 0, y: 1}}
        colors={[
          '#000000',
          '#000000',
          '#000000',
          '#000000',
          '#243676',
          '#3462FF',
        ]}
        style={styles.app}>
        <NavigationHeader title={genre} navigation={navigation} />

        {!loading && moviesByGenre.length > 0 ? (
          <FlatList
            contentContainerStyle={{
              width: '100%',
              backgroundColor: '#00000000',
              paddingLeft: 7,
              paddingRight: 12,
            }}
            numColumns={3}
            data={moviesByGenre}
            renderItem={({item}) => (
              <View
                style={{
                  marginTop: 25,
                  width: '34%',
                }}>
                <Movie
                  movie={item}
                  navigation={navigation}
                  styles={stylesLargeTop}
                />
              </View>
            )}
            keyExtractor={() => Math.random()}
            ListFooterComponent={this._renderFooter}
            onEndReached={this._handleLoadMore}
            onEndReachedThreshold={0.5}
            initialNumToRender={10}
          />
        ) : !error ? (
          <View style={{backgroundColor: '#000000', marginTop: 30}}>
            <ActivityIndicator />
          </View>
        ) : (
          <Text style={{alignSelf: 'center', color: 'white'}}>
            Not movies found
          </Text>
        )}
        <NavigationBar navigation={navigation} actualSection={'Top'} />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#000000',
    height: '100%',
  },
});

const mapStateToProps = (state) => {
  return {
    moviesByGenre: state.genre.moviesByGenre,
    loading: state.genre.loading,
    loadingMore: state.genre.loadingMore,
    error: state.genre.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoviesByGenre: (genre, page) =>
      dispatch(genreActions.fetchMoviesByGenre(genre, page)),
    loadMore: () => dispatch(genreActions.loadMore()),
    clearMovies: () => dispatch(genreActions.clearMovies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllGenreScreen);
