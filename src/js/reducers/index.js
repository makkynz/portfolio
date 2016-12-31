import {combineReducers} from 'redux';
import BrandReducer from './brand.reducer';
import AppReducer from './app.reducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    app: AppReducer,
    brands: BrandReducer   
});

export default allReducers