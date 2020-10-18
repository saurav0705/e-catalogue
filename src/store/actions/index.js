const actionCreator = (action, payload = null) =>
  payload ? { type: action, payload: payload } : { type: action }

//Image carasol homepage
export const fetchImagesOfCarasoul = () =>
  actionCreator('FETCH_IMAGES_OF_CARASOUL')
export const successImagesOfCarasoul = (payload) =>
  actionCreator('SUCCESS_IMAGES_OF_CARASOUL', payload)
export const errorImagesOfCarasoul = (payload) =>
  actionCreator('ERROR_IMAGES_OF_CARASOUL', payload)
