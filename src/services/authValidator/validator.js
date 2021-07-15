import { useDispatch, useSelector } from "react-redux";
import * as authActions from '../../store/auth/authActions';
import * as Strings from '../../constants/strings';
import * as Constants from '../../constants/const';

const dispatch = useDispatch();
const language = useSelector(state => state.app.language);

export const validateEmail = (text) => {
    if (text === null || text === '') {
        if (language.name === Constants.VN)
            dispatch(authActions.setEmailError(Strings.Vietnamese.errors.validation.fieldRequired));
        else 
            dispatch(authActions.setEmailError(Strings.English.errors.validation.fieldRequired));
    } else {
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(text) === false) {
            
        }
    }
};