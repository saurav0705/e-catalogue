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
