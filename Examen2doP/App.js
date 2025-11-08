import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { SectionList } from 'react-native-web';

export default function App() {

  const categorias = [
    {
      id: 1,
      titulo: 'K-POP',
      articulos:['Seventeen', 'StrayKids'],
      descripcion: '',
      fechaDePublicacion: '07 de noviembre 2025',
      resumen: '',
      imagen: '',
    },
    {
      id: 2,
      titulo: 'POP',
      articulos: ['Louis Tomlinson', 'Harry Styles'],
      descripcion: '',
      fechaDePublicacion: '07 de diciembre 2025',
      resumen: '',
      imagen: '',
    },
    {
      id: 3,
      titulo: 'Regeeaton',
      articulos: ['Maluma', 'Rauw Alejandro'],
      descripcion: '',
      fechaDePublicacion: '',
      resumen: '',
      imagen: '',
    },
  ];
  const SimpleHeader = () => {
    return (
      <View style ={styles.header}>
        <Text style ={styles.header}>Géneros Musicales</Text>
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
              <Text style={styles.subtitle}> ¡Soy una tarjeta!</Text>
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
    backgroundColor: '#fff',

  }
  