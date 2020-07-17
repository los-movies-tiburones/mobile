/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const stylesMedium = StyleSheet.create({
  listItem: {
    height: 220,
    width: 109,
    backgroundColor: '#00000000',
    borderColor: '#eee',
    marginLeft: 16,
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
  movieYear: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 14,
    marginTop: 5,
  },
});

const stylesSmall = StyleSheet.create({
  listItem: {
    height: 185,
    width: 87,
    backgroundColor: '#00000000',
    borderColor: '#eee',
    marginLeft: 16,
  },
  listItemView: {
    width: 87,
    height: 180,
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
  movieYear: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 14,
    marginTop: 5,
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
  movieYear: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 14,
    marginTop: 5,
  },
});

const stylesLargeTop = StyleSheet.create({
  listItem: {
    width: '80%',
    height: 200,
    backgroundColor: '#00000000',
    borderColor: '#eee',
  },
  listItemView: {
    width: 108,
    height: 184,
  },
  image: {
    width: 108,
    height: 164,
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
  movieYear: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 14,
    marginTop: 5,
  },
});

const stylesSearch = StyleSheet.create({
  listItem: {
    paddingLeft: 12,
    paddingRight: 12,
    height: 174,
    backgroundColor: '#00000000',
    borderColor: '#eee',
  },
  listItemView: {
    width: 114,
    height: 174,
  },
  image: {
    width: 114,
    height: 174,
    borderRadius: 10,
  },
  movieTitle: {
    display: 'none',
  },
  movieYear: {
    display: 'none',
  },
});

const stylesGiant = StyleSheet.create({
  listItem: {
    marginLeft: 12,
    marginRight: 12,
    height: 235,
    backgroundColor: '#00000000',
    borderColor: '#eee',
    marginBottom: 40,
  },
  listItemView: {
    width: 154,
    height: 234,
  },
  image: {
    width: 154,
    height: 234,
    borderRadius: 10,
  },
  movieTitle: {
    display: 'none',
  },
});

const stylesSmallTop100 = StyleSheet.create({
  listItem: {
    height: 185,
    width: 87,
    backgroundColor: '#00000000',
    borderColor: '#eee',
    marginLeft: 16,
  },
  listItemView: {
    width: 87,
    height: 180,
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
  movieYear: {
    display: 'none',
  },
});

const stylesHorizontalMovieDetail = StyleSheet.create({
  listItem: {
    height: 170,
    width: 190,
    backgroundColor: '#00000000',
    borderColor: '#eee',
    marginLeft: 16,
  },
  listItemView: {
    width: 190,
    height: 170,
  },
  image: {
    width: 190,
    height: 111,
    borderRadius: 10,
    resizeMode: 'stretch',
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
  movieYear: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 14,
    marginTop: 5,
  },
});

const stylesNowInCinema = StyleSheet.create({
  listItem: {
    marginLeft: 12,
    marginRight: 12,
    height: 235,
    backgroundColor: '#00000000',
    borderColor: '#eee',
    marginBottom: 40,
  },
  listItemView: {
    width: 154,
    height: 234,
  },
  image: {
    width: 154,
    height: 234,
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
  movieYear: {
    display: 'none',
  },
});

export {
  stylesSmall,
  stylesMedium,
  stylesLarge,
  stylesSearch,
  stylesLargeTop,
  stylesGiant,
  stylesSmallTop100,
  stylesHorizontalMovieDetail,
  stylesNowInCinema,
};
