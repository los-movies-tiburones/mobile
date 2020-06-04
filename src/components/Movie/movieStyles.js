/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const stylesMedium = StyleSheet.create({
  listItem: {
    height: 220,
    width: 109,
    backgroundColor: '#00000000',
    borderColor: '#eee',
    marginRight: 16,
    marginBottom: 20,
  },
  listItemView: {
    width: 109,
    height: 215,
  },
  image: {
    width: 109,
    height: 165,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 14,
    width: '100%',
    height: 15,
    marginTop: 10,
  },
  movieRating: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  movieRatingNumber: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    marginLeft: 4,
  },
});

const stylesSmall = StyleSheet.create({
  listItem: {
    height: 220,
    width: 87,
    backgroundColor: '#00000000',
    borderColor: '#eee',
    marginRight: 16,
  },
  listItemView: {
    width: 87,
    height: 215,
  },
  image: {
    width: 87,
    height: 132,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 14,
    width: '100%',
    height: 15,
    marginTop: 10,
  },
  movieRating: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  movieRatingNumber: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    marginLeft: 4,
  },
});

const stylesLarge = StyleSheet.create({
  listItem: {
    paddingLeft: 12,
    paddingRight: 12,
    height: 220,
    backgroundColor: '#00000000',
    borderColor: '#eee',
  },
  listItemView: {
    width: 114,
    height: 215,
  },
  image: {
    width: 114,
    height: 174,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 19,
    width: '100%',
    height: 15,
    marginTop: 10,
  },
  movieRating: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  movieRatingNumber: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 14,
    color: '#FFFFFF',
    marginLeft: 4,
  },
});

export {stylesSmall, stylesMedium, stylesLarge};
