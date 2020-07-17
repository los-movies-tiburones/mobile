/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text} from 'react-native';

// Styles
import {styles} from '../MovieScreen/movieScreenStyles';

const MovieDescription = ({movieInstance}) => {
  const formatBudget = (budget) =>
    budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <View style={styles.otherInfoLeft}>
        <View style={styles.otherInfo}>
          <Text style={styles.otherInfoTitle}>BUDGET: </Text>
          <Text style={styles.otherInfoText}>
            {formatBudget(movieInstance.budget)}
          </Text>
        </View>
        <View style={styles.otherInfo}>
          <Text style={styles.otherInfoTitle}>SPOKEN LANGUAGES: </Text>
          <Text style={styles.otherInfoText}>
            {movieInstance.spokenLanguages
              .map((languaje) => languaje.name)
              .join(', ')}
          </Text>
        </View>
        <View style={styles.otherInfo}>
          <Text style={styles.otherInfoTitle}>PRODUCTION COMPAIES: </Text>
          <Text style={styles.otherInfoText}>
            {movieInstance.productionCompanies
              .map((company) => company.name)
              .join(', ')}
          </Text>
        </View>
      </View>
    </>
  );
};

export default MovieDescription;
