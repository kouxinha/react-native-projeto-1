//react-native
import { View, Text, StyleSheet } from 'react-native';

//colors
import { white } from '@/assets/colors';

export default function Title() {;
  return (
    <View style={style.container}>
      <Text style={style.title}>ONEBITHEALTH</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: '25%',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: white,
    fontFamily: 'Exo2'
  }
});