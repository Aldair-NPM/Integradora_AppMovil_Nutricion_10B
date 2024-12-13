import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

// Importa tus pantallas
import HomeScreen from '../screens/HomeScreen';
import CrearDietaScreen from '../screens/CrearDieta';
import CategoriesScreen from '../screens/CategoriesScreen';
import UserProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: {
                    backgroundColor: '#fff',
                },
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarLabel: "Inicio",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="home-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Dietas" 
                component={CategoriesScreen} 
                options={{
                    tabBarLabel: "Dietas",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="restaurant-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Crear Dieta" 
                component={CrearDietaScreen} 
                options={{
                    tabBarLabel: "Crear Dietas",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="add-circle-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={UserProfileScreen} 
                options={{
                    tabBarLabel: "Perfil",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="person-outline" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}