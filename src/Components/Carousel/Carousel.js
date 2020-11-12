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

var slideIndex = 1
const Slider = ({ getCarasoulImages, carasolImages }) => {
  useEffect(() => {
    {
      console.log('useeffect')
    }

    getCarasoulImages()
  }, [])

  useEffect(() => {
    console.log(`shiva`, document.getElementsByClassName('img').length)
  }, [carasolImages])

  window.addEventListener('DOMContentLoaded', function () {
    showSlides(slideIndex)
  })

  const plusSlides = (n) => {
    showSlides((slideIndex += n))
  }

  const showSlides = (n) => {
    var i
    var slides = document.getElementsByClassName('img')
    console.log(`slides`, slides)
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      console.log(`gursimra`, slides)
      slides[i].style.display = 'none'
      //   slides[i]?.style !== 'undefined'
      //     ? (slides[i].style.display = 'none')
      //     : console.log(null)
    }
    console.log(`gursimra`, slides[slideIndex - 1])

    // slides[slideIndex - 1]?.style !== 'undefined'
    //   ? (slides[slideIndex - 1].style.display = 'none')
    //   : console.log(null)

    slides[slideIndex - 1].style.display = 'block'
  }

  return (
    <Slide>
      {console.log('render')}
      <section className="carousel">
        <AiOutlineArrowLeft
          className="arrow-left"
          onClick={() => {
            plusSlides(1)
          }}
        />
        {carasolImages.data.map((item, index) => {
          return <img src={item} alt="image" className="img" key={index} />
        })}

        <AiOutlineArrowRight
          className="arrow-right"
          onClick={() => {
            plusSlides(-1)
          }}
        />
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
