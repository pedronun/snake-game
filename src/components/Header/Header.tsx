import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Colors } from "../../global/color";

interface IHeaderProps {
  onPauseGame: () => void;
  onReloadGame: () => void;
  isGamePaused: boolean;
  children?: JSX.Element;
}

function Header({
  onPauseGame,
  onReloadGame,
  isGamePaused,
  children,
}: IHeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onReloadGame}>
        <Ionicons name="reload-circle" size={35} color={Colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPauseGame}>
        <FontAwesome
          name={isGamePaused ? "play-circle" : "pause-circle"}
          size={35}
          color={Colors.primary}
        />
      </TouchableOpacity>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: Colors.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});

export default Header;
