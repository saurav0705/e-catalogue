import { combineReducers } from 'redux'
import carasolReducer from './image-carasoul'
import productReducer from './fetch-products'
import searchReducer from './search-products'
export default combineReducers({
  carasoul: carasolReducer,
  products: productReducer,
  search: searchReducer,
})
