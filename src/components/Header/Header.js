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
    const {allGenres, genres, sort, changeSearchStatus} = this.props;
    return (
      <View>
        <View style={styles.appTitleView}>
          <Text style={styles.appTitle}>MovieSharkers</Text>
          <TouchableOpacity
            style={styles.searchIcon}
            onPress={() => changeSearchStatus()}>
            <Icon name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.firstLabel}>
          <Text style={styles.firstLabelText}>All Movies</Text>
          <TouchableOpacity
            style={styles.genreLabel}
            onPress={() => this.setState({genderFilterOn: !genderFilterOn})}>
            <Text style={styles.filterText}>
              {genres.length > 0 ? `${genres.length} selected` : 'All Genres'}
            </Text>
            <Icon
              style={genderFilterOn ? styles.arrowIconTurned : styles.arrowIcon}
              name="arrow-drop-down"
              size={25}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sortLabel}
            onPress={() => this.setState({sortFilterOn: !sortFilterOn})}>
            <Text style={styles.filterText}>{this.getSortTitle(sort)}</Text>
            <Icon
              style={sortFilterOn ? styles.arrowIconTurned : styles.arrowIcon}
              name="arrow-drop-down"
              size={25}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.filteredGnres}>{genres.join(', ')}</Text>
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
  arrowIconTurned: {
    marginTop: -6,
    transform: [{rotate: '180deg'}],
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
  filteredGnres: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 14,
    backgroundColor: '#00000000',
    marginLeft: 20,
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
