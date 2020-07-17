/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  movieDetailView: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .8)',
    paddingLeft: 20,
  },
  moviePrincipalInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 30,
  },
  movieDescriptionView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: 30,
  },
  image: {
    width: 140,
    height: 211,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 35,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 41,
    marginTop: 6,
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
    marginLeft: 20,
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
    flexDirection: 'column',
  },
  otherInfoLeft: {
    width: '100%',
    marginTop: 17,
  },
  otherInfoRight: {
    display: 'flex',
    flexDirection: 'row',
    width: '22%',
    position: 'relative',
    justifyContent: 'space-between',
  },
  otherInfo: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
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
    height: 30,
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 14,
    overflow: 'hidden',
  },
  movieRating: {
    marginTop: 40,
    marginRight: 20,
  },
  movieRatingStars: {
    marginTop: 20,
  },
  imageBack: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  rateItem: {
    alignSelf: 'center',
    alignItems: 'center',
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
    height: 230,
    marginTop: 30,
    marginLeft: -20,
  },
  movieReviews: {
    height: 200,
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
  trailerView: {
    flex: 1,
    marginTop: 20,
    marginRight: 20,
  },
  trailerPlayer: {
    width: '100%',
    height: 200,
  },
  playIconView: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginTop: 70,
  },
  playIcon: {
    width: 50,
    height: 50,
  },
  addReviewButton: {
    width: 143,
    height: 27,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: '#3462FF',
  },
  buttonsContainer: {
    width: 143,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 46,
  },
});

export {styles};
