import { Pressable } from "react-native";
import { Textos } from "./Text";
// Componente do Pressable... Com Props incluido
export default function Pressavel({ onPress, styles, children }) {
  return <Pressable style={styles} onPress={onPress}>{children}</Pressable>;
}
