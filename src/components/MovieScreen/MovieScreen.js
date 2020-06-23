/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {formatDate, formatDuration} from '../../utils/dates';

//Components
import RatingStars from '../RatingStars/RatingStars';
import RatingChart from '../RatingChart/RatingChart';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import GenreSection from '../GenreSection/GenreSection';
import RateInput from '../RateInput/RateInput';
import LinearGradient from 'react-native-linear-gradient';

import {stylesHorizontalMovieDetail} from '../Movie/movieStyles';

//Actions
import * as movieDetailActions from '../../store/actions/movieDetailActions';
import * as genreActions from '../../store/actions/genreActions';

class MovieScreen extends Component {
  state = {
    hasRated: false,
    showRatingInput: false,
  };
  componentDidMount() {
    const {getMovie, route, getTop100, top100} = this.props;
    getMovie(route.params.id);
    if (!top100.length) getTop100();
  }

  formatBudget = (budget) =>
    budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  doneRateAction = (rating) => {
    console.log(rating);
    this.setState({showRatingInput: false, hasRated: true});
  };

  render() {
    const {movieInstance, navigation, top100} = this.props;
    const {showRatingInput, hasRated} = this.state;

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
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <View style={styles.moviePrincipalInfo}>
            <Image
              style={styles.image}
              source={movieInstance.cover ? {uri: movieInstance.cover} : null}
            />
            <View style={styles.movieDescriptionView}>
              <Text style={styles.movieDate}>
                {formatDate(movieInstance.year).split(', ')[1]}
              </Text>
              <Text style={styles.movieTitle}>{movieInstance.title}</Text>
              <Text style={styles.movieCategories}>
                {movieInstance.genres.join(', ')}
              </Text>
            </View>
          </View>
          <View style={styles.movieInfo}>
            <Text style={styles.movieDuration}>
              {formatDuration(movieInstance.runtime)}
            </Text>
            <Text style={styles.movieDuration}>
              {formatDate(movieInstance.year)} (
              {movieInstance.productionCountries[0].name})
            </Text>
          </View>
          <Text style={styles.movieOverview}>{movieInstance.overview}</Text>
          <View style={styles.otherInfoContainer}>
            <View style={styles.otherInfoLeft}>
              <View style={styles.otherInfo}>
                <Text style={styles.otherInfoTitle}>Budget: </Text>
                <Text style={styles.otherInfoText}>
                  {this.formatBudget(movieInstance.budget)}
                </Text>
              </View>
              <View style={styles.otherInfo}>
                <Text style={styles.otherInfoTitle}>Spoken Languajes: </Text>
                <Text style={styles.otherInfoText}>
                  {movieInstance.spokenLanguages
                    .map((languaje) => languaje.name)
                    .join(', ')}
                </Text>
              </View>
              <View style={styles.otherInfo}>
                <Text style={styles.otherInfoTitle}>
                  Production Companies:{' '}
                </Text>
                <Text style={styles.otherInfoText}>
                  {movieInstance.productionCompanies
                    .map((company) => company.name)
                    .join(', ')}
                </Text>
              </View>
            </View>
            <View style={styles.otherInfoRight}>
              <TouchableOpacity
                style={styles.rateItem}
                onPress={() =>
                  this.setState({showRatingInput: !showRatingInput})
                }>
                <Icon
                  style={styles.rateIcon}
                  name={hasRated ? 'star' : 'star-border'}
                  size={22}
                  color={'#FFFFFF'}
                />
                <Text style={styles.rateText}>Rate</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.movieRating}>
            <RatingChart ratings={movieInstance.ratings} />
          </View>
          <View style={styles.movieRatingStars}>
            <RatingStars rating={movieInstance.averageRating} />
          </View>
          <View style={styles.movieRecommendations}>
            <GenreSection
              genre={'Recommendations'}
              navigation={navigation}
              allGenres={[]}
              moviesByGenre={top100}
              movieStyle={stylesHorizontalMovieDetail}
              title={'Recommended Movies'}
              genreTitleStyle={styles.recomendedTitle}
            />
          </View>
        </ScrollView>
        <View style={showRatingInput || {display: 'none'}}>
          <RateInput doneAction={(rating) => this.doneRateAction(rating)} />
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
  }
}

const styles = StyleSheet.create({
  movieDetailView: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .8)',
    paddingLeft: 20,
  },
  moviePrincipalInfo: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 30,
  },
  movieDescriptionView: {
    width: '60%',
    height: 211,
    marginLeft: 20,
    justifyContent: 'flex-end',
    paddingBottom: 20,
    marginRight: 30,
  },
  image: {
    width: 140,
    height: 211,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 19,
    marginTop: 5,
  },
  movieDate: {
    fontSize: 13,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 15,
    marginTop: 4,
  },
  movieCategories: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 16,
    marginTop: 5,
  },
  movieInfo: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    marginRight: 30,
  },
  movieDuration: {
    fontSize: 11,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 13,
  },
  movieOverview: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 14,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
  },
  otherInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  otherInfoLeft: {
    width: '60%',
  },
  otherInfoRight: {
    width: '40%',
    position: 'relative',
    justifyContent: 'center',
  },
  otherInfo: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 15,
  },
  otherInfoTitle: {
    fontSize: 12,
    color: '#BEBEBE',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 14,
  },
  otherInfoText: {
    width: '50%',
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 14,
  },
  movieRating: {
    marginTop: 40,
    marginRight: 20,
  },
  movieRatingStars: {
    marginLeft: 20,
    marginTop: 20,
  },
  imageBack: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  rateItem: {
    position: 'absolute',
    alignSelf: 'center',
  },
  rateText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
  },
  recomendedTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 18,
    color: '#FFFFFF',
  },
  movieRecommendations: {
    height: 300,
  },
  backIcon: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#00000000',
    width: '10%',
    height: 20,
  },
  loadingMovieTemplate: {
    backgroundColor: '#000000',
    height: '100%',
  },
  loadingMovieTitle: {
    position: 'absolute',
    alignSelf: 'center',
    top: 100,
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 19,
    marginTop: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    movieInstance: state.movieDetail.movie,
    top100: state.topGenre.top100,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovie: (id) => dispatch(movieDetailActions.fetchMovie(id)),
    getTop100: () => dispatch(genreActions.fetchTop100()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieScreen);
