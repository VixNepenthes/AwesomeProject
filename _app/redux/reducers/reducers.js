import {combineReducers} from 'redux';
import taskReducer from './taskReducer';

//TODO: including taskReducer from taskReducer.js

const rootReducer = combineReducers({task: taskReducer});

export default rootReducer;
