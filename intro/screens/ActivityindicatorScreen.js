import { Text, StyleSheet, View } from 'react-native'


export default function ActivityindicatorScreen() {

    return (
      <View style={styles.container}>
        <Text style={styles.texto}> Próximamente... </Text>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfefffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#00ff15ff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  texto2: {
    color: '#27c488ff',
    fontSize: 40,
    fontFamily: 'Courier',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  contenedorBotones: {
    marginTop: 15,
    flexDirection: 'column',
    gap: 20,
  },
});