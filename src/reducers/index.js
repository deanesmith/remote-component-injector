import { combineReducers } from 'redux';
import { default as component } from './componentReducer'

// Reducers
const rootReducer = combineReducers({
    component: component
});

export default rootReducer;
