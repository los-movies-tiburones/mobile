/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useCallback} from 'react';
import {connect} from 'react-redux';

import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Button} from 'react-native-elements';

//Components
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

// Actions
import * as movieDetailActions from '../../store/actions/movieDetailActions';

const AddReviewScreen = ({
  navigation,
  username,
  route,
  reviewMovie,
  rateMovie,
  token,
}) => {
  const [reviewValue, setReviewValue] = useState('');
  const {movieInstance} = route.params;
  const [actualRating, setActualRating] = useState(0);

  useEffect(() => {
    checkHasRated();
  }, [checkHasRated]);

  const checkHasRated = useCallback(() => {
    const hasRated = movieInstance
      ? movieInstance.ratings.find((rating) => rating.userIdString === username)
      : null;
    !hasRated || setActualRating(hasRated.value);
  }, [movieInstance, username]);

  const getStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity onPress={() => setActualRating(i)}>
          <Icon
            style={styles.movieRatingIcon}
            name={actualRating >= i ? 'star' : 'star-border'}
            size={22}
            color={'#FFFFFF'}
          />
        </TouchableOpacity>,
      );
    }
    return stars;
  };

  const submitAction = () => {
    if (reviewValue) {
      reviewMovie(movieInstance.id, reviewValue, token);
      rateMovie(movieInstance.id, actualRating, token);
      navigation.popToTop();
    }
  };
  return (
    <>
      <ImageBackground
        source={{uri: movieInstance.cover}}
        style={styles.imageBack}
        blurRadius={0.7}>
        <View style={styles.reviewContainer}>
          <Text style={styles.movieTitle}>{movieInstance.title}</Text>
          <Text style={styles.addReviewLabel}>{'Add your review'}</Text>
          <View style={styles.ratingStars}>{getStars()}</View>
          <Text style={styles.boldLabel}>{'Let us know your feedback'}</Text>
          <Text style={styles.inputLabel}>{'Enter your review'}</Text>
          <TextInput
            style={styles.input}
            value={reviewValue}
            onChangeText={(text) => setReviewValue(text)}
            multiline
            placeholderTextColor="#FFFFFF"
          />
          <View style={styles.buttonsContainer}>
            <Button
              title="Submit"
              color="#3462FF"
              buttonStyle={styles.submitButton}
              onPress={() => submitAction()}
              raised
            />
          </View>
        </View>
        <TouchableOpacity style={styles.backIcon}>
          <Icon
            name="arrow-back"
            size={22}
            color={'#FFFFFF'}
            onPress={() => {
              navigation.pop();
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  imageBack: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backIcon: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#00000000',
    width: '10%',
    height: 20,
    position: 'absolute',
    top: 5,
    left: 21,
  },
  reviewContainer: {
    paddingLeft: 21,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .8)',
  },
  movieTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 35,
    color: '#FFFFFF',
    marginTop: 65,
  },
  addReviewLabel: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
    marginTop: 4,
  },
  boldLabel: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#FFFFFF',
    marginTop: 23,
  },
  inputLabel: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
    color: '#C4C4C4',
    marginTop: 25,
  },
  input: {
    width: '90%',
    height: 'auto',
    color: '#FFFFFF',
    marginTop: 25,
    paddingLeft: 23,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.04,
    backgroundColor: '#00000000',
    borderColor: '#00000000',
    borderBottomColor: '#FFFFFF',
    borderWidth: 2,
  },
  submitButton: {
    width: 242,
    height: 50,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: '#3462FF',
  },
  buttonsContainer: {
    width: 242,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 56,
  },
  ratingStars: {
    display: 'flex',
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

const mapStateToProps = (state) => {
  return {
    username: state.registration.username,
    token: state.registration.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    rateMovie: (movieId, rating, token) =>
      dispatch(movieDetailActions.rateMovie(movieId, rating, token)),
    reviewMovie: (movieId, review, token) =>
      dispatch(movieDetailActions.reviewMovie(movieId, review, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewScreen);
