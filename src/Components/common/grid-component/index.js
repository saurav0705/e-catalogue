import React from 'react'
import { GridContainer, GridWrapper, GridHeading } from './styles'
// import ProductCards from '../product-cards'
const GridComponent = ({ heading, children }) => {
  return (
    <GridWrapper>
      {heading ? <GridHeading>{heading}</GridHeading> : null}
      <GridContainer>{children}</GridContainer>
    </GridWrapper>
  )
}

export default GridComponent
