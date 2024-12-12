import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
//Screens
import HomeScreen from '../screens/HomeScreen'
import DietasScreen from '../screens/DietasScreen'
import CrearDietaScreen from '../screens/CrearDieta'
import ProfileScreen from '../screens/Profile'
import CategoriesScreen from '../screens/CategoriesScreen'

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: "red"
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarLabel: "Inicio",
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Meals" 
                component={CategoriesScreen} 
                options={{
                    tabBarLabel: "Dietas",
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Crear Dieta" 
                component={CrearDietaScreen} 
                options={{
                    tabBarLabel: "Crear Dietas",
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                options={{
                    tabBarLabel: "Perfil",
                    headerShown: false
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
    )
}