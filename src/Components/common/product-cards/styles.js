import styled from 'styled-components'
import { theme } from 'theme'
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
  font-size: 1.5em;
  text-transform: capitalize;
  padding: 8px;
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
  text-align-center;
  color: white;
  background-color: ${(props) =>
    props.background ? props.background : theme.colors.yellow};
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 0 3px;
  cursor: pointer;
`
