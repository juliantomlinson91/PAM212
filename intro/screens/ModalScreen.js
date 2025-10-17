import { Text, StyleSheet, View } from 'react-native'


export default function ModalScreen() {

    return (
      <View style={styles.container}>
        <Text style={styles.texto}> Próximamente... </Text>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5cff0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#ff078fff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  texto2: {
    color: '#73bb9fff',
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