import { testReducer } from './test.reducer';
import { combineReducers } from 'redux';


export default combineReducers( {
    test: testReducer,
});
