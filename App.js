import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameoverScreen from './screens/GameoverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds);
  };

  // Get selected number from startGameScreen when start button pressed, then store it in state of app component (selectedNumber)  then passed down to GameScreen if condition met. In GameScreen userNumber is passed with userChoice prop & generates new number which is opponent guess
  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) { // if userNumber is true
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />; // display content GameScreen
  } else if (guessRounds > 0) {
    content = <GameoverScreen />
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
