import * as React from "react";
import { Button, useTheme } from "react-native-paper";
import { View, Text } from "react-native";

export default function App() {
  const theme = useTheme();
  return (
    <View>
      <Text style={{ backgroundColor: theme.colors.primary }}> Clear me</Text>
    </View>
  );
}
