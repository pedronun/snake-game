import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Game from "./src/components/Game/Game";

import { Colors } from './src/global/color';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Game />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
