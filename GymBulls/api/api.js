// api.js
import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories.php`);
    return response.data.categories; // Devuelve la lista de categorías
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};