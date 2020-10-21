import styled from 'styled-components'
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
  border: 16px solid ${theme.colors.offWhite};
  border-top: 16px solid ${theme.colors.blue};
  border-radius: 50%;
  width: 120px;
  height: 120px;
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
