import { useCallback, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

import { Colors } from "../../global/color";
import { Direction, GestureEventType } from "../../types/game";
import Header from "../Header/Header";
import Score from "../Score/Score";

function Game() {
  const [isGamePaused, setIsGamePaused] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>(Direction.Right);

  const handleGesture = (e: GestureEventType) => {
    const { translationX, translationY } = e.nativeEvent;

    if (Math.abs(translationX) > Math.abs(translationY)) {
      if (translationX > 0) {
        setDirection(Direction.Right);
      } else {
        setDirection(Direction.Left);
      }
    } else {
      if (translationY > 0) {
        setDirection(Direction.Down);
      } else {
        setDirection(Direction.Up);
      }
    }
  };

  const handlePauseGame = useCallback(() => {
    setIsGamePaused((prev) => !prev);
  }, []);

  const handleReloadGame = useCallback(() => {
    setIsGameOver(false);
    setDirection(Direction.Right);
    setIsGamePaused(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onPauseGame={handlePauseGame}
        onReloadGame={handleReloadGame}
        isGamePaused={isGamePaused}
      >
        <Score score={0} />
      </Header>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View style={styles.table}>
          <Text>Game</Text>
        </View>
      </PanGestureHandler>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    gap: 10,
  },
  table: {
    flex: 1,
    backgroundColor: Colors.background,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
});

export default Game;
