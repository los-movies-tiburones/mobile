/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import * as moviesActions from '../../store/actions/movieActions';
import BurnedGenres from '../../utils/genres';

class GenreFilter extends Component {
  state = {
    selectedGenres: [],
    error: false,
  };

  onChangedGenreOption = (selectedItem) => {
    const {changeGenres, getAllMovies, sort} = this.props;
    let {selectedGenres} = this.state;
    if (selectedGenres.includes(BurnedGenres[selectedItem])) {
      selectedGenres = selectedGenres.filter(
        (genre) => genre !== BurnedGenres[selectedItem],
      );
      changeGenres(selectedGenres);
      getAllMovies(0, '', sort, selectedGenres);
    } else {
      if (selectedGenres.length < 4) {
        selectedGenres.push(BurnedGenres[selectedItem]);
        this.setState({selectedGenres: selectedGenres, error: false});
        changeGenres(selectedGenres);
        getAllMovies(0, '', sort, selectedGenres);
      } else {
        this.setState({error: true});
      }
    }
    this.setState({selectedGenres: selectedGenres, error: false});
  };

  getGenres = () => {
    let {selectedGenres} = this.state;
    const {genres} = this.props;
    return BurnedGenres.map((genre, i) => {
      return (
        <TouchableOpacity
          style={styles.genreContainer}
          key={Math.random()}
          onPress={() => this.onChangedGenreOption(i)}>
          <Icon
            style={styles.checkIcon}
            name="check"
            size={25}
            color={
              selectedGenres.includes(genre) || genres.includes(genre)
                ? 'blue'
                : 'black'
            }
          />
          <Text style={styles.genre}>{genre}</Text>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <View
        style={this.props.filterOn ? styles.genresView : styles.genreViewNone}>
        {this.getGenres()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  genresView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    paddingLeft: 10,
  },
  genreViewNone: {
    display: 'none',
  },
  genreContainer: {
    backgroundColor: '#00000000',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  genre: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 16,
    backgroundColor: '#00000000',
    marginTop: 18,
  },
  checkIcon: {
    marginTop: 13,
    marginRight: 5,
  },
  errorText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 21,
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
    changeGenres: (selectedGenres) =>
      dispatch(moviesActions.changeGenres(selectedGenres)),
    getAllMovies: (page, title, sort, selectedGenres) =>
      dispatch(moviesActions.fetchAllMovies(page, title, sort, selectedGenres)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreFilter);
