import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import firebase from '../config/firebase';

const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => navigation.navigate('Login'))
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to E-Laboratuvar Sistemi!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
});

export default HomeScreen;
