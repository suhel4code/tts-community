import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router/stack';
import * as SplashScreen from 'expo-splash-screen';
import { PaperProvider } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

import { lightTheme } from '../theme/lightTheme';
import { darkTheme } from '../theme/darkTheme';
import '../localization';
import Header from '@/components/Header';

export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const { t } = useTranslation();

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
      <SafeAreaView style={styles.container}>
        <Header />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the SafeAreaView takes the full height
  },
});
