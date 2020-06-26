/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import * as moviesActions from '../../store/actions/movieActions';
import SortOptions from '../../utils/sortOptions';

class SortFilter extends Component {
  state = {
    option: '',
    error: false,
  };

  onChangeSortOption(index) {
    const {changeSortOption, getAllMovies, genres} = this.props;
    this.setState({option: index < 0 ? '' : SortOptions[index].value});
    changeSortOption(index < 0 ? '' : SortOptions[index].value);
    getAllMovies(0, '', index < 0 ? '' : SortOptions[index].value, genres);
  }

  getSortOptions = () => {
    const {option} = this.state;
    return SortOptions.map((sortOption, i) => {
      return (
        <TouchableOpacity
          style={styles.sortContainer}
          onPress={() => this.onChangeSortOption(i)}>
          <Icon
            style={styles.checkIcon}
            name="check"
            size={25}
            color={option === sortOption.value ? 'blue' : 'black'}
          />
          <Text style={styles.sortOption}>{sortOption.key}</Text>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <View style={this.props.filterOn ? styles.sortView : styles.sortViewNone}>
        <Button
          buttonStyle={styles.clearBtn}
          title="Clear Sort"
          color="#3462FF"
          onPress={() => this.onChangeSortOption(-1)}
        />
        {this.getSortOptions()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sortView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    marginTop: 33,
  },
  sortContainer: {
    backgroundColor: '#00000000',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  sortViewNone: {
    display: 'none',
  },
  sortOption: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 16,
    backgroundColor: '#00000000',
  },
  checkIcon: {
    marginRight: 5,
  },
  clearBtn: {
    width: 100,
    height: 24,
    borderRadius: 50,
    marginLeft: 36,
    marginBottom: 26,
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
    changeSortOption: (option) =>
      dispatch(moviesActions.changeSortOption(option)),
    getAllMovies: (page, title, sort, selectedGenres) =>
      dispatch(moviesActions.fetchAllMovies(page, title, sort, selectedGenres)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortFilter);
