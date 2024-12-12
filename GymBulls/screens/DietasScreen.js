import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DietasScreen = () => {
    return(
        <View>
            <Text style={styles.title}>
                Dietas Screen
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

export default DietasScreen;