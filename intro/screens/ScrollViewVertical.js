import { ScrollView, Text, StyleSheet, View } from 'react-native'
import React from 'react';

const DATA = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
];

const SimpleHeader = () => {
  return (
    <View style ={styles.header}>
      <Text style={styles.title}>ScrollView Vertical</Text>
    </View>
  );
};

const SimpleScrollView = () => {
  return (
    <View>
      <SimpleHeader/>
      <ScrollView
      showVerticalScrollIndicator={false}
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

export default SimpleScrollView

const styles = StyleSheet.create ({
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
  card:{
    height: 100,
    backgroundColor: "#A6F6FF",
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  subtitle: {
    color: '#55284bff',
    fontWeight: 'bold'
  },
});