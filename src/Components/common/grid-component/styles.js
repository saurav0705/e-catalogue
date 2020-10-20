import styled from 'styled-components'
export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 3em 2em;
  margin: 20px auto;
`

export const GridWrapper = styled.div``

export const GridHeading = styled.div`
  font-size: 2em;
  color: white;
  margin: 30px;
  padding: 5px 0px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  text-transform: capitalize;
`
