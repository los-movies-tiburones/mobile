/* eslint-disable prettier/prettier */
import React from 'react';

import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const NavigationBarOption = ({
  navigationAction,
  title,
  icon,
  selectedSection,
}) => {
  let optionColor = selectedSection === title ? '#3462FF' : '#FFFFFF';
  return (
    <>
      <TouchableOpacity
        style={styles.itemView}
        onPress={() => navigationAction()}>
        <Icon
          style={styles.itemIcon}
          name={icon}
          size={14}
          color={optionColor}
        />
        <Text style={{...styles.itemText, color: optionColor}}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  itemView: {
    width: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemIcon: {
    marginBottom: 5,
  },
  itemText: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 14,
  },
});

export default NavigationBarOption;
