//1. Import: Zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';
import R,{useState} from 'react';

//2. Main: Zona de componentes
export default function App() {

  const[contador,setContador]=useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Contador:  </Text>
      <Text style={styles.texto2}> {contador} </Text>

      <View style={styles.contenedorBotones}>
      <Button color="#00C1D6" title="Incrementar" onPress={()=>setContador(contador+1)}/>
      <Button color="#FC1969" title="Disminuir" onPress={()=>setContador(contador-1)}/>
      <Button color="#dd44f1ff" title="Reiniciar" onPress={()=>setContador(0)}/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

//3. Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A6F6FF',
    alignItems: 'Center',
    justifyContent: 'center',
  },
  texto:{
    color: '#285055',
    fontSize: 30,
    fontFamily:'Times New Roman',
    fontWeight:'bold',
    fontStyle: 'italic',
    textDecorationLine:'line-through',

  },
   texto2:{
    color: '#267780',
    fontSize: 40,
    fontFamily:'Courier',
    fontWeight:'400',
    textDecorationLine:'underline',
  },
  contenedorBotones:{
    marginTop: 15,
    flexDirection: 'row',
    gap:20,
  },


});
