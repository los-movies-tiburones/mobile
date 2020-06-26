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

// Components
import LinearGradient from 'react-native-linear-gradient';
// Actions
import * as registrationActions from '../../store/actions/registrationActions';
// Assets
import appLogo from '../../assets/loginLogo.png';

class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
    notMatchingPasswordError: false,
  };

  logInAction() {
    const {logIn, navigation} = this.props;
    const {username, password} = this.state;
    if (username && password) {
      this.setState({notMatchingPasswordError: false});
      logIn(username, password, navigation);
    } else {
      this.setState({notMatchingPasswordError: true});
    }
  }

  signUpAction() {
    const {navigation} = this.props;
    navigation.navigate('SignUpScreen');
  }

  render() {
    const {loading, error} = this.props;

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
          <Text style={styles.title}>Do you already have an account? </Text>
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
          <Text
            style={{
              ...styles.errorMessage,
              color:
                !this.state.notMatchingPasswordError && !error
                  ? '#00000000'
                  : 'red',
            }}>
            Invalid user or password
          </Text>
          <View style={styles.buttonsContainer}>
            <Button
              title="Login"
              color="#3462FF"
              buttonStyle={styles.loginButton}
              onPress={() => this.logInAction()}
              raised={!loading}
            />
            <Button
              title="Sign Up"
              color="#3462FF"
              buttonStyle={styles.signUpButton}
              onPress={() => this.signUpAction()}
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
  title: {
    width: '50%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: 23,
    marginTop: 32,
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
  loginButton: {
    width: '100%',
    height: 43,
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: '#3462FF',
  },
  signUpButton: {
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
    error: state.registration.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (username, password, navigation) =>
      dispatch(registrationActions.logIn(username, password, navigation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
