import React from 'react'
import { ImageLoaderContainer } from './styles'
import giphy from 'src/resources/images/giphy.gif'

const ImageLoader = (props) => {
  return (
    <ImageLoaderContainer>
      <img src={giphy} alt="loading-image" />
    </ImageLoaderContainer>
  )
}

export default ImageLoader
