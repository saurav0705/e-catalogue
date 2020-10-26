import React from 'react'
import { connect } from 'react-redux'
import {
  Input,
  SearchIconWrapper,
  SearchWrapper,
  SearchResultWrapper,
  SearchResult,
  SearchContainer,
} from './styles'
import { FaSearch } from 'react-icons/fa'
import { getProductsSearch } from 'src/store/thunk/search-products'
import ListingsLoader from 'src/Components/common/listings-loader'
import { debounce } from 'src/utils'

const SearchBarComponent = ({ results, getProductsSearch }) => {
  const [open, setOpen] = React.useState(false)
  const renderSearch = () => {
    if (results.loading) {
      return (
        <SearchResult>
          <ListingsLoader size={'30'} />
        </SearchResult>
      )
    }

    if (results.error) {
      return <SearchResult>Error In Search</SearchResult>
    }

    if (results.clear) {
      return
    }

    if (!results.data.length) {
      return <SearchResult>No Product</SearchResult>
    }

    return results.data.map((result, index) => (
      <SearchResult key={`search-result-${index}`}>{result.name}</SearchResult>
    ))
  }

  const handleKeyPress = (event) => {
    debounce(() => getProductsSearch(event.target.value), 1000)()
  }

  return (
    <SearchContainer
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <SearchWrapper>
        <Input placeholder="Search..." onChange={(e) => handleKeyPress(e)} />
      </SearchWrapper>
      <SearchResultWrapper show={open}>{renderSearch()}</SearchResultWrapper>
    </SearchContainer>
  )
}

const mapStateToProps = (state) => ({ results: state.search })
const mapDispatchToProps = {
  getProductsSearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent)
