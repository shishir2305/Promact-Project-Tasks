import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchAndProfileIcons = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textColor}>Logo</Text>
      </View>

      <View>
        <Text style={styles.textColor}>Alerts</Text>
        <Text style={styles.textColor}>Search</Text>
        <Text style={styles.textColor}>Research Books</Text>
        <Text style={styles.textColor}>Profile</Text>
      </View>

      <View style={styles.bottomMargin}>
        <Text style={styles.textColor}>Logout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: 100,
    height: 600,
    display: 'flex',
    justifyContent: 'space-between',
  },
  textColor: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
  },
  bottomMargin: {
    marginBottom: 20,
  },
});

export default SearchAndProfileIcons;
