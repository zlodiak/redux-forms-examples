import { createStore, combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import appReducer from './appReducer';


let reducers = combineReducers({
    form: formReducer,
    appReducer,
});

const store = createStore(reducers);

export default store;

store.subscribe(v => {
    console.log(store.getState())
});

window.state = store.getState