import React, { useEffect } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { getCarasoulImages } from './store/thunk/imageCarasoul'
import ProductCards from './Components/common/product-cards'

const App = (props) => {
  useEffect(() => {
    props.getCarasoulImages()
  }, [])
  return (
    <div className="App" onClick={() => props.getCarasoulImages()}>
      <ProductCards />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    carasoul: state.carasoul,
  }
}
const mapDispatchToProps = {
  getCarasoulImages,
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
