import { View, Text, StyleSheet } from 'react-native';
import SignUp from '../screens/SignUp';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Tab Home</Text>
      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
