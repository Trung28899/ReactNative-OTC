import { combineReducers } from "redux";

// Reducers Import
import appReducer from "./app/appReducer";
// import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
    app: appReducer,
    // auth: authReducer
});

export default rootReducer;