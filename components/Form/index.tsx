import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Vibration, TouchableOpacity, Share } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setHeight, setWeight, setIMC } from '@/actions'; // Atualize para incluir setIMC
import { RootState } from '@/reducers';
import { green_2, green_4, green_5, white } from '@/assets/colors';

export default function Form() {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);
  
  const [height, setHeightInput] = useState<string>('');
  const [weight, setWeightInput] = useState<string>('');
  const [imcState, setIMCResult] = useState<string>('');

  const handleSubmit = () => {
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!isNaN(heightNum) && !isNaN(weightNum) && heightNum > 0 && weightNum > 0) {
      const heightMeter = heightNum / 100;
      const imc = (weightNum / (heightMeter ** 2)).toFixed(2);

      dispatch(setHeight(height));
      dispatch(setWeight(weight));
      dispatch(setIMC(imc, 'Índice de Massa Corpórea'));
      
      setIMCResult(imc);
    } else {
      Vibration.vibrate(200);
      dispatch(setIMC('', 'Revise os valores!'));
    }

    setHeightInput('');
    setWeightInput('');
  };

  const shareIMC = async () => {
    const result = await Share.share({
      message: 'Meu IMC é: '+imcState
    });
  };

  return (
    <View style={style.container}>
      <View style={style.containerInput}>
        <Text style={style.label}>Altura</Text>
        <TextInput
          style={style.textInput}
          placeholder='Ex. 175 (cm)'
          keyboardType='numeric'
          value={height}
          onChangeText={text => setHeightInput(text)}
        />
      </View>

      <View style={style.containerInput}>
        <Text style={style.label}>Peso</Text>
        <TextInput
          style={style.textInput}
          placeholder='Ex. 69 (kg)'
          keyboardType='numeric'
          value={weight}
          onChangeText={text => setWeightInput(text)}
        />
      </View>

      <View style={style.containerButton}>
        <Pressable
          style={style.button}
          onPress={handleSubmit}
        >
          <Text style={style.buttonText}>Calcular IMC</Text>
        </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 16
  },
  containerInput: {
    padding: 10
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    color: green_5
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 20,
    height: 40,
    padding: 10,
    backgroundColor: white,
    borderColor: green_2
  },
  containerButton: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    color: white
  },
  button: {
    width: 'auto',
    height: 40,
    backgroundColor: green_4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 10  
  },
  buttonText: {
    color: white,
    fontSize: 20
  }
});
