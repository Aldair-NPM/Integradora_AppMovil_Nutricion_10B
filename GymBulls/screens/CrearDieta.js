// CreateDietScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const CreateDietScreen = () => {
  const [dietName, setDietName] = useState('');
  const [dietDescription, setDietDescription] = useState('');
  const [dietType, setDietType] = useState('');

  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para enviar los datos, por ejemplo, a una API
    if (!dietName || !dietDescription || !dietType) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    // Simulación de envío de datos
    Alert.alert('Éxito', 'Dieta creada correctamente.');
    // Reiniciar el formulario
    setDietName('');
    setDietDescription('');
    setDietType('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Dieta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de la dieta"
        placeholderTextColor="#888"
        value={dietName}
        onChangeText={setDietName}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción de la dieta"
        placeholderTextColor="#888"
        value={dietDescription}
        onChangeText={setDietDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de dieta (ej. Vegana, Keto)"
        placeholderTextColor="#888"
        value={dietType}
        onChangeText={setDietType}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre del miembro al que se le asigna la dieta"
        placeholderTextColor="#888"
        value={dietName}
        onChangeText={setDietName}
      />
      <TextInput
        style={styles.input}
        placeholder="Objetivos de la dieta"
        placeholderTextColor="#888"
        value={dietDescription}
        onChangeText={setDietDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Recomendaciones o restricciones"
        placeholderTextColor="#888"
        value={dietType}
        onChangeText={setDietType}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Crear Dieta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: 'red',
    paddingHorizontal: 40,
    paddingVertical:10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: "center"
  },
});

export default CreateDietScreen;