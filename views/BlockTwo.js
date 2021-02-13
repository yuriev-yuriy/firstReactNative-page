import React, { useState } from 'react';
// import DatePicker from 'react-native-date-picker';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});

const BlockTwo = () => {
    const [date, setDate] = useState(new Date());

    return (
        <View style={styles.container}>
        <Text style={styles.area}></Text>
      {/* <DatePicker
      date={date}
      onDateChange={setDate}
    /> */}
        </View>
    )
}

export default BlockTwo;