/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';

import {View, Text, StyleSheet, Picker} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import * as moviesActions from '../../store/actions/movieActions';
import BurnedGenres from '../../utils/genres';

class Header extends Component {
  state = {
    option: '',
    error: false,
  };

  onChangedGenreOption = (selectedItems) => {
    const {changeGenres, getAllMovies, sort} = this.props;
    if (selectedItems.length <= 4) {
      this.setState({selectedItems, error: false});
      changeGenres(selectedItems);
      getAllMovies(0, '', sort, selectedItems);
    } else {
      this.setState({error: true});
    }
  };
  onChangedPickerOption(value) {
    const {changeSortOption, getAllMovies, genres} = this.props;
    this.setState({option: value});
    changeSortOption(value);
    getAllMovies(0, '', value, genres);
  }

  render() {
    const {selectedItems} = this.state;
    return (
      <View>
        <View style={styles.appTitleView}>
          <Text style={styles.appTitle}>Movie</Text>
          <Text style={styles.appTitleYellow}>Sharkers</Text>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={20}
            color="white"
            onPress={() => this.props.changeSearchStatus()}
          />
        </View>

        <View style={styles.firstLabel}>
          <Text style={styles.firstLabelText}>All Movies</Text>
          <View style={styles.firstLabelSort}>
            <Picker
              selectedValue={this.state.option}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                this.onChangedPickerOption(itemValue)
              }>
              <Picker.Item label="Sort by" value="" />
              <Picker.Item label="Title" value="title" />
              <Picker.Item label="Release Date" value="-year" />
              <Picker.Item label="Budget" value="-budget" />
            </Picker>
            <Icon
              style={styles.arrowIcon}
              name="arrow-drop-down"
              size={25}
              color="white"
            />
          </View>
        </View>
        {this.state.error ? (
          <Text style={styles.errorText}>4 genres max</Text>
        ) : null}
        <MultiSelect
          hideTags
          hideDropdown
          items={BurnedGenres}
          uniqueKey="name"
          ref={(component) => {
            this.multiSelect = component;
          }}
          onSelectedItemsChange={this.onChangedGenreOption}
          selectedItems={selectedItems}
          selectText="Genres"
          altFontFamily="Roboto"
          selectedItemTextColor="#FFFFFF"
          selectedItemIconColor="blue"
          tagTextColor="#FFFFFF"
          itemTextColor="#CCC"
          displayKey="name"
          submitButtonColor="#000000"
          submitButtonText="Done"
          styleListContainer={styles.blackBackground}
          styleDropdownMenu={styles.styleDropdownMenu}
          styleDropdownMenuSubsection={styles.styleDropdownMenuSubsection}
          styleInputGroup={styles.blackBackground}
          searchInputStyle={styles.blackBackground}
          styleTextDropdown={styles.dropdownText}
          styleTextDropdownSelected={styles.dropdownText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appTitleView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 33,
  },
  appTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 23,
    backgroundColor: '#00000000',
  },
  appTitleYellow: {
    fontSize: 20,
    color: '#FFB904',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 23,
    backgroundColor: '#00000000',
    marginLeft: 4,
  },
  searchIcon: {
    position: 'absolute',
    right: 0,
    marginRight: 20,
  },
  firstLabel: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
    marginBottom: 36,
    paddingLeft: 20,
  },
  firstLabelText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 21,
    backgroundColor: '#00000000',
  },
  firstLabelSort: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  picker: {
    height: 20,
    width: 160,
    backgroundColor: '#00000000',
    color: 'white',
    marginTop: 20,
  },
  styleDropdownMenu: {
    backgroundColor: '#00000000',
    width: 150,
    margin: 20,
  },
  styleDropdownMenuSubsection: {
    backgroundColor: '#00000000',
    borderBottomColor: '#000000',
    width: 100,
  },
  dropdownText: {
    color: '#FFFFFF',
  },
  notDisplay: {
    display: 'none',
  },
  errorText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 21,
    backgroundColor: '#00000000',
    marginLeft: 20,
  },
  blackBackground: {
    backgroundColor: '#000000',
  },
  arrowIcon: {
    position: 'absolute',
    right: 12,
    top: 0,
    marginRight: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    sort: state.movies.sort,
    genres: state.movies.genres,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchStatus: () => dispatch(moviesActions.changeSearchState()),
    changeSortOption: (option) =>
      dispatch(moviesActions.changeSortOption(option)),
    changeGenres: (selectedGenres) =>
      dispatch(moviesActions.changeGenres(selectedGenres)),
    getAllMovies: (page, title, sort, selectedGenres) =>
      dispatch(moviesActions.fetchAllMovies(page, title, sort, selectedGenres)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
