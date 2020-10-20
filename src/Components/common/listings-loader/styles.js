import styled from 'styled-components'
import { theme } from 'theme'
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
