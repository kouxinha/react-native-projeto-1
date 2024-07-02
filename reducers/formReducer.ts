import { SET_HEIGHT, SET_WEIGHT, SET_IMC } from '@/actions';

export interface FormState {
  description: string;
  height: string;
  weight: string;
  imc: string;
}

const initialState: FormState = {
  description: '',
  height: '',
  weight: '',
  imc: '',
};

export type Action = 
  | { type: 'SET_HEIGHT'; payload: string }
  | { type: 'SET_WEIGHT'; payload: string }
  | { type: 'SET_IMC'; payload: { imc: string; description: string } };

const formReducer = (state = initialState, action: Action): FormState => {
  switch (action.type) {
    case SET_HEIGHT:
      return { ...state, height: action.payload };
    case SET_WEIGHT:
      return { ...state, weight: action.payload };
    case SET_IMC:
      return { 
        ...state, 
        imc: action.payload.imc,
        description: action.payload.description 
      };
    default:
      return state;
  }
};

export default formReducer;
