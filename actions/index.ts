export const SET_HEIGHT = 'SET_HEIGHT';
export const SET_WEIGHT = 'SET_WEIGHT';
export const SET_IMC = 'SET_IMC';

export const setHeight = (height: string) => ({
  type: SET_HEIGHT,
  payload: height,
});

export const setWeight = (weight: string) => ({
  type: SET_WEIGHT,
  payload: weight,
});

export const setIMC = (imc: string, description: string) => ({
  type: SET_IMC,
  payload: { imc, description },
});
