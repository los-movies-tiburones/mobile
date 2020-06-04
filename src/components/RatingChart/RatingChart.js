/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const getYears = (ratings) => {
  let years = [];
  ratings.map((rating) => {
    let date = new Date(rating.timeStamp * 1000).getFullYear();
    !years.includes(date) ? years.push(date) : null;
  });
  return years;
};

const getValues = (ratings, years) => {
  let values = years.map((year) =>
    ratings
      .filter(
        (rating) => new Date(rating.timeStamp * 1000).getFullYear() <= year,
      )
      .map((filtered) => filtered.value),
  );

  return values.map(
    (value) => value.reduce((a, b) => a + b, 0) / value.length || 0,
  );
};

const getRatingItems = (years, values) => {
  let newYears = years;
  let newValues = values;
  if (years.length > 10) {
    newYears = years.splice(years.length - 10, years.length);
    newValues = values.splice(values.length - 10, values.length);
  }
  return newYears.map((year, i) => (
    <View style={styles.chartItem}>
      <View style={styles.inVarbar}>
        <View style={{...styles.bar, height: (newValues[i] * 80) / 5}} />
      </View>
      <Text style={styles.year}>{year}</Text>
      <Text style={styles.value}>{newValues[i].toFixed(1)}</Text>
    </View>
  ));
};

const RatingChart = ({ratings}) => {
  const years = getYears(ratings);
  const values = getValues(ratings, years);
  return <View style={styles.chartView}>{getRatingItems(years, values)}</View>;
};

const styles = StyleSheet.create({
  chartView: {
    backgroundColor: '#00000000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  chartItem: {
    height: 200,
    width: 25,
    backgroundColor: '#00000000',
    alignItems: 'center',
  },
  bar: {
    width: 10,
    backgroundColor: '#3462FF',
    borderRadius: 20,
    marginBottom: 7,
    position: 'absolute',
    bottom: 0,
  },
  inVarbar: {
    width: 10,
    height: 80,
    borderRadius: 20,
    marginBottom: 7,
  },
  year: {
    fontSize: 11,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 13,
    marginBottom: 5,
  },
  value: {
    fontSize: 11,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 13,
    textAlign: 'center',
  },
});

export default RatingChart;
