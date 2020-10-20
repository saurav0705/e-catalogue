import React, { useState } from 'react'
import {
  CardContainer,
  ImageContainer,
  LabelContainer,
  ActionContainer,
  WishListButton,
  BuyActionContainer,
  ActionButton,
} from './styles'
import { Img } from 'react-image'
import ImageLoader from '../image-loader'

const ProductCards = (props) => {
  const [wishlisted, setWishlisted] = useState(false)
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const getActions = () => {
    switch (count) {
      case 0:
        return <ActionButton onClick={increment}>buy</ActionButton>
      default:
        return (
          <React.Fragment>
            <ActionButton onClick={decrement}>-</ActionButton>
            <ActionButton background={'transparent'}>{count}</ActionButton>
            <ActionButton onClick={increment}>+</ActionButton>
          </React.Fragment>
        )
    }
  }

  return (
    <CardContainer>
      <ImageContainer>
        <Img
          src={
            'https://drive.google.com/uc?id=1RIGEIFyJlVwKWIDdQGNGB7Ol0UhAptvf'
          }
          loader={<ImageLoader />}
        />
      </ImageContainer>
      <LabelContainer>Chemistry Equipments</LabelContainer>
      <ActionContainer>
        <WishListButton
          wishlisted={wishlisted}
          onClick={() => setTimeout(() => setWishlisted(!wishlisted), 200)}
        />
        <BuyActionContainer>{getActions()}</BuyActionContainer>
      </ActionContainer>
    </CardContainer>
  )
}

export default ProductCards
