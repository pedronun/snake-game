import { SafeAreaView, Text, View } from "react-native";
import {
  GestureEvent,
  PanGestureHandler,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import Header from "../Header/Header";

function Game() {
  const handleGesture = (e: GestureEvent<PanGestureHandlerEventPayload>) => {
    console.log("gesture", e.nativeEvent);
  };

  return (
    <SafeAreaView>
      <Header />
      <PanGestureHandler onGestureEvent={handleGesture}>
        <Text>Real Game</Text>
      </PanGestureHandler>
    </SafeAreaView>
  );
}

export default Game;
