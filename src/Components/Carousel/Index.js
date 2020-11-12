import React, { useEffect, useState } from 'react'
import { Img } from 'react-image'
import { connect } from 'react-redux'
import { getCarasoulImages } from '../../store/thunk/image-carasoul'
import { SlideContainer, ImageWrapper } from './styles'
import { Carousel } from 'react-responsive-carousel'
import { Slide } from './slide'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import './style.css'

//import SliderContent from './SliderContent'
var number = 0
const Slider = ({ getCarasoulImages, carasolImages }) => {
  useEffect(() => {
    getCarasoulImages()
  }, [])

  useEffect(() => {
    setlist({
      ...list,
      arr: carasolImages.data,
      length: carasolImages.data.length,
    })
  }, [carasolImages])

  const [list, setlist] = useState({ arr: [], imageNumber: 0, length: 0 })

  //console.log('hi')

  const changeImage = (n) => {
    if (n === 'left') {
      console.log('hell0')

      number == 0 && number <= list.length
        ? ((document.querySelector('.img').src = list.arr[number]),
          (document.querySelector('img').className = 'img'))
        : ((number = number - 1),
          (document.querySelector('.img').src = list.arr[number]),
          (document.querySelector('.img').className = 'img'))
    } else {
      console.log('hell')
      number == list.length - 1 && number <= list.length
        ? ((number = list.length - 1),
          (document.querySelector('.img').src = list.arr[number]))
        : // (document.querySelector('.img').className = 'img1'),
          // setTimeout(() => {
          //   document.querySelector('.img1').className = 'img'
          // }, 1000)
          ((number = number + 1),
          console.log(number),
          (document.querySelector('.img').src = list.arr[number]),
          document.querySelector('.img').addEventListener('load', () => {
            document.querySelector('.img').className = 'img1'
            setTimeout(() => {
              document.querySelector('.img1').className = 'img'
            }, 1500)
          }))
    }
  }

  return (
    <Slide>
      <section className="arrow">
        <section
          onClick={() => {
            changeImage('left')
          }}
        >
          <AiOutlineArrowLeft className="arrow-left" />
        </section>
        {/* <Img src={list.arr[0]} alt="image" className="img" /> */}
        <img src={list.arr[0]} alt="image" className="img" />
        <section
          onClick={() => {
            changeImage('right')
          }}
        >
          <AiOutlineArrowRight className="arrow-right" />
        </section>
      </section>
    </Slide>
  )
}

const mapStateToProps = (state) => {
  return { carasolImages: state.carasoul }
}

const mapDispatchToProps = {
  getCarasoulImages,
}
export default connect(mapStateToProps, mapDispatchToProps)(Slider)
