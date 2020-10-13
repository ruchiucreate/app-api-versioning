import { combineReducers } from 'redux';
import versionReducer from './containers/Splash/reducer';

const appReducer = combineReducers({
    versionReducer: versionReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};
export default rootReducer;
