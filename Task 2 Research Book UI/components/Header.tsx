import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.backButton}>Back</Text>
      <View style={styles.headingContainer}>
      <Text style={styles.heading}>Antony V.S. K.G. Raghavan Nair</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        height: 70,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
    },
    backButton: {
        color: "blue",
        fontSize: 20,
        width: "10%"
    },
    headingContainer: {
        width: "90%",
    },
    heading: {
        color: "blue",
        fontSize: 25,
        // textAlign: "center",
        marginBottom: -10,
        marginLeft: 50
    }
})

export default Header;
