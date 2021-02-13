import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, SafeAreaView } from 'react-native';
import BlockOne from './views/BlockOne';
import BlockTwo from './views/BlockTwo';
import BlockThree from './views/BlockThree';
import Separator from './views/Separator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      {/* style={styles.container} */}
        <BlockOne />
        <Separator/>
        <BlockTwo />
        <Separator/>
      <BlockThree />
      <Text style={{flex: 1, backgroundColor: 'powderblue', textAlign: 'center', marginTop: 40, height: 240, fontSize: 26}}>Привет мир!!!</Text>
      {/* <StatusBar style="auto" /> */}
      </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
    area: {
        flex: 1,
        alignSelf: 'center',
        margin:10,
        height: 34,
        width: 260,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6
    },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
