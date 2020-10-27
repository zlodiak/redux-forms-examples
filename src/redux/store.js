import { createStore, combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import account from '../Components/Page6/account';

import appReducer from './appReducer';


let reducers = combineReducers({
    form: formReducer,
    appReducer,
    account,
});

const store = createStore(reducers);

export default store;

store.subscribe(v => {
    console.log(store.getState())
});

window.state = store.getState