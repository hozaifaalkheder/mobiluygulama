import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const AdminScreen = () => {
  const [patientName, setPatientName] = useState('');
  const [date, setDate] = useState('');
  const [IgA, setIgA] = useState('');
  const [IgM, setIgM] = useState('');
  const [IgG, setIgG] = useState('');

  const handleAddReport = async () => {
    try {
      await firestore().collection('reports').add({
        patientName,
        date,
        IgA: parseFloat(IgA),
        IgM: parseFloat(IgM),
        IgG: parseFloat(IgG),
        userId: auth().currentUser.uid, // Yönetici kimliği
      });
      Alert.alert('Başarılı', 'Tahlil başarıyla eklendi.');
      setPatientName('');
      setDate('');
      setIgA('');
      setIgM('');
      setIgG('');
    } catch (error) {
      Alert.alert('Hata', 'Tahlil eklenemedi.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tahlil Ekle</Text>
      <TextInput
        style={styles.input}
        placeholder="Hasta Adı"
        value={patientName}
        onChangeText={setPatientName}
      />
      <TextInput
        style={styles.input}
        placeholder="Tarih (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="IgA"
        value={IgA}
        onChangeText={setIgA}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="IgM"
        value={IgM}
        onChangeText={setIgM}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="IgG"
        value={IgG}
        onChangeText={setIgG}
        keyboardType="numeric"
      />
      <Button title="Tahlil Ekle" onPress={handleAddReport} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
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

export default AdminScreen;
