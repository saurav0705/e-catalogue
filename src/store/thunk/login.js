import config from 'config'
import axios from 'axios'
import {
  tryLogingIn,
  successLogingIn,
  errorLoginngIn,
  logOutFromSite,
  successCart,
  successWishlist,
  clearCart,
  clearWishlist,
} from '../actions/index'
import { CUSTOMERS } from '../paths'

export const logIn = (email) => (dispatch) => {
  dispatch(tryLogingIn())
  return axios.post(config.API + CUSTOMERS, { body: { email: email } }).then(
    (resp) => {
      dispatch(successLogingIn(resp))
      dispatch(successCart({ data: resp.data[0].cart }))
      dispatch(successWishlist({ data: resp.data[0].wishlist }))
    },
    (err) => dispatch(errorLoginngIn(err)),
  )
}

export const logOut = () => (dispatch) => {
  dispatch(logOutFromSite())
  dispatch(clearCart())
  dispatch(clearWishlist())
}
