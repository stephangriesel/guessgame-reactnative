import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Test</Text>
        </View>
    );
}

const styles = StyleSheet => ({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
});

export default StartGameScreen;