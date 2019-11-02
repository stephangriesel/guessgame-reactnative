import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameoverScreen = props => {
    return <View style={styles.screen}>
        <Text>GAME OVER!!</Text>
    </View>
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameoverScreen;