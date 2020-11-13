import React, { useEffect, useState } from 'react'
import { Img } from 'react-image'
import { connect } from 'react-redux'
import { getCarasoulImages } from '../../store/thunk/image-carasoul'
import { SlideContainer, ImageWrapper } from './styles'
import { Carousel } from 'react-responsive-carousel'
import { Slide } from './slide'
import { AiOutlineArrowRight } from 'react-icons/ai'
import './style.css'

//import SliderContent from './SliderContent'

var slideIndex = 1
const Slider = ({ getCarasoulImages, carasolImages }) => {
  useEffect(() => {
    getCarasoulImages()
  }, [])

  useEffect(() => {
    var slides = document.getElementsByClassName('img').length
    if (slides > 0) showSlides(slideIndex)
  }, [carasolImages])

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
    }
    console.log(`gursimra`, slides[slideIndex - 1])

    slides[slideIndex - 1].style.display = 'block'
  }

  return (
    <Slide>
      {console.log('render')}
      <section className="carousel">
        <section
          className="arrow-left"
          onClick={() => {
            plusSlides(1)
          }}
        >
          &#10094;
        </section>
        {carasolImages.data.map((item, index) => {
          return <img src={item} alt="image" className="img" key={index} />
        })}

        <section
          className="arrow-right"
          onClick={() => {
            plusSlides(-1)
          }}
        >
          &#10095;
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
