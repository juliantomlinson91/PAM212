import React from 'react';
import {
  View,
  Text,
  FlatList,
  SectionList,
  StyleSheet,
} from 'react-native';


const alumnos = [
  { id: '1', nombre: 'Jeon Jungkook' },
  { id: '2', nombre: 'Joan Sebastian' },
  { id: '3', nombre: 'Louis Tomlinson' },
  { id: '4', nombre: 'Belanova' },
  { id: '5', nombre: 'Omar Courtz' },
];

const categorias = [
  {
    titulo: 'Primavera',
    data: ['Marzo', 'Abril', 'Mayo'],
  },
  {
    titulo: 'Verano',
    data: ['Junio', 'Julio', 'Agosto'],
  },
  {
    titulo: 'Otoño',
    data: ['Septiembre', 'Octubre', 'Noviembre'],
  },
  {
    titulo: 'Invierno',
    data: ['Diciembre', 'Enero', 'Febrero'],
  },
];

export default function FlatListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⭐ Ejemplo de FlatList ⭐</Text>

      <FlatList
        data={alumnos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.itemText}>* {item.nombre}</Text>
          </View>
        )}
      />

      <Text style={styles.title}>⭐ Ejemplo de SectionList ⭐ </Text>

      <SectionList
        sections={categorias}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>• {item}</Text>
        )}
        renderSectionHeader={({ section: { titulo } }) => (
          <Text style={styles.sectionHeader}>{titulo}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF" ,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    color: '#000000ff',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  itemBox: {
    backgroundColor: "#A6F6FF" ,
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  itemText: {
    color: '#000000ff',
    fontSize: 16,
  },
  sectionHeader: {
    color: '#364c53ff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
});