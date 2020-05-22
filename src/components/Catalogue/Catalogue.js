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

//actions
import * as moviesActions from '../../store/actions/movieActions';

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
    if (movies.length > 6) {
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
        {this.props.activeSearch ? <SearchHeader /> : <Header />}
        {!this.props.loading && this.props.movies.length > 0 ? (
          <FlatList
            contentContainerStyle={{
              width: '100%',
              backgroundColor: '#00000000',
            }}
            numColumns={1}
            data={
              this.props.activeSearch && !this.props.title
                ? []
                : this.props.movies
            }
            renderItem={({item}) => (
              <View
                style={{
                  marginTop: 25,
                  width: '100%',
                }}>
                <Movie movie={item} />
              </View>
            )}
            keyExtractor={() => Math.random()}
            ListFooterComponent={this._renderFooter}
            onRefresh={this._handleRefresh}
            refreshing={this.props.refreshing}
            onEndReached={this._handleLoadMore}
            onEndReachedThreshold={0.5}
            initialNumToRender={10}
          />
        ) : !this.props.error ? (
          <View style={{backgroundColor: '#000000'}}>
            <ActivityIndicator />
          </View>
        ) : (
          <Text style={{alignSelf: 'center', color: 'white'}}>
            Not movies found
          </Text>
        )}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMovies: (page, title, sort, genres) =>
      dispatch(moviesActions.fetchAllMovies(page, title, sort, genres)),
    refresh: () => dispatch(moviesActions.refresh()),
    loadMore: () => dispatch(moviesActions.loadMore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
