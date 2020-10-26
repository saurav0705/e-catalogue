const initialState = {
  loading: false,
  error: false,
  data: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CART':
      return { ...state, loading: true }
    case 'SUCCESS_CART':
      return { data: action.payload.data, loading: false, error: false }
    case 'ERROR_CART':
      return { ...state, error: true, loading: false }
    case 'CLEAR_CART':
      return initialState
    default:
      return state
  }
}

export default reducer
