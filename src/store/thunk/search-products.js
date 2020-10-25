import config from 'config'
import axios from 'axios'
import { SEARCH_PRODUCTS } from '../paths.js'
import {
  fetchProductsSearch,
  successProductsSearch,
  errorProductsSearch,
} from '../actions/index'

export const getProductsSearch = (text) => (dispatch) => {
  dispatch(fetchProductsSearch())
  return axios
    .get(config.API + SEARCH_PRODUCTS, { params: { name: text } })
    .then(
      (resp) => dispatch(successProductsSearch(resp)),
      (err) => dispatch(errorProductsSearch(err)),
    )
}
