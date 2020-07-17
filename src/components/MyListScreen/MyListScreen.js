/* eslint-disable prettier/prettier */
import React, {useEffect, useCallback} from 'react';
import {connect} from 'react-redux';

import {
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
} from 'react-native';

// Components
import LinearGradient from 'react-native-linear-gradient';
import NavigationBar from '../NavigationBar/NavigationBar';
import Movie from '../Movie/Movie';

// Actions
import * as myListActions from '../../store/actions/myListActions';

//Styles
import {stylesSearch} from '../Movie/movieStyles';
// Utils
import {checkUsername} from '../../utils/asyncStorage';

const MyListScreen = ({navigation, getMyList, myList, token, loading}) => {
  useEffect(() => {
    getMyListByUsername();
  }, [getMyListByUsername]);

  const getMyListByUsername = useCallback(async () => {
    const credentials = token ? token : (await checkUsername()).token;
    getMyList(credentials);
  }, [getMyList, token]);
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
        <ScrollView style={styles.playListView}>
          <Text style={styles.playListTitle}>My List</Text>
          <FlatList
            contentContainerStyle={styles.listContainer}
            numColumns={3}
            data={myList}
            renderItem={({item}) => (
              <View key={Math.random()} style={styles.listItem}>
                <Movie
                  movie={item}
                  navigation={navigation}
                  styles={stylesSearch}
                />
              </View>
            )}
            ListEmptyComponent={() =>
              loading ? (
                <ActivityIndicator
                  animating
                  size="large"
                  style={styles.activityIndicator}
                />
              ) : (
                <Text style={styles.emptyWarning}>
                  There are not movies in your list. You can add your favorite
                  movies from the Sharkers library
                </Text>
              )
            }
          />
        </ScrollView>
        <NavigationBar navigation={navigation} actualSection={'My List'} />
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
  playListView: {
    height: '100%',
    width: '100%',
    marginBottom: 60,
  },
  playListTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 29,
    color: '#FFFFFF',
    marginTop: 64,
    marginBottom: 22,
    marginLeft: 25,
  },
  activityIndicator: {
    marginTop: 20,
    marginBottom: 30,
  },
  listItem: {
    marginBottom: 30,
    width: '33%',
  },
  listContainer: {
    width: '96%',
    backgroundColor: '#00000000',
    alignSelf: 'center',
  },
  emptyWarning: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 150,
  },
});

const mapStateToProps = (state) => {
  return {
    username: state.registration.token,
    myList: state.myList.myList,
    loading: state.myList.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMyList: (username) => dispatch(myListActions.fetchMyMovieList(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyListScreen);
