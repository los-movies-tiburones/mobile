/* eslint-disable prettier/prettier */
import {AsyncStorage} from 'react-native';

const storeUsername = function* storeUsername(username) {
  try {
    yield AsyncStorage.setItem('username', username);
  } catch (error) {
    console.log('Error fetching username');
  }
};

const checkUsername = async () => {
  try {
    const value = await AsyncStorage.getItem('username');
    return value;
  } catch (error) {
    console.log('Error');
  }
};

export {storeUsername, checkUsername};
