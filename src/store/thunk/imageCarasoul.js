import config from '../../config.json'
import axios from 'axios'
import {
  fetchImagesOfCarasoul,
  successImagesOfCarasoul,
  errorImagesOfCarasoul,
} from '../actions/index'

export const getCarasoulImages = () => (dispatch) => {
  dispatch(fetchImagesOfCarasoul())
  return axios.get(config.API_LOCAL + 'images').then(
    (resp) => dispatch(successImagesOfCarasoul(resp)),
    (err) => dispatch(errorImagesOfCarasoul(err)),
  )
}
