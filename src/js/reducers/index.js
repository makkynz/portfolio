import {combineReducers} from 'redux';
import App from './app.reducer';


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    app: App    
});

export default allReducers