import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { getCarasoulImages } from '../../store/thunk/image-carasoul'

import CarasolComponent from '../common/carasol'

const Slider = ({ getCarasoulImages, carasolImages }) => {
  useEffect(() => {
    getCarasoulImages()
  }, [])

  return <CarasolComponent Images={carasolImages.data} time={5000} />
}

const mapStateToProps = (state) => {
  return { carasolImages: state.carasoul }
}

const mapDispatchToProps = {
  getCarasoulImages,
}
export default connect(mapStateToProps, mapDispatchToProps)(Slider)
