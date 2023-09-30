import { StyleSheet, View } from "react-native";
import { Coordinate } from "../../types/game";
import { Colors } from "../../global/color";

interface ISnakeProps {
  snake: Coordinate[];
}

function Snake({ snake }: ISnakeProps) {
  return snake.map((snakePart, index) => (
    <View
      key={index}
      style={[styles.snake, { left: snakePart.x * 10, top: snakePart.y * 10 }]}
    />
  ));
}

const styles = StyleSheet.create({
  snake: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: Colors.primary,
    position: "absolute",
  },
});

export default Snake;
