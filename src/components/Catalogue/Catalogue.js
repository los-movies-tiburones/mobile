/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import {
  Dimensions,
  View,
  FlatList,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';

// presentational components
import Movie from '../Movie/Movie';
import Header from '../Header/Header';
import SearchHeader from '../SearchHeader/SearchHeader';
import NavigationBar from '../NavigationBar/NavigationBar';

//actions
import * as moviesActions from '../../store/actions/movieActions';
import * as genreActions from '../../store/actions/genreActions';

// screen height and width
const {width, height} = Dimensions.get('window');

class Catalogue extends Component {
  state = {
    data: [],
    page: 0,
    refreshing: false,
    error: null,
  };

  componentDidMount() {
    const {getGenres, allGenres, route, changeSearchStatus} = this.props;
    if (!allGenres.length) getGenres();
    if (route)
      if (route.params) if (route.params.activeSearch) changeSearchStatus();
    this.fetchAllMovies();
  }

  fetchAllMovies = () => {
    const {page} = this.state;
    const {getAllMovies, title, sort, genres} = this.props;
    getAllMovies(page, title, sort, genres);
  };

  _handleRefresh = () => {
    const {refresh} = this.props;
    refresh();
    this.setState(
      {
        page: 0,
      },
      () => {
        this.fetchAllMovies();
      },
    );
  };

  _handleLoadMore = () => {
    const {loadMore, movies} = this.props;
    if (movies.length > 9) {
      loadMore();
      this.setState(
        (prevState, nextProps) => ({
          page: prevState.page + 1,
        }),
        () => {
          this.fetchAllMovies();
        },
      );
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
    const {
      allGenres,
      movies,
      loading,
      activeSearch,
      title,
      navigation,
      refreshing,
      error,
    } = this.props;
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
        {activeSearch ? <SearchHeader /> : <Header allGenres={allGenres} />}
        {!loading && movies.length > 0 ? (
          <FlatList
            contentContainerStyle={{
              width: '100%',
              backgroundColor: '#00000000',
            }}
            numColumns={3}
            data={activeSearch && !title ? [] : movies}
            renderItem={({item}) => (
              <View
                style={{
                  marginTop: 25,
                  width: '33%',
                }}>
                <Movie
                  movie={item}
                  navigation={navigation}
                  size={!activeSearch ? 'Large' : 'Search'}
                />
              </View>
            )}
            keyExtractor={() => Math.random()}
            ListFooterComponent={this._renderFooter}
            onRefresh={this._handleRefresh}
            refreshing={refreshing}
            onEndReached={this._handleLoadMore}
            onEndReachedThreshold={0.5}
            initialNumToRender={10}
          />
        ) : !error ? (
          <View style={{backgroundColor: '#000000'}}>
            <ActivityIndicator />
          </View>
        ) : (
          <Text style={{alignSelf: 'center', color: 'white'}}>
            Not movies found
          </Text>
        )}
        <NavigationBar navigation={navigation} actualSection={'Library'} />
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
    movies: state.movies.movies,
    loading: state.movies.loading,
    loadingMore: state.movies.loadingMore,
    refreshing: state.movies.refreshing,
    activeSearch: state.movies.activeSearch,
    title: state.movies.title,
    sort: state.movies.sort,
    genres: state.movies.genres,
    error: state.movies.error,
    allGenres: state.topGenre.genres,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMovies: (page, title, sort, genres) =>
      dispatch(moviesActions.fetchAllMovies(page, title, sort, genres)),
    refresh: () => dispatch(moviesActions.refresh()),
    loadMore: () => dispatch(moviesActions.loadMore()),
    getGenres: () => dispatch(genreActions.fetchGenres()),
    changeSearchStatus: () => dispatch(moviesActions.changeSearchState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
