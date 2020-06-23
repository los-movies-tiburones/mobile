/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';

class RateInput extends Component {
  state = {
    actualRating: 0,
  };

  getStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity onPress={() => this.setState({actualRating: i})}>
          <Icon
            style={styles.movieRatingIcon}
            name={this.state.actualRating >= i ? 'star' : 'star-border'}
            size={22}
            color={'#FFFFFF'}
          />
        </TouchableOpacity>,
      );
    }
    return stars;
  };

  render() {
    const {doneAction} = this.props;
    const {actualRating} = this.state;

    return (
      <View style={styles.ratingBar}>
        <View style={styles.ratingStars}>{this.getStars()}</View>
        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => doneAction(actualRating)}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ratingBar: {
    width: '100%',
    height: 130,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  ratingStars: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  doneButton: {
    width: '50%',
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  doneButtonText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default RateInput;
