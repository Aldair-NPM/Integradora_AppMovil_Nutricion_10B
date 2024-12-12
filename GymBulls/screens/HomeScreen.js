import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

const HomeScreen = () => {
    return (
        <>
          <ScrollView>
    
              <View style={{ flexDirection: 'row' }}>
                  <Image
                      style={styles.banner}
                      source={ require('../assets/img/pesas.jpg') }
                  />
              </View>
    
              <View style={styles.contenedor}>
                  <Text style={styles.titulo}>Planes Saludables a tu medida</Text>
                  <ScrollView
                    horizontal
                  >
                      <View>
                          <Image
                              style={styles.ciudad}
                              source={ require('../assets/img/comida1.jpg') }
                          />
                      </View>
                      <View>
                          <Image
                              style={styles.ciudad}
                              source={ require('../assets/img/comida2.jpg') }
                          />
                      </View>
                      <View>
                          <Image
                              style={styles.ciudad}
                              source={ require('../assets/img/comida3.jpg') }
                          />
                      </View>
                      <View>
                          <Image
                              style={styles.ciudad}
                              source={ require('../assets/img/comida4.jpg') }
                          />
                      </View>
                  </ScrollView>
    
    
                  <Text style={styles.titulo}>Personal altamente capacitado</Text>
                  <View>
                      <View>
                          <Image
                              style={styles.mejores}
                              source={ require('../assets/img/entrenador1.jpg') }
                          />
                      </View>
                      <View>
                          <Image
                              style={styles.mejores}
                              source={ require('../assets/img/entrenador2.jpg') }
                          />
                      </View>
                      <View>
                          <Image
                              style={styles.mejores}
                              source={ require('../assets/img/clases.jpg') }
                          />
                      </View>
                  </View>
    
                  <Text style={styles.titulo}>Igualdad y respeto para todos</Text>
    
                  <View
                    style={styles.listado}
                  >
                      <View style={styles.listadoItem}>
                          <Image
                              style={styles.mejores}
                              source={ require('../assets/img/ejercicio.jpg') }
                          />
                      </View>
                      <View style={styles.listadoItem}>
                          <Image
                              style={styles.mejores}
                              source={ require('../assets/img/familia.jpg') }
                          />
                      </View>
                      <View style={styles.listadoItem}>
                          <Image
                              style={styles.mejores}
                              source={ require('../assets/img/igualdad.jpg') }
                          />
                      </View>
                      <View style={styles.listadoItem}>
                          <Image
                              style={styles.mejores}
                              source={ require('../assets/img/corredora.jpg') }
                          />
                      </View>
                  </View>
                  <View>
                      <View>
                          <Image
                              style={styles.mejores}
                              source={ require('../assets/img/instalaciones2.jpg') }
                          />
                      </View>
                  </View>
    
    
              </View>
    
          </ScrollView>
        </>
      );
    };
    
    const styles = StyleSheet.create({
      banner: {
        height: 250,
        flex: 1
      },
      titulo: {
        fontWeight: 'semibold',
        fontSize: 20,
        marginVertical: 10
      },
      contenedor: {
        marginHorizontal: 10,
        borderRadius: 15
      },
      ciudad: {
        width: 250,
        height: 300,
        marginRight: 10,
        borderRadius: 15
      },
      mejores: {
        width: '100%',
        height: 200,
        marginVertical: 5,
        borderRadius: 15,
        borderRadius: 15
      },
      listado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderRadius: 15
      },
      listadoItem: {
        flexBasis: '49%',
        borderRadius: 15
      }
    });

export default HomeScreen;