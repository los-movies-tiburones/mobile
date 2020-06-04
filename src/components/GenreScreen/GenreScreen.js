/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';

//Components
import LinearGradient from 'react-native-linear-gradient';
import GenreSection from '../GenreSection/GenreSection';

//Actions
import * as genreActions from '../../store/actions/genreActions';

class GenreScreen extends Component {
  componentDidMount() {
    const {getGenres} = this.props;
    getGenres();
  }
  render() {
    const {genres, navigation} = this.props;
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
        <ScrollView style={styles.genresScreenView}>
          <View style={styles.appTitleView}>
            <Text style={styles.appTitle}>Movie Sharkers</Text>
            <Icon
              style={styles.searchIcon}
              name="search"
              size={20}
              color="white"
            />
          </View>

          <GenreSection
            genre={'Top 100'}
            navigation={navigation}
            allGenres={genres}
          />
          {genres.map((genre) => (
            <GenreSection
              genre={genre}
              navigation={navigation}
              allGenres={genres}
            />
          ))}
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#000000',
    height: '100%',
  },
  genresScreenView: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .8)',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 40,
  },
  appTitleView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  appTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 23,
    backgroundColor: '#00000000',
  },
  searchIcon: {
    position: 'absolute',
    right: 0,
    marginRight: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    genres: state.topGenre.genres,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenres: () => dispatch(genreActions.fetchGenres()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreScreen);
