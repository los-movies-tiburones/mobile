/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SearchBar} from 'react-native-elements';

//Actions
import * as moviesActions from '../../store/actions/movieActions';
//Assets
import appLogo from '../../assets/loginLogo.png';

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
        <Image style={styles.logoImage} source={appLogo} />
        <SearchBar
          containerStyle={styles.searchBar}
          inputContainerStyle={styles.searchBarInside}
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        <TouchableOpacity onPress={() => this.manageCancelAction()}>
          <Text style={styles.cancelBtn}>Cancel</Text>
        </TouchableOpacity>
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
  logoImage: {
    width: 26,
    height: 23,
    alignSelf: 'center',
    marginRight: 10,
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
