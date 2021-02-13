import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: 3,
  }
})

const Separator = () => {
  return (
    <Text style={styles.separator}>
      </Text>
  )
}

export default Separator;