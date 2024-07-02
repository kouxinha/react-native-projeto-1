//react-native
import { View, StyleSheet } from 'react-native';

//components
import Form from '@/components/Form';
import ResultIMC from '@/components/ResultIMC';
import ShareButton from '@/components/ShareButton';

//colors
import { green_1 } from '@/assets/colors';

export default function Main() {

  return (
    <View style={style.container}>
      <Form />
      <ResultIMC/>
      <ShareButton/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: green_1,
    width: '100%',
    height: '75%',
    display: 'flex',
    bottom: 0,
    alignItems: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 40
  }
});