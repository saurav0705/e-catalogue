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

//product search actions
export const fetchProductsSearch = () => actionCreator('FETCH_PRODUCTS_SEARCH')
export const successProductsSearch = (payload) =>
  actionCreator('SUCCESS_PRODUCTS_SEARCH', payload)
export const errorProductsSearch = (payload) =>
  actionCreator('ERROR_PRODUCTS_SEARCH', payload)
export const clearProductsSearch = () => actionCreator('CLEAR_PRODUCTS_SEARCH')

//login and logout actions
export const tryLogingIn = () => actionCreator('LOGIN')
export const successLogingIn = (payload) =>
  actionCreator('SUCCESS_LOGIN', payload)
export const errorLoginngIn = (payload) => actionCreator('ERROR_LOGIN', payload)
export const logOutFromSite = () => actionCreator('LOG_OUT')

//fetch cart
export const fetchCart = () => actionCreator('FETCH_CART')
export const successCart = (payload) => actionCreator('SUCCESS_CART', payload)
export const errorCart = (payload) => actionCreator('ERROR_CART', payload)
export const clearCart = (payload) => actionCreator('CLEAR_CART', payload)

//fetch wishlist
export const fetchWishlist = () => actionCreator('FETCH_WISHLIST')
export const successWishlist = (payload) =>
  actionCreator('SUCCESS_WISHLIST', payload)
export const errorWishlist = (payload) =>
  actionCreator('ERROR_WISHLIST', payload)
export const clearWishlist = (payload) =>
  actionCreator('CLEAR_WISHLIST', payload)
