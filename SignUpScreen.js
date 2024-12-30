import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import firebase from '../config/firebase';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Login'))
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  input: { width: '80%', height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 16, paddingHorizontal: 8 },
  title: { fontSize: 24, marginBottom: 16 },
});

export default SignUpScreen;
