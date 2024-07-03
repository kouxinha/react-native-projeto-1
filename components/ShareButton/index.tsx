import { View, Text, TouchableOpacity, Share, StyleSheet, FlatList, ListRenderItem } from 'react-native';

import { useSelector } from 'react-redux';
import { RootState } from '@/reducers';

import { green_3, white } from '@/assets/colors';

import HomeIcon from '@/assets/icons/share-variant'

interface data {
  id: string,
  title: string
}

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

export default function ShareButton() {
  const form = useSelector((state: RootState) => state.form);

  const shareIMC = async () => {
    const result = await Share.share({
      message: 'Meu IMC é: ' + form.imc
    });
  };

  const renderItem: ListRenderItem<data> = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

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

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}/>
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