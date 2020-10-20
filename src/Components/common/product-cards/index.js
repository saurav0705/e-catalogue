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

const ProductCards = ({ key, data }) => {
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
    <CardContainer key={key}>
      <ImageContainer>
        <Img src={data.images[0]} loader={<ImageLoader />} />
      </ImageContainer>
      <LabelContainer>{data.name}</LabelContainer>
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
