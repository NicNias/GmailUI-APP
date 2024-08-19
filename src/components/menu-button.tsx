import { Pressable } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

export function MenuButton() {
  return (
    <Pressable className="mr-4">
      <MaterialIcons name="menu" size={22} color={colors.white} />
    </Pressable>
  );
}
