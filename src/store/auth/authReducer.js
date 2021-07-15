import * as actionTypes from '../actionTypes';

const initialState = {
    emailErrorMsg: '',
    fnameErrorMsg: '',
    unameErrorMsg: '',
    serialErrorMsg: '',
    passErrorMsg: ''
};

const authReducer = (state = initialState, action) => {
    switch(action) {
        case actionTypes.SET_EMAIL_ERR: {
            return {
                ...state,
                emailErrorMsg: action.payload
            };
        }
        case actionTypes.SET_FNAME_ERR: {
            return {
                ...state,
                fnameErrorMsg: action.payload
            };
        }
        case actionTypes.SET_UNAME_ERR: {
            return {
                ...state,
                unameErrorMsg: action.payload
            };
        }
        case actionTypes.SET_SERIAL_ERR: {
            return {
                ...state,
                serialErrorMsg: action.payload
            };
        }
        case actionTypes.SET_PASS_ERR: {
            return {
                ...state,
                passErrorMsg: action.payload
            };
        }
        default:
            return state;
    }
};

export default authReducer;