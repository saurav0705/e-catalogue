import React, { useEffect, useState } from 'react'
import './style.css'

function Img(props) {
  return (
    <img src={this.props.src} alt={props.alt} className={props.className} />
  )
}

export default Img
