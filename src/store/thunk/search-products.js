import config from 'config'
import axios from 'axios'
import { SEARCH_PRODUCTS } from '../paths.js'
import {
  fetchProductsSearch,
  successProductsSearch,
  errorProductsSearch,
  clearProductsSearch,
} from '../actions/index'

export const getProductsSearch = (text) => (dispatch) => {
  if (text === '') {
    dispatch(clearProductsSearch())
    return
  }
  dispatch(fetchProductsSearch())
  return axios
    .get(config.API + SEARCH_PRODUCTS, { params: { name: text } })
    .then(
      (resp) => dispatch(successProductsSearch(resp)),
      (err) => dispatch(errorProductsSearch(err)),
    )
}
