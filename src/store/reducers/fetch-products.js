const initialState = {
  loading: false,
  error: false,
  data: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, loading: true }
    case 'SUCCESS_PRODUCTS':
      return { data: action.payload.data, loading: false, error: false }
    case 'ERROR_PRODUCTS':
      return { ...state, error: true, loading: false }
    default:
      return state
  }
}

export default reducer
