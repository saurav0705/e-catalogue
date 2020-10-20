const initialState = {
  loading: false,
  error: false,
  data: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_IMAGES_OF_CARASOUL':
      return { ...state, loading: true }
    case 'SUCCESS_IMAGES_OF_CARASOUL':
      return { data: action.payload.data, loading: false, error: false }
    case 'ERROR_IMAGES_OF_CARASOUL':
      return { ...state, error: true, loading: false }
    default:
      return state
  }
}

export default reducer
