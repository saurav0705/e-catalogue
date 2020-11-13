import react from 'React'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'

export const SliderContainer = styled.div`
  transform: translateX(-${props.translate}px);
  transition: transform ease-out ${props.transition}s;
  height: 90%;
  width: ${props.width}px;
  display: flex;
  background: red;
`
