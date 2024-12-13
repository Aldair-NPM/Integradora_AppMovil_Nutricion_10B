// UserProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

const UserProfileScreen = () => {
  const [name, setName] = useState('Adalid26Islas'); // Cambia esto por datos reales
  const [email, setEmail] = useState('adalid@gmail.com'); // Cambia esto por datos reales

  const handleSave = () => {
    // Aquí puedes agregar la lógica para guardar los cambios en el perfil, por ejemplo, enviarlos a una API
    Alert.alert('Éxito', 'Perfil actualizado correctamente.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de Usuario</Text>
      <View style={styles.containerImg}>
        <Image style={styles.img}
        source={ require('../assets/img/familia.jpg')}/>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Guardar Cambios" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  containerImg: {
    width:"100%",
    height: "20%",
    marginBottom: 20,
    alignItems: "center",
  },
  img:{
    width: "40%",
    height: "100%",
    borderRadius: 100
  }
});

export default UserProfileScreen;