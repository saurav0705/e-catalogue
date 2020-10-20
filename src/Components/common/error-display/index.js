import React from 'react'
import {
  ErrorDisplayIcon,
  ErrorDisplayMessage,
  ErrorDisplayWrapper,
} from './styles'
import { BiMessageAltError } from 'react-icons/bi'
const ErrorDisplayComponent = ({ error }) => {
  return (
    <ErrorDisplayWrapper>
      <ErrorDisplayIcon>
        <BiMessageAltError />
      </ErrorDisplayIcon>
      <ErrorDisplayMessage>
        {error ? error : 'Something Wrong Happened!'}
      </ErrorDisplayMessage>
    </ErrorDisplayWrapper>
  )
}

export default ErrorDisplayComponent
