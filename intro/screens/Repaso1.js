import { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet, ImageBackground, Switch, Animated} from 'react-native';

export default function Repaso1() {

  const [isLoading, setIsLoading] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));

  const [nombre, setNombre] = useState('');
  const [Correoelectronico, setCorreoelectronico] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [aceptado, setAceptado] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start(() => {
      setTimeout(() => setIsLoading(false), 1000);
    });
  }, []);

  const validarCorreo = (correo) => {
    if (!correo.includes('@')) return false;
    if (!correo.includes('.')) return false;
    if (correo.startsWith('@') || correo.endsWith('@')) return false;
    if (correo.startsWith('.') || correo.endsWith('.')) return false;
    return true;
  };

  const enviarDatos = () => {
    if (nombre.trim() === '' || Correoelectronico.trim() === '') {
      Alert.alert('Error', 'Por favor completa todos los campos');
      setMensaje('Faltan campos por llenar');
    } else if (!validarCorreo(Correoelectronico)) {
      Alert.alert('Error', 'El correo electrónico no es válido');
      setMensaje('Correo no válido');
    } else if (!aceptado) {
      Alert.alert('Aviso', 'Debes aceptar los términos y condiciones');
      setMensaje('Falta aceptar los términos');
    } else {
      Alert.alert('¡Éxito!', 'Datos enviados correctamente');
      setMensaje('Datos enviados correctamente');
    }
  };

  const toggleSwitch = () => setAceptado(previousState => !previousState);

  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        <Animated.Image 
          source={require('../assets/background.png')}
          style={[styles.splashImage, { opacity: fadeAnim }]}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <ImageBackground 
      source={require("../assets/2.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.containergrad}> 
        <View style={styles.container}>
          <Text style={styles.title}>Registro de usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={Correoelectronico}
            onChangeText={setCorreoelectronico}
            keyboardType='email-address'
          />

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}> Aceptar términos y condiciones</Text>
            <Switch
              trackColor={{ false: '#A6F6FF', true: '#14949c' }}
              thumbColor={aceptado ? '#ffffff' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={aceptado}
            />
          </View>

          <Button title="Registrarse" onPress={enviarDatos} />

          <Text style={styles.mensaje}>{mensaje}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize:25,
    fontWeight:'bold'
  },
  containergrad:{
    width:'80%',
    padding:20,
    borderRadius:9,
    backgroundColor: '#b6b6b680',
    justifyContent: 'center',
    alignContent: 'center',
  },
  input:{
    width:'100%',
    borderWidth:3,
    borderColor:'#A6F6FF',
    padding:12,
    borderRadius:9,
    marginBottom: 10,
  },
  mensaje:{
    marginTop:20,
    fontSize:18,
    color:'#0c5b7aff',
    textAlign:'center'
  },
  background:{
    flex:1,
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  switchContainer:{
    marginTop:20,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    width: '80%'
  },
  switchLabel:{
    color:'#0c5b7aff',
    fontSize:16,
  },
  splashContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffffff'
  },
  splashImage:{
    width:250,
    height:250
  }
});