import styled, { keyframes } from 'styled-components'
import { theme } from 'theme'

export const ErrorDisplayWrapper = styled.div`
  max-width: 400px;
  margin: auto;
  text-align: center;
  margin-top: 30px;
`
export const ErrorDisplayIcon = styled.div`
  font-size: 5.5rem;
  color: ${theme.colors.red};
`

export const ErrorDisplayMessage = styled.div`
  font-size: 2.5rem;
  color: ${theme.colors.offWhite};
  text-transform: capitalize;
`
export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 3em 2em;
  margin: 20px auto;
  justify-content: space-around;
`

export const GridWrapper = styled.div``

export const GridHeading = styled.div`
  font-size: 2em;
  color: white;
  margin: 30px;
  padding: 5px 0px;
  border-bottom: 2px solid ${theme.colors.offWhite};
  text-transform: capitalize;
`

export const ImageLoaderContainer = styled.div`
  height: 200px;
  width: fit-content;
  margin: auto;
  margin-top: 40%;
  transform: translateY(-50%);
`

export const ListingsLoaderWrapper = styled.div`
  border: ${(props) => (props.size ? `${props.size / 5}px` : '16px')} solid
    ${theme.colors.offWhite};
  border-top: ${(props) => (props.size ? `${props.size / 5}px` : '16px')} solid
    ${theme.colors.blue};
  border-radius: 50%;
  width: ${(props) => (props.size ? `${props.size}px` : '120px')};
  height: ${(props) => (props.size ? `${props.size}px` : '120px')};
  animation: spin 2s linear infinite;
  margin: auto;
  margin-top: 10px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const CardContainer = styled.div`
  ${(props) => props.filled}
  background-color: ${theme.background};
  width: 320px;
  color: ${theme.text};
  border-radius: 15px;
  margin: auto;
  overflow: hidden;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }
`
export const LabelContainer = styled.div`
  text-align: center;
  margin-top: 5px;
  font-size: clamp(1rem, 1.5rem, 2rem);
  text-transform: capitalize;
  padding: 8px;
  height: 80px;
`

export const ActionContainer = styled.div`
  display: flex;
  margin: 10px 20px;
`
export const WishListButton = styled.div`
  ${(props) => props.filled}
  background-color:${(props) =>
    props.wishlisted === true ? theme.colors.yellow : theme.colors.white};
  clip-path: polygon(1% 99%, 1% 0%, 99% 0%, 100% 99%, 52% 64%);
  height: 30px;
  width: 20px;
  cursor: pointer;
`
export const BuyActionContainer = styled.div`
  margin-left: auto;
  display: flex;
`

export const ActionButton = styled.div`
  ${(props) => props.filled}
  text-align:center;
  color: white;
  background-color: ${(props) =>
    props.background ? props.background : theme.colors.yellow};
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: uppercase;
  margin: ${(props) => (props.margin ? props.margin : '0 3px')};
  cursor: pointer;
  width: fit-content;
`
export const ReachedBottom = styled.div`
  ${(props) => props.filled}
  height: 20px;
`

const CarasolNavigators = styled.div`
  height: 30px;
  width: 30px;
  background-color: gray;
  position: absolute;
  top: 40%;
  z-index: 2;
  opacity: 0.6;
  margin: 4px;
  transition-duration: 500ms;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`
export const CarasolNavigatorsLeft = styled(CarasolNavigators)`
  clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  left: 0;
`
export const CarasolNavigatorsRight = styled(CarasolNavigators)`
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  right: 0;
`

export const CarasolWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export const CarasolContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    animation-name: ${() => animate};
    animation-duration: 1s;
  }
`

export const CarasolContainer = styled.div`
  height: ${(props) => props.height || '400px'};
  width: ${(props) => props.width || '100%'};
`

export const ImageLoader = styled.div`
  height: 20%;
  width: 20%;
  background-color: pink;
  opacity: 0.5;
  clip-path: polygon(
    50% 0%,
    90% 20%,
    100% 60%,
    75% 100%,
    25% 100%,
    0% 60%,
    10% 20%
  );
  position: absolute;
  top: 35%;
  left: 40%;
  transform: translate(-50%, -50%);
  transform-origin: center;
  animation-name: ${() => rotate()};
  animation-iteration-count: infinite;
  animation-duration: 1s;
`
const rotate = () => keyframes`
  from {
    transform: rotate(0deg);
    
  }
  to {
    transform: rotate(360deg);
   
  }
`
const animate = keyframes`{
  from {
    opacity: 0.1;
  }
  to {
    opacity: 2;
  }
  0% {
    transform: translateX(200px);
  }
  0% {
    display: block;
  }
  100% {
    display: block;
  }
}`
