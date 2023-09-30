import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../global/color";

interface IGameOverModalProps {
  score: number;
  onReloadGame: () => void;
}

function GameOverModal({ score, onReloadGame }: IGameOverModalProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Game Over :(</Text>
        <Text>Score: {score}</Text>
        <TouchableOpacity onPress={onReloadGame} style={styles.button}>
          <Text style={styles.buttonText}>Try again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#00000090",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  content: {
    backgroundColor: "#fff",
    padding: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  }
});

export default GameOverModal;
