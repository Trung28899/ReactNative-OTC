import * as actionTypes from '../actionTypes';

export function setEmailError(payload) {
    return {
        type: actionTypes.SET_EMAIL_ERR,
        payload: payload
    };
};

export function setFnameError(payload) {
    return {
        type: actionTypes.SET_FNAME_ERR,
        payload: payload
    };
};

export function setUnameError(payload) {
    return {
        type: actionTypes.SET_UNAME_ERR,
        payload: payload
    };
};

export function setSerialError(payload) {
    return {
        type: actionTypes.SET_SERIAL_ERR,
        payload: payload
    };
};

export function setPassError(payload) {
    return {
        type: actionTypes.SET_PASS_ERR,
        payload: payload
    };
};