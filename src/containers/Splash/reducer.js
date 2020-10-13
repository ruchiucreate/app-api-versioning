import {
    REQUEST_CALL_GET_API_VERSION,
    ON_SUCCESS_GET_API_VERSION,
    REQUEST_CALL_GET_API_RESULT,
    ON_SUCCESS_GET_API_RESULT,
} from './types';

const INITIAL_STATE = {
    loading: false,
    versionData: null,
    apiVersion: '',
    apiData: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_CALL_GET_API_VERSION:
            return {
                ...state,
                loading: true,
            };

        case ON_SUCCESS_GET_API_VERSION:
            const { versionData } = action
            return {
                ...state,
                versionData,
                loading: false,
            };

        case REQUEST_CALL_GET_API_RESULT:
            const { apiVersion } = action
            return {
                ...state,
                apiVersion,
                loading: true,
            };

        case ON_SUCCESS_GET_API_RESULT:
            const { apiData } = action
            return {
                ...state,
                apiData,
                loading: false,
            };

        default:
            return state;
    }
};
