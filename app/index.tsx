//react-native
import { View, StyleSheet } from 'react-native';

//redux
import { Provider } from 'react-redux';
import store from '@/store';

//components
import Title from '@/components/Title';
import Main from '@/components/Main';

//colors
import { green_3 } from '@/assets/colors';

export default function Index() {
  return (
    <Provider store={store}>
      <View style={style.container}>
        <Title />
        <Main />
      </View>
    </Provider>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: green_3,
    minWidth: '100%',
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  }
});