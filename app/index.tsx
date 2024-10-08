import { useEffect, useState } from "react";
import { PaperProvider } from "react-native-paper";
import App from "./App";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { lightTheme } from "../theme/lightTheme";
import { darkTheme } from "../theme/darkTheme";

export default function Main() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
