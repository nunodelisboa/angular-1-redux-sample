import { combineReducers } from 'redux';
import { TodosReducer }  from './todos.reducer';

export const RootReducer = combineReducers({
    currentState: TodosReducer
});
