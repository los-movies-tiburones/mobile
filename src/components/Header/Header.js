/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import GenreFilter from '../GenreFilter/GenreFilter';
import SortFilter from '../SortFilter/SortFilter';
import SortOptions from '../../utils/sortOptions';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import * as moviesActions from '../../store/actions/movieActions';

class Header extends Component {
  state = {
    option: '',
    error: false,
    genderFilterOn: false,
    sortFilterOn: false,
  };

  onChangedPickerOption(value) {
    const {changeSortOption, getAllMovies, genres} = this.props;
    this.setState({option: value});
    changeSortOption(value);
    getAllMovies(0, '', value, genres);
  }

  getSortTitle(value) {
    return value === ''
      ? 'Sort by'
      : SortOptions.find((sortOption) => sortOption.value === value).key;
  }

  render() {
    const {genderFilterOn, sortFilterOn} = this.state;
    const {allGenres} = this.props;
    return (
      <View>
        <View style={styles.appTitleView}>
          <Text style={styles.appTitle}>MovieSharkers</Text>
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => this.props.changeSearchStatus()}>
            <Icon name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.firstLabel}>
          <Text style={styles.firstLabelText}>All Movies</Text>
          <View style={styles.genreLabel}>
            <Text
              style={styles.filterText}
              onPress={() =>
                this.setState({genderFilterOn: !this.state.genderFilterOn})
              }>
              {this.props.genres.length > 0
                ? `${this.props.genres.length} selected`
                : 'All Genres'}
            </Text>
            <Icon
              style={styles.arrowIcon}
              name="arrow-drop-down"
              size={25}
              color="white"
              onPress={() =>
                this.setState({genderFilterOn: !this.state.genderFilterOn})
              }
            />
          </View>
          <View style={styles.sortLabel}>
            <Text
              style={styles.filterText}
              onPress={() =>
                this.setState({sortFilterOn: !this.state.sortFilterOn})
              }>
              {this.getSortTitle(this.props.sort)}
            </Text>
            <Icon
              style={styles.arrowIcon}
              name="arrow-drop-down"
              size={25}
              color="white"
              onPress={() =>
                this.setState({sortFilterOn: !this.state.sortFilterOn})
              }
            />
          </View>
        </View>
        <GenreFilter filterOn={genderFilterOn} allGenres={allGenres} />
        <SortFilter filterOn={sortFilterOn} />
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
    marginTop: 33,
  },
  appTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 24,
    backgroundColor: '#00000000',
  },
  searchIcon: {
    position: 'absolute',
    right: 0,
    marginRight: 43,
  },
  firstLabel: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 44,
    marginBottom: 36,
    paddingLeft: 20,
  },
  firstLabelText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 21,
    backgroundColor: '#00000000',
  },
  arrowIcon: {
    marginTop: -6,
  },
  filterText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 14,
    backgroundColor: '#00000000',
  },
  genreLabel: {
    width: '30%',
    flex: 1,
    flexDirection: 'row',
    marginLeft: 100,
    paddingTop: 10,
  },
  sortLabel: {
    width: '30%',
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    sort: state.movies.sort,
    genres: state.movies.genres,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchStatus: () => dispatch(moviesActions.changeSearchState()),
    changeSortOption: (option) =>
      dispatch(moviesActions.changeSortOption(option)),
    changeGenres: (selectedGenres) =>
      dispatch(moviesActions.changeGenres(selectedGenres)),
    getAllMovies: (page, title, sort, selectedGenres) =>
      dispatch(moviesActions.fetchAllMovies(page, title, sort, selectedGenres)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
