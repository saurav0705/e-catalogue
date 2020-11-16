import React, { useState, useEffect } from 'react'
import {
  CarasolNavigatorsLeft,
  CarasolNavigatorsRight,
  CarasolWrapper,
  ImageLoader,
  CarasolContainer,
  CarasolContent,
} from '../styles'
import { Img } from 'react-image'

const CarasolComponent = ({ Images, height, width, time }) => {
  const [show, setShow] = useState(0)
  const [interval, setIntervalShow] = useState()
  useEffect(() => {
    if (Images.length) {
      setTimeout(() => changeImage('next'), time || 10000)
    }
  }, [Images])

  useEffect(() => {
    let intervalImageChange = setTimeout(
      () => changeImage('next'),
      time || 10000,
    )
    setIntervalShow(intervalImageChange)
  }, [show])

  const changeImage = (type) => {
    if (!Images.length) {
      return
    }
    clearTimeout(interval)
    switch (type) {
      case 'next':
        setShow(show === Images.length - 1 ? 0 : show + 1)
        break
      case 'previous':
        setShow(show === 0 ? Images.length - 1 : show - 1)
        break
      default:
        return
    }
  }
  return (
    <CarasolContainer height={height || '600px'} width={width || '100%'}>
      <CarasolWrapper>
        <CarasolNavigatorsLeft
          onClick={() => {
            changeImage('previous')
          }}
        />
        <CarasolContent>
          {Images.map((item, index) => (
            <React.Fragment>
              {index === show ? (
                <Img
                  src={item}
                  alt="carasol-image"
                  key={index}
                  loader={<ImageLoader />}
                />
              ) : null}
            </React.Fragment>
          ))}
        </CarasolContent>

        <CarasolNavigatorsRight
          onClick={() => {
            changeImage('next')
          }}
        />
      </CarasolWrapper>
    </CarasolContainer>
  )
}

export default CarasolComponent
