import { combineReducers } from "redux";
import {product , isLoading} from './product'

const reducer =  combineReducers({
product,
isLoading
})


export default reducer;
