import { useState } from 'react';
import { Card, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useTheme, TextInput, Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { Link } from 'expo-router';

const SignIn = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', { email, password });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card]}>
        <Text variant="displaySmall" style={styles.centeredTitle}>
          {t('auth.signIn.title')}
        </Text>
        <View>
          <TextInput
            label={t('auth.signIn.email')}
            mode="outlined"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.input}
          />
          <TextInput
            label={t('auth.signIn.password')}
            mode="outlined"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
            secureTextEntry
            style={styles.input}
          />
        </View>
        <View>
          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.submitButton}
          >
            {t('auth.signIn.submit')}
          </Button>
        </View>
        <Link href="/forgotPassword" style={styles.forgotPassword}>
          {t('auth.signIn.forgotPassword')}
        </Link>
        <View style={styles.linkContainer}>
          <Text>{t('auth.signIn.account')}</Text>
          <Link href="/signUp" style={styles.link}>
            {t('auth.signIn.signUp')}
          </Link>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  card: {
    width: '100%',
    borderRadius: 5,
  },
  centeredTitle: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '800',
    marginTop: 20,
  },
  input: {
    marginBottom: 15,
  },
  submitButton: {
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  link: {
    color: 'blue',
  },
  forgotPassword: {
    color: 'blue',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});
