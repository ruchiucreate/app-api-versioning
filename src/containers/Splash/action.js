import {
    REQUEST_CALL_GET_API_VERSION,
    ON_SUCCESS_GET_API_VERSION,
    REQUEST_CALL_GET_API_RESULT,
    ON_SUCCESS_GET_API_RESULT,
    ON_API_FAILURE,
} from './types';

export const getApiVersionRequest = () => ({
    type: REQUEST_CALL_GET_API_VERSION,
});

export const getApiVersionSuccess = (versionData) => ({
    type: ON_SUCCESS_GET_API_VERSION,
    versionData,
});

export const getApiResultRequest = (apiVersion) => ({
    type: REQUEST_CALL_GET_API_RESULT,
    apiVersion,
});

export const getApiResultSuccess = (apiData) => ({
    type: ON_SUCCESS_GET_API_RESULT,
    apiData,
});

export const onApiFailure = () => ({
    type: ON_API_FAILURE,
});
