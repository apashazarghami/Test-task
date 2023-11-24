import { combineReducers } from "redux";
import processReducer from "./process/processReducer";

const rootReducer = combineReducers({
    process: processReducer
})

export default rootReducer