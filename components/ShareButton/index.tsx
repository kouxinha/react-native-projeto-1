import { View, Text, TouchableOpacity, Share, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import { RootState } from '@/reducers';

import { green_3, white } from '@/assets/colors';

import HomeIcon from '@/assets/icons/share-variant'

export default function ShareButton() {
  const form = useSelector((state: RootState) => state.form);
  const shareIMC = async () => {
    const result = await Share.share({
      message: 'Meu IMC é: ' + form.imc
    });
  };

  return (
    <View style={style.shareContainer}>
      {
        form.imc != ''
          ?
          <TouchableOpacity
            style={style.touchableContainer}
            onPress={shareIMC}>
            <HomeIcon width={30} height={30} color={white} />

          </TouchableOpacity>
          :
          <View/>
      }
    </View>
  )
}

const style = StyleSheet.create({
  shareContainer: {
    display: 'flex',
    position: 'absolute',
    bottom: 20,
    right: 20,

  },
  touchableContainer: {
    backgroundColor: green_3,
    borderRadius: 360,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchableText: {
    color: white,
    fontSize: 15
  }
})