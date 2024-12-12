// CategoriesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fetchCategories } from '../api/api';// Ajusta la ruta según tu estructura de archivos
import Modal from 'react-native-modal';

const CategoriesScreen = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoryData = await fetchCategories();
        setCategories(categoryData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    toggleModal();
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error al cargar las categorías: {error.message}</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.idCategory}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategoryPress(item)}>
            <View style={styles.item}>
              <Image source={{ uri: item.strCategoryThumb }} style={styles.image} />
              <Text style={styles.title}>{item.strCategory}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalContent}>
          {selectedCategory && (
            <>
              <Text style={styles.modalTitle}>{selectedCategory.strCategory}</Text>
              <Image source={{ uri: selectedCategory.strCategoryThumb }} style={styles.modalImage} />
              <Text>{selectedCategory.strCategoryDescription || 'Descripción no disponible'}</Text>
            </>
          )}
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 100,
    marginRight: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'semibold',
    marginLeft: 10
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: 150,
    height: 100,
    marginBottom: 10,
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
  },
});

export default CategoriesScreen;