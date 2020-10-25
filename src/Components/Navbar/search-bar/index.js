import React from 'react'
import { connect } from 'react-redux'
import {
  Input,
  SearchIconWrapper,
  SearchWrapper,
  SearchResultWrapper,
  SearchResult,
} from './styles'
import { FaSearch } from 'react-icons/fa'
import { getProductsSearch } from 'src/store/thunk/search-products'
import ListingsLoader from 'src/Components/common/listings-loader'

const SearchBarComponent = ({ search, getProductsSearch }) => {
  React.useEffect(() => getProductsSearch('test'), [])
  const [open, setOpen] = React.useState(false)
  const renderSearch = () => {
    if (search.loading) {
      return (
        <SearchResult>
          <ListingsLoader size={'30'} />
        </SearchResult>
      )
    }

    if (search.error) {
      return <SearchResult>Error In Search</SearchResult>
    }

    if (!search.data.length) {
      return <SearchResult>No Product</SearchResult>
    }
    return search.data.map((result) => (
      <SearchResult>{result.name}</SearchResult>
    ))
  }
  return (
    <React.Fragment>
      <SearchWrapper>
        <Input open={open} placeholder="Search..." />
        <SearchIconWrapper>
          <FaSearch />
        </SearchIconWrapper>
      </SearchWrapper>
      <SearchResultWrapper>{renderSearch()}</SearchResultWrapper>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({ search: state.search })
const mapDispatchToProps = {
  getProductsSearch,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent)
