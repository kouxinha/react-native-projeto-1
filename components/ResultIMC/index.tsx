import { green_5 } from '@/assets/colors';
import { Text, View, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import { RootState } from '@/reducers';

export default function () {
  const form = useSelector((state: RootState) => state.form);

  return (
    <View style={style.container}>
      <Text style={style.description}>
        { form.description }
      </Text>

      <Text style={style.result}>
        { form.imc }
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 'auto'
  },
  description: {
    color: green_5,
    fontSize: 10
  },
  result: {
    color: green_5,
    fontSize: 45,
    display: 'flex',
    textAlign: 'center'
  }
});