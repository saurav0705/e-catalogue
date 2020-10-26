import styled from 'styled-components'
import { theme } from 'theme'

const resolution = '970px'

export const NavbarWrapper = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  top: 0;
  color: ${theme.colors.white};
  text-align: center;
  width: 100%;
  font-size: 22px;
  border-bottom: 1px solid white;

  @media (max-width: ${resolution}) {
    display: block;
  }
`

export const NavbarTile = styled.div`
  padding: ${(props) =>
    props.label === 'search' || props.label === 'login' ? '0' : '15px 15px'};
  cursor: pointer;
  transition-duration: 200ms;
  position: relative;
  margin-left: ${(props) => (props.label === 'search' ? 'auto' : '0')};
  &:hover {
    background-color: ${(props) =>
      props.label === 'search' || props.label === 'login'
        ? null
        : theme.secondary};
  }
  @media (max-width: ${resolution}) {
    display: ${(props) =>
      props.label === 'search' || props.label === 'login' ? 'none' : 'block'};
  }
`

export const NavbarTileSubMenu = styled.div`
  position: absolute;
  z-index: 6;
  width: fit-content;
  whitespace: no-wrap;
  text-align: left;
  margin-top: 16px;
  margin-left: -14px;
  white-space: nowrap;
  background-color: ${theme.background};
  border-radius: 5px;
  overflow: hidden;
  display: ${(props) => (props.display ? 'block' : 'none')};
  @media (max-width: ${resolution}) {
    position: relative;
    width: 100%;
    text-align: center;
    margin: 0;
    display: none !important;
  }
`

export const NavbarTileSubMenuTile = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  &:hover {
    background-color: ${theme.secondary};
  }
`
