import timeReducer from './time'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    time: timeReducer
})

export default rootReducer