import React, { useEffect } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { getProducts } from './store/thunk/fetch-products'
import GridComponent from './Components/common/grid-component'
import ListingsLoader from './Components/common/listings-loader'
import ErrorDisplayComponent from './Components/common/error-display'

const App = ({ getProducts, products }) => {
  useEffect(() => {
    getProducts()
  }, [])

  const getProductsListings = (products) => {
    if (products.loading) {
      return (
        <GridComponent heading={'products'}>
          <ListingsLoader />
        </GridComponent>
      )
    }

    if (products.error) {
      return (
        <GridComponent heading={'products'}>
          <ErrorDisplayComponent />
        </GridComponent>
      )
    }

    return (
      <GridComponent
        heading={'products'}
        products={products.data}
        count={8}
        infinte={true}
      />
    )
  }
  return <React.Fragment>{getProductsListings(products)}</React.Fragment>
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
