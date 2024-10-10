import { useState } from 'react';
import { Card, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useTheme, TextInput, Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { Link } from 'expo-router';

const SignUp = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', { firstName, lastName, email, password });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card]}>
        <Text variant="displaySmall" style={styles.centeredTitle}>
          {t('auth.signUp.title')}
        </Text>
        <View>
          <TextInput
            label={t('auth.signUp.firstName')}
            mode="outlined"
            value={firstName}
            onChangeText={(text) => {
              setFirstName(text);
            }}
            style={styles.input}
          />
          <TextInput
            label={t('auth.signUp.lastName')}
            mode="outlined"
            value={lastName}
            onChangeText={(text) => {
              setLastName(text);
            }}
            style={styles.input}
          />
          <TextInput
            label={t('auth.signUp.email')}
            mode="outlined"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.input}
          />
          <TextInput
            label={t('auth.signUp.password')}
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
            {t('auth.signUp.submit')}
          </Button>
        </View>
        <View style={styles.linkContainer}>
          <Text>{t('auth.signUp.account')}</Text>
          <Link href="/signIn" style={styles.link}>
            {t('auth.signUp.signIn')}
          </Link>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

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
    elevation: 0,
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
});
