import { takeEvery, put, takeLatest, call } from 'redux-saga/effects';
import Axios from 'axios';
import config from '../../utilities/config';
import { REQUEST_CALL_GET_API_VERSION, REQUEST_CALL_GET_API_RESULT } from './types';
import { getApiVersionSuccess, getApiResultSuccess } from './action';

export function* requestApiVersion() {
    const url = `${config.API_BASE_URL}${config.VERSION_URL}`;
    try {
        const { data, status } = yield Axios.get(url);
        console.log('ApiVersion data: ' + JSON.stringify(data, null, 2))
        if (status === 200) {
            for (let item of data) {
                if (item.app_version == 1.1 && item.active == true) {
                    const result = yield requestApiResult(item.api_version);
                    console.log('result saga : ' + JSON.stringify(result))
                    alert(JSON.stringify(result))
                    yield put(getApiResultSuccess(result));
                }
                else {
                    //show popup to force update the app
                }
            }
        } else {
            alert('Server Error');
        }
    } catch (error) {
        alert(error.message);
    }
}

function* requestApiResult(apiVersion) {
    const url = `${config.API_BASE_URL}/${apiVersion}${config.WELCOME_URL}`;
    try {
        const { data, status } = yield Axios.get(url);
        console.log('ApiResult data: ' + JSON.stringify(data))
        if (status === 200) {
            return data;
        } else {
            alert('Server Error');
        }
    } catch (error) {
        alert(error.message);
    }
}

function* sagaVersioning() {
    yield takeLatest(REQUEST_CALL_GET_API_VERSION, requestApiVersion);
}
export default sagaVersioning;
