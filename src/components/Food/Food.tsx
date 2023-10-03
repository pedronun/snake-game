import { Text, View } from "react-native";
import { Coordinate } from "../../types/game";

interface IFoodProps {
  food: Coordinate;
}

function Food({ food }: IFoodProps) {
  return (
    <Text
      style={{
        position: "absolute",
        left: food.x * 10,
        top: food.y * 10,
        fontSize: 16,
      }}
    >
      🍎
    </Text>
  );
}

export default Food;
