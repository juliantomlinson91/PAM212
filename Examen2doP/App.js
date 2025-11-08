import React from 'react';
import { StyleSheet, Text, View, ScrollView, Switch} from 'react-native';

export default function App() {

  const DATA= [
    {
      id: 1,
      titulo: 'K-POP',
      artista: 'SEVETNTEEN',
      descripcion: '',
      fechaDePublicacion: '07 de noviembre 2025',
      resumen: '',
      imagen: '',
    },
    {
      id: 2,
      titulo: 'K-POP',
      artista: 'STRAY KIDS',
      descripcion: '',
      fechaDePublicacion: '07 de diciembre 2025',
      resumen: '',
      imagen: '',
    },
    {
      id: 3,
      titulo: 'POP',
      artista: 'LOUIS TOMLINSON',
      descripcion: '',
      fechaDePublicacion: '07 de noviembre 2025',
      resumen: '',
      imagen: '',
    },
    {
      id: 4,
      titulo: 'POP',
      artista: 'HARRY STYLES',
      descripcion: '',
      fechaDePublicacion: '07 de diciembre 2025',
      resumen: '',
      imagen: '',
    },
    {
      id: 5,
      titulo: 'REGUEEATON',
      artista: 'RAUW ALEJANDRO',
      descripcion: '',
      fechaDePublicacion: '07 de noviembre 2025',
      resumen: '',
      imagen: '',
    },
    {
      id: 6,
      titulo: 'REGUEEATON',
      artista: 'BAD BUNNY',
      descripcion: '',
      fechaDePublicacion: '07 de diciembre 2025',
      resumen: '',
      imagen: '',
    }
  ];
 
  const toggleSwitch = () => setAceptado(previousState => !previousState);
 
  const SimpleHeader = () => {
    return (
      <View style ={styles.header}>
        <Text style ={styles.header}>Elige tu Género Musical</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SimpleHeader/>
      <ScrollView
      horizontal ={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.scrollContent}
      >
        {DATA.map(val => {
          return (
            <View style={styles.card} key = {val.id}>
              <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}> Leer más </Text>
            <Switch
              trackColor={{ false: '#A6F6FF', true: '#14949c' }}
              thumbColor={aceptado ? '#ffffff' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={aceptado}
            />
              </View>
            </View>
            
          );
        })}
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
   container: {
    flex: 1,
  },
  header: {
    height: 120,
    backgroundColor: '#285055',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  title: {
    color: '#ffffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  scrollContent: {
    paddingVertical: 10,
  },
    card:{
    width: 100,
    height: 150,
    backgroundColor: "#A6F6FF",
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  subtitle: {
    color: '#55284bff',
    fontWeight: 'bold'
  },
});