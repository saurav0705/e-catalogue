import React, { useState, useEffect } from 'react'
import {
  GridContainer,
  GridWrapper,
  GridHeading,
  ReachedBottom,
  ActionButton,
} from '../styles'
import ProductCards from '../product-cards'

const GridComponent = ({ heading, children, products, count, infinte }) => {
  const [renderedList, setRenderedList] = useState([])
  useEffect(() => {
    if (products && renderedList.length === 0) {
      if (products.length < count) {
        setRenderedList([...products])
      } else {
        setRenderedList([...products.slice(0, count)])
      }
    }
  }, [products])

  const renderProducts = (products) =>
    products.map((product, index) => (
      <ProductCards key={index} data={product} />
    ))

  const loadData = () => {
    console.log('hello')
    if (renderedList.length === products.length) {
      return
    }

    if (products.length - renderedList.length <= count) {
      setRenderedList([...products])
    } else {
      setRenderedList([
        ...renderedList,
        ...products.slice(renderedList.length, renderedList.length + count),
      ])
    }
  }

  return (
    <GridWrapper>
      {heading ? <GridHeading>{heading}</GridHeading> : null}
      <GridContainer>
        {children ? children : null}
        {products ? renderProducts(renderedList) : null}
      </GridContainer>
      {products && products.length !== renderedList.length ? (
        <ActionButton onClick={loadData} margin={'auto'}>
          Load More
        </ActionButton>
      ) : null}
      {infinte ? <ReachedBottom /> : null}
    </GridWrapper>
  )
}

export default GridComponent
