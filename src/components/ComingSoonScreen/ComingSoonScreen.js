/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {Text, ScrollView, StyleSheet, ActivityIndicator} from 'react-native';

// Components
import LinearGradient from 'react-native-linear-gradient';
import NavigationBar from '../NavigationBar/NavigationBar';
import ComingSoonMovie from '../ComingSoonMovie/ComingSoonMovie';

// Actions
import * as comingSoonActions from '../../store/actions/comingSoonActions';

const ComingSoonScreen = ({navigation, getComingSoonMovies, comingSoon}) => {
  useEffect(() => {
    getComingSoonMovies();
  }, [getComingSoonMovies]);

  const getComingMovies = () => {
    return comingSoon.map((movie) => <ComingSoonMovie movie={movie} />);
  };

  return (
    <>
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
        <ScrollView style={styles.comingSoonView}>
          <Text style={styles.comingSoonTitle}>Coming Soon</Text>
          {comingSoon.length ? (
            getComingMovies()
          ) : (
            <ActivityIndicator
              animating
              size="large"
              style={{marginTop: 20, marginBottom: 30}}
            />
          )}
        </ScrollView>
        <NavigationBar navigation={navigation} actualSection={'Coming Soon'} />
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#000000',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  comingSoonView: {
    height: '100%',
    width: '90%',
    marginBottom: 60,
  },
  comingSoonTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 29,
    color: '#FFFFFF',
    marginTop: 64,
    marginBottom: 27,
    marginLeft: 40,
  },
});

const mapStateToProps = (state) => {
  return {
    comingSoon: state.comingSoon.comingSoon,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComingSoonMovies: () => dispatch(comingSoonActions.fetchComingSoon()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoonScreen);
