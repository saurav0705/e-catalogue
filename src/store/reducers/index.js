import { combineReducers } from 'redux'
import carasolReducer from './imageCarasoul'

export default combineReducers({
  carasoul: carasolReducer,
})
