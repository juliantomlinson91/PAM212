import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './Botones/BotonesScreen';
import TextScreen from './TextScreen';
import ImageBackgroungScreen from './ImageBackgroungScreen';
import ScrollviewScreen from './ScrollviewScreen';
import ActivityindicatorScreen from './ActivityindicatorScreen'
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';

export default function MenuScreen() {
    const [screen, setScreen]=useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'textInput':
            return <TextScreen/>;
        case 'imageBackgroung':
            return <ImageBackgroungScreen/>;
        case 'scrollView':
            return <ScrollviewScreen/>;
        case 'activityindicator':
            return <ActivityindicatorScreen/>;
        case 'flatlist':
            return <FlatListScreen/>;
        case 'modal':
            return <ModalScreen/>;
        case 'bottomsheet':
            return <BottomSheetScreen/>;
        case 'menu':
            default:
                return (
                    <View style={styles.contenedorBotones}>
                    <Text>Menú de Prácticas</Text>
                    <Button color="#FC1969" onPress={()=>setScreen('contador')} title='Pract:Contador'/>
                    <Button color="#FC1969" onPress={()=>setScreen('botones')} title='Pract:Botones'/>
                    <Button color="#FC1969" onPress={()=>setScreen('textInput')} title='Pract:TextInput'/>
                    <Button color="#FC1969" onPress={()=>setScreen('imageBackgroung')} title='Pract:ImageBackgroung'/>
                    <Button color="#00C1D6" onPress={()=>setScreen('scrollView')} title='Pract:ScrollView'/>
                    <Button color="#00C1D6" onPress={()=>setScreen('activityindicator')} title='Pract:ActivityIndicator'/>
                    <Button color="#00C1D6" onPress={()=>setScreen('flatlist')} title='Pract:Flatlist'/>
                    <Button color="#00C1D6" onPress={()=>setScreen('modal')} title='Pract:Modal'/>
                    <Button color="#00C1D6" onPress={()=>setScreen('bottomsheet')} title='Pract:BottomSheet'/>
                    </View>
                 )
                
    }

  }

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#A6F6FF',
    alignItems: 'Center',
    justifyContent: 'center',
  },
})