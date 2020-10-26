import styled from 'styled-components'
import { theme } from 'theme'

export const Input = styled.input`
  outline: none;
  border-radius: 4px;
  padding: 9px;
  box-sizing: border-box;
  background-color: ${theme.colors.offWhite};
  transition-duration: 200ms;
  ::placeholder {
    color: white;
  }
  &:focus {
    background-color: ${theme.colors.white};
  }
`

export const SearchIconWrapper = styled.div`
  transform: translateY(18%);
  display: inline-block;
  padding: 5px;
`
export const SearchWrapper = styled.div`
  position: relative;
`

export const SearchResultWrapper = styled.div`
  position: absolute;
  background-color: ${theme.colors.white};
  margin-left: 2px;
  width: 163px;
  color: grey;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-height: 300px;
  overflow-y: scroll;
  display: ${(props) => (props.show ? 'block' : 'none')};
`
export const SearchResult = styled.div`
  width: 150px;
  color: grey;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 2px 5px;
  font-size: 15px;

  &:hover {
    color: black;
  }
`
export const SearchContainer = styled.div``
