const initialState = {
  loading: false,
  error: false,
  data: [],
  isLoggedIn: false,
  isAdmin: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, loading: true }
    case 'SUCCESS_LOGIN':
      return {
        data: { id: action.payload.data[0]._id },
        loading: false,
        error: false,
        isLoggedIn: true,
      }
    case 'ERROR_LOGIN':
      return { ...state, error: true, loading: false }
    case 'LOG_OUT':
      return { ...initialState }
    default:
      return state
  }
}

export default reducer
