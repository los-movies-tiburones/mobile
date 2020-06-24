/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Image,
} from 'react-native';
import {Button} from 'react-native-elements';

//Components
import LinearGradient from 'react-native-linear-gradient';

//Actions
import * as registrationActions from '../../store/actions/registrationActions';

//Assets
import appLogo from '../../assets/signUpLogo.png';

class SignUpScreen extends Component {
  state = {
    username: '',
    password: '',
    passwordConfirmation: '',
    notMatchingPasswordError: false,
  };
  componentDidMount() {}

  signUpAction() {
    const {signUp, navigation} = this.props;
    const {username, password, passwordConfirmation} = this.state;

    if (username && password && password === passwordConfirmation) {
      //navigation.navigate('GenreScreen');
      this.setState({notMatchingPasswordError: false});
      signUp(this.state, navigation);
    } else {
      this.setState({notMatchingPasswordError: true});
    }
  }

  loginAction() {
    const {navigation} = this.props;
    navigation.navigate('LoginScreen');
  }

  render() {
    const {username, navigation, loading} = this.props;
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
        <View style={styles.headerContainer}>
          <Image style={styles.logoImage} source={appLogo} />
          <Text style={styles.welcomeMessage}>Welcome to MovieSharkers!</Text>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            placeholder={'Username'}
            placeholderTextColor="#FFFFFF"
          />
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={(text) => this.setState({password: text})}
            placeholder={'Password'}
            placeholderTextColor="#FFFFFF"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            value={this.state.passwordConfirmation}
            onChangeText={(text) => this.setState({passwordConfirmation: text})}
            placeholder={'Confirm password'}
            placeholderTextColor="#FFFFFF"
            secureTextEntry={true}
          />
          <Text
            style={{
              ...styles.errorMessage,
              color: !this.state.notMatchingPasswordError ? '#00000000' : 'red',
            }}>
            Passwords don't match
          </Text>
          <View style={styles.buttonsContainer}>
            <Button
              title="Sign Up"
              color="#3462FF"
              buttonStyle={styles.signUpButton}
              onPress={() => this.signUpAction()}
              raised={!loading}
            />
            <Button
              title="Login"
              color="#3462FF"
              buttonStyle={styles.loginButton}
              onPress={() => this.loginAction()}
            />
          </View>
        </View>
        {loading && (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#000000',
    height: '100%',
  },
  headerContainer: {
    marginTop: 50,
  },
  logoImage: {
    width: 60,
    height: 60,
    marginTop: 20,
    alignSelf: 'center',
  },
  welcomeMessage: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 21,
    marginTop: 18,
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 23,
    marginTop: 18,
  },
  formContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 44,
  },
  input: {
    width: '70%',
    height: 34,
    borderColor: 'white',
    color: '#FFFFFF',
    alignSelf: 'center',
    borderRadius: 10,
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
    backgroundColor: '#FFFFFF21',
  },
  buttonsContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  signUpButton: {
    width: '100%',
    height: 43,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: '#3462FF',
  },
  loginButton: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#00000000',
  },
  errorMessage: {
    width: '70%',
    color: 'red',
    alignSelf: 'center',
    textAlign: 'left',
    fontSize: 12,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 62,
  },
  loading: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000080',
    zIndex: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    username: state.registration.username,
    loading: state.registration.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user, navigation) =>
      dispatch(registrationActions.registerUser(user, navigation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
