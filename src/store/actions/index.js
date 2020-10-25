const actionCreator = (action, payload = null) =>
  payload ? { type: action, payload: payload } : { type: action }

//Image carasol homepage
export const fetchImagesOfCarasoul = () =>
  actionCreator('FETCH_IMAGES_OF_CARASOUL')
export const successImagesOfCarasoul = (payload) =>
  actionCreator('SUCCESS_IMAGES_OF_CARASOUL', payload)
export const errorImagesOfCarasoul = (payload) =>
  actionCreator('ERROR_IMAGES_OF_CARASOUL', payload)

//Product fetch actions
export const fetchProducts = () => actionCreator('FETCH_PRODUCTS')
export const successProducts = (payload) =>
  actionCreator('SUCCESS_PRODUCTS', payload)
export const errorProducts = (payload) =>
  actionCreator('ERROR_PRODUCTS', payload)

export const fetchProductsSearch = () => actionCreator('FETCH_PRODUCTS_SEARCH')
export const successProductsSearch = (payload) =>
  actionCreator('SUCCESS_PRODUCTS_SEARCH', payload)
export const errorProductsSearch = (payload) =>
  actionCreator('ERROR_PRODUCTS_SEARCH', payload)
