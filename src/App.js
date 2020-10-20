import React, { useEffect } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { getProducts } from './store/thunk/fetch-products'
import ProductCards from './Components/common/product-cards'
import GridComponent from './Components/common/grid-component'
import ListingsLoader from './Components/common/listings-loader'
import ErrorDisplayComponent from './Components/common/error-display'

const App = ({ getProducts, products }) => {
  useEffect(() => {
    getProducts()
  }, [])

  const getProductsListings = (products) => {
    if (products.loading) {
      return <ListingsLoader />
    }

    if (products.error) {
      return <ErrorDisplayComponent />
    }

    return products.data.map((elem, index) => (
      <ProductCards key={index} data={elem} />
    ))
  }
  return (
    <GridComponent heading={'products'}>
      {getProductsListings(products)}
    </GridComponent>
  )
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
}
const mapDispatchToProps = {
  getProducts,
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
