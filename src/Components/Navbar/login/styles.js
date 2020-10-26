import styled from 'styled-components'
import { theme } from 'theme'

export const LoginContainer = styled.div`
  font-size: 15px;
`

export const PreLogin = styled.div`
  padding: 5px 6px;
  border-radius: 5px;
  margin: 3px;
  background-color: #ea4335;
  transition-duration: 200ms;
  border: 1px solid #ea4335;
  &:hover {
    background-color: transparent;
    border: 1px solid white;
  }
`

export const PostLogin = styled.div`
  display: flex;
`

export const ProfileImage = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: red;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }
  &:hover {
    div {
      display: block;
    }
  }
  div {
    display: none;
    position: absolute;
    margin-left: -32px;
    top: 30px;
    border-radius: 10px;
  }
`

export const Wishlist = styled.div`
  position: relative;
  font-size: 30px;
  padding: 0 7px;
`

export const Cart = styled.div`
  position: relative;
  font-size: 30px;
  padding: 0 7px;
`

export const ItemCount = styled.div`
  position: absolute;
  font-size: 10px;
  background-color: ${theme.colors.yellow};
  border-radius: 50%;
  padding: 1px;
  height: 10px;
  width: 10px;
  top: 0;
  margin-top: -2px;
`

export const Options = styled.div`
  background: ${theme.colors.white};
  width: fit-content;
  color: black;
  padding: 5px;
`
