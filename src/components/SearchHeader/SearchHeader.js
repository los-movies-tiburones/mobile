/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {View, Text, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import * as moviesActions from '../../store/actions/movieActions';

class SearchHeader extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({search});
    if (search.length > 2) this.props.getAllMovies(0, search, '', []);
  };

  manageCancelAction() {
    const {changeSearchStatus, getAllMovies, clearMovies} = this.props;
    changeSearchStatus();
    getAllMovies(0, '', '', []);
    clearMovies();
  }
  render() {
    return (
      <View style={styles.appTitleView}>
        <Text style={styles.appTitle}>MS</Text>
        <SearchBar
          containerStyle={styles.searchBar}
          inputContainerStyle={styles.searchBarInside}
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        <Text
          style={styles.cancelBtn}
          onPress={() => this.manageCancelAction()}>
          Cancel
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appTitleView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  appTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 23,
    backgroundColor: '#00000000',
    marginRight: 10,
  },
  cancelBtn: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 16,
    backgroundColor: '#00000000',
    marginLeft: 10,
  },
  searchBar: {
    backgroundColor: '#00000000',
    width: '70%',
    height: 50,
    borderRadius: 30,
  },
  searchBarInside: {
    paddingTop: 4,
    height: 20,
    borderRadius: 30,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMovies: (page, title, sort, genres) =>
      dispatch(moviesActions.fetchAllMovies(page, title, sort, genres)),
    changeSearchStatus: () => dispatch(moviesActions.changeSearchState()),
    clearMovies: () => dispatch(moviesActions.clearMovies()),
  };
};

export default connect(null, mapDispatchToProps)(SearchHeader);
