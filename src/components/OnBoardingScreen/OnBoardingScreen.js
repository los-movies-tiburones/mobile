/* eslint-disable prettier/prettier */
import React, {useState} from 'react';

import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {Button} from 'react-native-elements';

// Components
import LinearGradient from 'react-native-linear-gradient';

// Assets
import onBoarding1 from '../../assets/onBoarding1.png';
import onBoarding2 from '../../assets/onBoarding2.png';
import onBoarding3 from '../../assets/onBoarding3.png';

const OnBoardingScreen = ({navigation}) => {
  const [pageNumber, setPageNumber] = useState(0);

  const boardingScreens = [
    {
      id: 1,
      title: 'Welcome to Movie Sharkers',
      info: "Don't know which movie to watch? Let me solve this problem easly!",
      image: onBoarding1,
      buttonText: 'Next',
      buttonAction: () => setPageNumber(pageNumber + 1),
    },
    {
      id: 2,
      title: 'Explore movies ',
      info:
        'Pick your favourite genres and include movies to your list. Explore from our complete movie catalogue',
      image: onBoarding2,
      buttonText: 'Next',
      buttonAction: () => setPageNumber(pageNumber + 1),
    },
    {
      id: 3,
      title: 'Upcoming',
      info:
        'Review the new cinema realeases and what is coming soon. We have some recommendations for you!',
      image: onBoarding3,
      buttonText: "Let's go!",
      buttonAction: () =>
        navigation.reset({
          index: 0,
          routes: [{name: 'GenreScreen'}],
        }),
    },
  ];

  const getPaginationPoints = () => {
    let controls = [];
    for (let i = 0; i <= boardingScreens.length - 1; i++) {
      controls.push(
        <TouchableOpacity
          style={
            pageNumber === i
              ? {...styles.paginationPoint, backgroundColor: '#C4C4C4'}
              : styles.paginationPoint
          }
          onPress={() => setPageNumber(i)}
        />,
      );
    }
    return controls;
  };

  return (
    <View>
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
        <Image
          style={styles.logoImage}
          source={boardingScreens[pageNumber].image}
        />
        <Text style={styles.boardingTitle}>
          {boardingScreens[pageNumber].title}
        </Text>
        <Text style={styles.boardingInfo}>
          {boardingScreens[pageNumber].info}
        </Text>
        <View style={styles.paginationView}>{getPaginationPoints()}</View>
        <View style={styles.buttonsContainer}>
          <Button
            title={boardingScreens[pageNumber].buttonText}
            color="#3462FF"
            buttonStyle={styles.nextbutton}
            raised
            onPress={() => boardingScreens[pageNumber].buttonAction()}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boardingTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 29,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 49,
  },
  boardingInfo: {
    width: '70%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 17,
  },
  nextbutton: {
    width: 280,
    height: 53,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: '#3462FF',
  },
  buttonsContainer: {
    width: 280,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 55,
  },
  paginationView: {
    width: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  paginationPoint: {
    width: 9,
    height: 9,
    borderRadius: 50,
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
  },
});

export default OnBoardingScreen;
