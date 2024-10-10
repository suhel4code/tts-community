import { useState } from 'react';
import { Card, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useTheme, TextInput, Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const ForgotPassword = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', { email });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card]}>
        <Text variant="displaySmall" style={styles.centeredTitle}>
          {t('auth.forgotPassword.title')}
        </Text>
        <View>
          <TextInput
            label={t('auth.forgotPassword.email')}
            mode="outlined"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
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
      </View>
    </View>
  );
};

export default ForgotPassword;

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
});
