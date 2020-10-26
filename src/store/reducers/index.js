import { combineReducers } from 'redux'
import carasolReducer from './image-carasoul'
import productReducer from './fetch-products'
import searchReducer from './search-products'
import authReducer from './login'
import cartReducer from './cart'
import wishlistReducer from './wishlist'

export default combineReducers({
  carasoul: carasolReducer,
  products: productReducer,
  search: searchReducer,
  auth: authReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
})
