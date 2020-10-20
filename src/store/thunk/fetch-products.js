import config from 'config'
import axios from 'axios'
import { PRODUCTS } from '../paths.js'
import { fetchProducts, successProducts, errorProducts } from '../actions/index'

export const getProducts = () => (dispatch) => {
  dispatch(fetchProducts())
  return axios.get(config.API + PRODUCTS).then(
    (resp) => dispatch(successProducts(resp)),
    (err) => dispatch(errorProducts(err)),
  )
}
