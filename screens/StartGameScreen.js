import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.singleButton}><Button title="Confirm" onPress={() => { }} color={Colors.primary} /></View>
                    <View style={styles.singleButton}><Button title="Reset" onPress={() => { }} color={Colors.secondary} /></View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    singleButton: {
        width: 110
    }

});

export default StartGameScreen;