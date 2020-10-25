const initialState = {
  loading: false,
  error: false,
  data: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SEARCH':
      return { ...state, loading: true }
    case 'SUCCESS_PRODUCTS_SEARCH':
      return {
        data: action.payload.data.products,
        loading: false,
        error: false,
      }
    case 'ERROR_PRODUCTS_SEARCH':
      return { ...state, error: true, loading: false }
    default:
      return state
  }
}

export default reducer
