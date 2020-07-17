/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useCallback} from 'react';
import {connect} from 'react-redux';

import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {Button} from 'react-native-elements';

// Components
import RatingStars from '../RatingStars/RatingStars';
import RatingChart from '../RatingChart/RatingChart';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import GenreSection from '../GenreSection/GenreSection';
import RateInput from '../RateInput/RateInput';
import LinearGradient from 'react-native-linear-gradient';
import MovieTrailer from '../MovieTrailer/movieTrailer';
import MovieDescription from '../MovieDescription/MovieDescription';
import MovieOtherInformation from '../MovieDescription/MovieOtherInformation';
import MovieActionButtons from '../MovieActionButtons/MovieActionButtons';
import ReviewsSection from '../ReviewsSection/ReviewsSection';
// Styles
import {stylesSmallTop100} from '../Movie/movieStyles';
import {styles} from './movieScreenStyles';
// Actions
import * as movieDetailActions from '../../store/actions/movieDetailActions';
// Utils
import {checkUsername} from '../../utils/asyncStorage';

const MovieScreen = ({
  getMovie,
  route,
  movieInstance,
  navigation,
  username,
  token,
  rateMovie,
  getReviews,
  reviews,
  addToMyList,
}) => {
  const [previousRating, setPreviousRating] = useState(0);
  const [showRatingInput, setShowRatingInput] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [isInList, setIsInList] = useState(false);

  useEffect(() => {
    getMovie(route.params.id, token);
    getReviews(route.params.id);
    checkHasRated();
  }, [route.params.id, getMovie, checkHasRated, getReviews, token]);

  const doneRateAction = async (rating) => {
    const credentials = username
      ? {username: username, token: token}
      : await checkUsername();
    rateMovie(movieInstance.id, rating, credentials.token);
    setShowRatingInput(false);
    setPreviousRating(rating);
  };

  const checkHasRated = useCallback(async () => {
    const hasRated = movieInstance
      ? movieInstance.ratings.find((rating) => rating.userIdString === username)
      : null;
    if (hasRated && previousRating !== hasRated.value) {
      setPreviousRating(hasRated.value);
    }
  }, [movieInstance, previousRating, username]);

  const showRatingInputAction = () => {
    setShowRatingInput(!showRatingInput);
  };

  const addToListAction = () => {
    setIsInList(true);
    addToMyList(movieInstance.id, token);
  };
  return movieInstance ? (
    <ImageBackground
      source={{uri: movieInstance.cover}}
      style={styles.imageBack}
      blurRadius={0.7}>
      <ScrollView style={styles.movieDetailView}>
        <TouchableOpacity style={styles.backIcon}>
          <Icon
            name="arrow-back"
            size={22}
            color={'#FFFFFF'}
            onPress={() => {
              navigation.popToTop();
            }}
          />
        </TouchableOpacity>

        <MovieTrailer
          playVideo={playVideo}
          videoId={movieInstance.videoId}
          playAction={() => setPlayVideo(true)}
        />

        <MovieDescription movieInstance={movieInstance} playVideo={playVideo} />

        <View style={styles.otherInfoContainer}>
          <MovieActionButtons
            previousRating={previousRating}
            showRatingAction={() => showRatingInputAction()}
            addToListAction={
              !isInList
                ? () => addToListAction()
                : () => console.log('Already added')
            }
            isInList={isInList || movieInstance.inMyList}
          />
          <MovieOtherInformation movieInstance={movieInstance} />
        </View>
        <View style={styles.movieRatingStars}>
          <RatingStars rating={movieInstance.averageRating} />
        </View>
        <View style={styles.movieRating}>
          <RatingChart ratings={movieInstance.ratings} />
        </View>
        <View style={styles.movieRecommendations}>
          <GenreSection
            genre={'Recommendations'}
            navigation={navigation}
            allGenres={[]}
            moviesByGenre={movieInstance.recommendations}
            movieStyle={stylesSmallTop100}
            title={'Recommended Movies'}
            genreTitleStyle={styles.recomendedTitle}
          />
        </View>
        {!movieInstance.reviews.length || (
          <View style={styles.movieReviews}>
            <ReviewsSection reviews={[...movieInstance.reviews, ...reviews]} />
          </View>
        )}

        <View style={styles.buttonsContainer}>
          <Button
            title="Add a review"
            color="#3462FF"
            buttonStyle={styles.addReviewButton}
            onPress={() =>
              navigation.navigate('AddReviewScreen', {
                movieInstance: movieInstance,
              })
            }
            raised
          />
        </View>
      </ScrollView>
      <View style={showRatingInput || {display: 'none'}}>
        <RateInput
          startRating={previousRating}
          doneAction={(rating) => doneRateAction(rating)}
        />
      </View>
    </ImageBackground>
  ) : (
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
      style={styles.loadingMovieTemplate}>
      <View style={styles.loadingMovieView}>
        <Text style={styles.loadingMovieTitle}>{'Loading movie ...'}</Text>
      </View>
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  return {
    movieInstance: state.movieDetail.movie,
    username: state.registration.username,
    token: state.registration.token,
    reviews: state.movieDetail.reviews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id, token) => dispatch(movieDetailActions.fetchMovie(id, token)),
    rateMovie: (movieId, rating, token) =>
      dispatch(movieDetailActions.rateMovie(movieId, rating, token)),
    getReviews: (id) => dispatch(movieDetailActions.fetchReviews(id)),
    addToMyList: (movieId, token) =>
      dispatch(movieDetailActions.addToMyList(movieId, token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
