const initialState = {
  loading: false,
  error: false,
  data: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WISHLIST':
      return { ...state, loading: true }
    case 'SUCCESS_WISHLIST':
      return { data: action.payload.data, loading: false, error: false }
    case 'ERROR_WISHLIST':
      return { ...state, error: true, loading: false }
    case 'CLEAR_WISHLIST':
      return initialState
    default:
      return state
  }
}

export default reducer
