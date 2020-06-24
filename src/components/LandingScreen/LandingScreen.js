/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {Text, StyleSheet, Image, Animated} from 'react-native';

//Components
import LinearGradient from 'react-native-linear-gradient';

//Assets
import appLogo from '../../assets/loginLogo.png';

//Utils
import {checkUsername} from '../../utils/asyncStorage';

class LandingScreen extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  render() {
    const {navigation} = this.props;
    const {fadeAnim} = this.state;
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(async () => {
      const username = await checkUsername();
      navigation.navigate(username ? 'GenreScreen' : 'SignUpScreen');
    });
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
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}>
          <Image style={styles.logoImage} source={appLogo} />
          <Text style={styles.title}>MovieSharkers</Text>
        </Animated.View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#000000',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  landingContainer: {},
  logoImage: {
    width: 82,
    height: 74,
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Futura',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24,
    color: '#FFFFFF',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LandingScreen;
