import config from 'config'
import axios from 'axios'
import { CARASOUL } from '../paths.js'
import {
  fetchImagesOfCarasoul,
  successImagesOfCarasoul,
  errorImagesOfCarasoul,
} from '../actions/index'

export const getCarasoulImages = () => (dispatch) => {
  dispatch(fetchImagesOfCarasoul())
  return axios.get(config.API + CARASOUL).then(
    (resp) => dispatch(successImagesOfCarasoul(resp)),
    (err) => dispatch(errorImagesOfCarasoul(err)),
  )
}
