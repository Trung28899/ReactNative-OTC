import * as actionTypes from '../actionTypes';
import { LANGUAGES } from '../../components/languages';

const initialState = {
    language: LANGUAGES[0]
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LANGUAGE_EN: {
            return {
                ...state,
                language: LANGUAGES[1]
            };
        }
        case actionTypes.LANGUAGE_VN: {
            return {
                ...state,
                language: LANGUAGES[0]
            };
        }
        default:
            return state;
    }
}

export default appReducer;