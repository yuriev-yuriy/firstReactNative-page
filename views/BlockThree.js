import React, { useState } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

const styles = StyleSheet.create({
  box: {
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
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6
    },
    wrapper: {
        flex: 1,
        width: 100,
        alignSelf: 'flex-end',
       marginRight: 30,
    },
});

const BlockThree = () => {
    const [login, setLogin] = useState('Login');
    const [password, setPassword] = useState('Password');

    return (<View style={styles.box}>
        <TextInput
      style={styles.area}
      onChangeText={login => setLogin(login)}
      value={login}
        />
        <TextInput
      style={styles.area}
      onChangeText={password => setPassword(password)}
      value={password}
        />
        <View style={styles.wrapper}>
        <Button style={styles.btn}
        title="Press me"
        onPress={() => alert(`login: ${login}; password: ${password}`)}
            />
            </View>
        </View>
    )
}

export default BlockThree;