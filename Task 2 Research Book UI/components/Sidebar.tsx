import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Sidebar = () => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.label}>
        <Text>Facts</Text>
      </View>
      <View style={styles.label}>
        <Text>Objective</Text>
      </View>
      <View style={styles.label}>
        <Text>Stages</Text>
        <View style={styles.label}>
          <Text style={styles.labelChild}>Line Graph</Text>
          <Text style={styles.labelChild}>Bar Graph</Text>
          <Text style={styles.labelChild}>Pie Chart</Text>
        </View>
      </View>
      <View style={styles.label}>
        <Text>Acts and Selection</Text>
      </View>
      <View style={styles.label}>
        <Text>Relevancy by Bharat Law</Text>
      </View>
      <View style={styles.label}>
        <Text>Legal Strategy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    padding: 5,
    marginLeft: 10,
    width: '25%',
    height: 400,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 3,
  },
  labelChild: {
    backgroundColor: 'white',
    color: 'grey',
    marginTop: 5,
    padding: 7,
  },
});

export default Sidebar;
