/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';

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
    const {getAllMovies} = this.props;
    getAllMovies(page);
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
    const {loadMore} = this.props;
    loadMore();
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
      }),
      () => {
        this.fetchAllMovies();
      },
    );
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
    return !this.props.loading ? (
      <View style={styles.app}>
        <View style={styles.appTitleView}>
          <Text style={styles.appTitle}>Movie</Text>
          <Text style={styles.appTitleYellow}>Sharkers</Text>
        </View>

        <FlatList
          contentContainerStyle={{
            width: '100%',
            backgroundColor: '#000000',
          }}
          numColumns={1}
          data={this.props.movies}
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
      </View>
    ) : (
      <View style={{backgroundColor: '#000000'}}>
        <Text style={{alignSelf: 'center'}}>Loading movies</Text>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#000000',
  },
  appTitleView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 23,
    backgroundColor: '#00000000',
    marginTop: 33,
  },
  appTitleYellow: {
    fontSize: 20,
    color: '#FFB904',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 23,
    backgroundColor: '#00000000',
    marginTop: 33,
    marginLeft: 4,
  },
});

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    loading: state.movies.loading,
    loadingMore: state.movies.loadingMore,
    refreshing: state.movies.refreshing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMovies: (page) => dispatch(moviesActions.fetchAllMovies(page)),
    refresh: () => dispatch(moviesActions.refresh()),
    loadMore: () => dispatch(moviesActions.loadMore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
