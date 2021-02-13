import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, Button, Image, View } from 'react-native';

const styles = StyleSheet.create({
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
    box: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    img: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
});

const BlockOne = () => {
    const [label, setLabel] = useState('bob');

    // const onPressBtn = ({ target: { name, value } }) => {
    //     switch (name) {
    //         case 'first btn':
    //             return setLabel(value);
    //         case '2-nd btn':
    //             return setLabel(value);
    //         case '3-d btn':
    //             return setLabel(value);
    //         default:
    //             alert('something goes wrong');
    //             return;
    //     }
    // }
        const onPressBtn = (value) => {
            setLabel(value);
        }
    
    return (
        <ScrollView>
            <Text style={styles.area}>{label}</Text>
            <View style={styles.box}>
            <View style={styles.wraper}>
                <Image style={styles.img} source={require("../images/Bart_2547.jpg")} alt="Bart" />
                    <Button
                        name="first btn"
                        value='Bart'
                        style={styles.btn}
        title="Press me"
        onPress={() => onPressBtn('Bart')}
                />
            </View>
            <View style={styles.wraper}>
                 <Image style={styles.img} source={require("../images/Lisa_f32a.jpg")} alt="Lisa" />
                    <Button
                        name="2-nd btn"
                        value="Lisa S"
                        style={styles.btn}
        title="Press me"
        onPress={() => onPressBtn('Lisa S')}
                />
                </View>
                <View style={styles.wraper}>
                 <Image style={styles.img} source={require("../images/Homer_15475.jpg")} alt="Homer" />
                    <Button
                        name="3-d btn"
                        value="Homer"
                        style={styles.btn}
        title="Press me"
        onPress={() => onPressBtn('Homer')}
                    />
                </View>
                
                </View>
        </ScrollView>
    )
}

export default BlockOne;