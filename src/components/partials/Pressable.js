import { Pressable } from "react-native";
import { Textos } from "./Text";

export default function Pressavel({ onPress, styles, children }) {
  return <Pressable style={styles} onPress={onPress}>{children}</Pressable>;
}
