import { combineReducers } from 'redux'
import carasolReducer from './image-carasoul'
import productReducer from './fetch-products'
export default combineReducers({
  carasoul: carasolReducer,
  products: productReducer,
})
