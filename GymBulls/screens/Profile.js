import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProfileScreen = () => {
    return(
        <View>
            <Text style={styles.title}>
                Perfil de usuario
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        textAlign: "center",
        marginTop: "24%"
    },
    
  })

export default ProfileScreen;