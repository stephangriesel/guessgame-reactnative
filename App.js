import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  // Get selected number from startGameScreen when start button pressed, then store it in state of app component (selectedNumber)  then passed down to GameScreen if condition met. In GameScreen userNumber is passed with userChoice prop & generates new number which is opponent guess
  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber) { // if userNumber is true
    content = <GameScreen userChoice={userNumber} />; // display content GameScreen
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess" />
      {content}

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
