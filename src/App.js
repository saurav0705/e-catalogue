import React, { useEffect } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { getProducts } from './store/thunk/fetch-products'
import ProductCards from './Components/common/product-cards'
import GridComponent from './Components/common/grid-component'

const App = (props) => {
  useEffect(() => {
    props.getProducts()
  }, [])
  return (
    <div className="App">
      <GridComponent heading={'products'}>
        {Array(20)
          .fill('something')
          .map((elem, index) => (
            <ProductCards key={index} />
          ))}
      </GridComponent>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    carasoul: state.carasoul,
  }
}
const mapDispatchToProps = {
  getProducts,
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
