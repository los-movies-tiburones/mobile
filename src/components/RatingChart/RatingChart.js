/* eslint-disable prettier/prettier */
import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Svg, {Line, Polygon} from 'react-native-svg';

const {width} = Dimensions.get('window');

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
        (rating) => new Date(rating.timeStamp * 1000).getFullYear() === year,
      )
      .map((filtered) => filtered.value),
  );

  return values.map(
    (value) => value.reduce((a, b) => a + b, 0) / value.length || 0,
  );
};

const getLinePoints = (years, values) => {
  let newYears = years;
  let newValues = values;
  if (years.length > 10) {
    newYears = years.splice(years.length - 10, years.length);
    newValues = values.splice(values.length - 10, values.length);
  }
  return newYears.map((year, i) => [i, newValues[i]]);
};

const getLinesByPoints = (points) => {
  const size = (width - 40) / points.length;
  return points.map((point, i) => {
    if (i < points.length - 1) {
      const x1 = size * point[0];
      const x2 = size * points[i + 1][0];
      const y1 = ((5 - point[1]) * 140) / 5;
      const y2 = ((5 - points[i + 1][1]) * 140) / 5;
      return (
        <>
          <Polygon
            points={`${x1},${y1} ${x2},${y2} ${x2},${140} ${x1},${140} `}
            fill="#A3B7FC3B"
            stroke="#00000000"
            strokeWidth="0"
          />
          <Line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#3462FF"
            strokeWidth="3"
          />
        </>
      );
    }
  });
};

const getRatingValues = () => {
  const values = ['5.0', '4.0', '3.0', '2.0', '1.0'];
  return values.map((value) => <Text style={styles.singleValue}>{value}</Text>);
};

const getYearLines = (years) => {
  const size = (width - 40) / years.length;
  return years.map((year, i) => (
    <Line
      x1={size * i + 1}
      y1={0}
      x2={size * i + 1}
      y2={4}
      stroke="#FFFFFF"
      strokeWidth="2"
    />
  ));
};

const getYearTexts = (years) => {
  return years.map((year) => <Text style={styles.ratingYears}>{year}</Text>);
};

const RatingChart = ({ratings}) => {
  let years = getYears(ratings);
  let values = getValues(ratings, years);
  if (years.length > 10) {
    years = years.splice(years.length - 10, years.length);
    values = values.splice(values.length - 10, values.length);
  }

  return (
    <View style={styles.chartContainer}>
      <View style={styles.chartView}>
        <Svg height="140" width={width - 40} backgroundColor="blue">
          {getLinesByPoints(getLinePoints(years, values))}
        </Svg>
        <View style={styles.ratingValues}>{getRatingValues()}</View>
      </View>
      <Svg height="4" width={width - 60} backgroundColor="blue">
        <Line
          x1={0}
          y1={0}
          x2={width - 40}
          y2={0}
          stroke="#FFFFFF"
          strokeWidth="1"
        />
        {getYearLines(years)}
      </Svg>
      <View
        style={{
          ...styles.ratingYearsView,
          width: width - 30 - (width - 60) / years.length,
        }}>
        {getYearTexts(years)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartView: {
    backgroundColor: '#00000000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  chartItem: {
    height: 120,
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
  ratingValues: {
    height: 140,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  singleValue: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  ratingYearsView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  ratingYears: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 11,
    lineHeight: 13,
    textAlign: 'left',
    color: '#FFFFFF',
  },
});

export default RatingChart;
