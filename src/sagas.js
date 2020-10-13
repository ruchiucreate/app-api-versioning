import { all } from 'redux-saga/effects';
import versionSaga from './containers/Splash/saga';

const root = function* rootSaga() {
    yield all([versionSaga()]);
};

export default root;
