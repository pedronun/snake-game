import { Text, View } from "react-native";
import { Coordinate } from "../../types/game";

interface IFoodProps {
  food: Coordinate;
}

function Food({ food }: IFoodProps) {
  return (
    <View
      style={{
        width: 20,
        height: 20,
        borderRadius: 7,
        position: "absolute",
        left: food.x * 10,
        top: food.y * 10,
      }}
    >
      <Text>🍎</Text>
    </View>
  )
}

export default Food;
