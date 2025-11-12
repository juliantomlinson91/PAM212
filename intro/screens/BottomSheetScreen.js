import React, {useRef, useMemo} from 'react'
import { Text, StyleSheet, View, Button, Image } from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function BottomSheetScreen () {
  const BottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [1, '25%', '50%']);

  const openSheet = () => {
    BottomSheetRef.current?.expand();
  };

  return(
    <GestureHandlerRootView>
      <View>
        <Button
        title='Abrir'
        onPress={openSheet}
      />
      </View>
      <BottomSheet
        ref={BottomSheet}
        snapPoints={snapPoints}
        enablePanDownToClose = {true}
        backgroundStyle={style.BSheet}
      >
        <BottomSheetView
          style={style.BView}
        >

          <Text> BottomSheet Ejemplo!! </Text>
          <Image 
            style={style.IMG}
            source={require('../assets/background.png')}
          />

        </BottomSheetView>

      </BottomSheet>
    </GestureHandlerRootView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#463c3cff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  BSheet: {
    backgroundColor: '#282727'
  },
  BView: {
    flex: 1,
    alignItems: 'center'
  },
  IMG: {
    marginTop: 50,
    width: 200,
    height:200
  }
})