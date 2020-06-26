/* eslint-disable prettier/prettier */
import {AsyncStorage} from 'react-native';

const storeUsername = function* storeUsername(username, token) {
  try {
    yield AsyncStorage.setItem('username', username);
    yield AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log('Error fetching username');
  }
};

const checkUsername = async () => {
  try {
    const value = await AsyncStorage.getItem('username');
    const token = await AsyncStorage.getItem('token');
    return {username: value, token: token};
  } catch (error) {
    console.log('Error');
  }
};

export {storeUsername, checkUsername};
