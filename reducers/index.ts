import { combineReducers } from 'redux';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
