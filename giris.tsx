import React, { useState } from 'react';
import { getAuth } from "firebase/auth";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  // Kullanıcı Kaydı
const handleRegister = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Başarılı', 'Kayıt tamamlandı!');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Hata', error.message);
      } else {
        Alert.alert('Hata', 'Bilinmeyen bir hata oluştu.');
      }
    }
  };
  
  // Kullanıcı Girişi
const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Başarılı', 'Giriş yapıldı!');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Hata', error.message);
      } else {
        Alert.alert('Hata', 'Bilinmeyen bir hata oluştu.');
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isRegistering ? 'Kayıt Ol' : 'Giriş Yap'}</Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={isRegistering ? 'Kayıt Ol' : 'Giriş Yap'}
        onPress={isRegistering ? handleRegister : handleLogin}
      />
      <Button
        title={isRegistering ? 'Giriş Yap' : 'Kayıt Ol'}
        onPress={() => setIsRegistering(!isRegistering)}
        color="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});

export default App;
