import { useCallback, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

import { Colors } from "../../global/color";
import { checkEatsFood } from "../../helpers/checkEatsFood";
import { checkGameIsOver } from "../../helpers/checkGameIsOver";
import { randomPosition } from "../../helpers/randomPosition";
import { Coordinate, Direction, GestureEventType } from "../../types/game";
import Food from "../Food/Food";
import Header from "../Header/Header";
import Score from "../Score/Score";
import Snake from "../Snake/Snake";
import GameOverModal from "../GameOverModal/GameOverModal";

const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 63 };

function checkSelfCollision(snake: Coordinate[]): boolean {
  const [head, ...body] = snake;
  return body.some((part: Coordinate) => part.x === head.x && part.y === head.y);
}

function Game() {
  const [isGamePaused, setIsGamePaused] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [direction, setDirection] = useState<Direction>(Direction.Up);
  const [snake, setSnake] = useState<Coordinate[]>([
    randomPosition(GAME_BOUNDS.xMax, GAME_BOUNDS.yMax),
  ]);
  const [score, setScore] = useState(0);
  const [food, setFood] = useState<Coordinate>(
    randomPosition(GAME_BOUNDS.xMax, GAME_BOUNDS.yMax)
  );

  const handleGesture = useCallback((event: GestureEventType) => {
    const { translationX, translationY } = event.nativeEvent;
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
  }, []);

  const handleSnakeMove = useCallback(() => {
    const snakeHead = snake[0];
    const newHead = { ...snakeHead };

    if (checkGameIsOver({ area: GAME_BOUNDS, head: newHead }) || checkSelfCollision(snake)) {
      setIsGameOver((prev) => !prev);
      return;
    }

    switch (direction) {
      case Direction.Up:
        newHead.y -= 1;
        break;
      case Direction.Down:
        newHead.y += 1;
        break;
      case Direction.Left:
        newHead.x -= 1;
        break;
      case Direction.Right:
        newHead.x += 1;
        break;
      default:
        break;
    }

    if (checkEatsFood(newHead, food, 2)) {
      setFood(randomPosition(GAME_BOUNDS.xMax, GAME_BOUNDS.yMax));
      setSnake([newHead, ...snake]);
      setScore(score + 10);
    } else {
      setSnake([newHead, ...snake.slice(0, -1)]);
    }
  }, [direction, food, score, snake]);

  const handleReloadGame = useCallback(() => {
    setSnake([randomPosition(GAME_BOUNDS.xMax, GAME_BOUNDS.yMax)]);
    setFood(randomPosition(GAME_BOUNDS.xMax, GAME_BOUNDS.yMax));
    setIsGameOver(false);
    setScore(0);
    setDirection(Direction.Up);
    setIsGamePaused(false);
  }, []);

  const handlePauseGame = useCallback(() => {
    setIsGamePaused((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isGameOver) {
      const intervalId = setInterval(() => {
        !isGamePaused && handleSnakeMove();
      }, 50);
      return () => clearInterval(intervalId);
    }
  }, [snake, isGameOver, isGamePaused]);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onPauseGame={handlePauseGame}
        onReloadGame={handleReloadGame}
        isGamePaused={isGamePaused}
      >
        <Score score={score} />
      </Header>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <View style={styles.table}>
          <Snake snake={snake} />
          <Food food={food} />
          {isGameOver ? <GameOverModal score={score} onReloadGame={handleReloadGame} /> : null}
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