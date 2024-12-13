import React, { useEffect, useRef } from "react";
import { Image, StyleSheet, View, Animated } from "react-native";
import icon from "../assets/img/icon.png";

export default function SplashScreen() {
    const animation = useRef(new Animated.Value(0)).current; // Inicializa la animación

    useEffect(() => {
        // Inicia la animación
        Animated.timing(animation, {
            toValue: 1,
            duration: 3000, // Duración de la animación en milisegundos
            useNativeDriver: false, // Necesario para usar el width
        }).start();

        // Oculta la splash screen después de la animación
        const timer = setTimeout(() => {
            // Aquí puedes navegar a la siguiente pantalla
            // Por ejemplo, usando React Navigation:
            // navigation.replace("NextScreen");
        }, 3000); // Duración igual a la animación

        return () => clearTimeout(timer); // Limpia el temporizador
    }, [animation]);

    // Interpolación para la barra de carga
    const width = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"], // De 0% a 100%
    });

    return (
        <View style={styles.container}>
            <View>
                <Image source={icon} style={styles.image} />
            </View>
            <View style={styles.progressContainer}>
                <Animated.View style={[styles.progressBar, { width }]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "cover",
    },
    progressContainer: {
        width: "40%",
        height: 10,
        backgroundColor: "black",
        borderRadius: 5,
        overflow: "hidden",
        marginTop: 20,
    },
    progressBar: {
        height: "100%",
        backgroundColor: "red", // Color de la barra de progreso
    },
});