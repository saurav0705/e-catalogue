import React, { useState } from 'react'
import {
  NavbarWrapper,
  NavbarTile,
  NavbarTileSubMenu,
  NavbarTileSubMenuTile,
} from './styles'
import SearchBarComponent from './search-bar'
import { config } from './config'
const NavbarComponent = () => {
  const [display, setDisplay] = useState({})

  const getActions = (obj) => {
    if (obj.child) {
      return () => setDisplay({ ...display, [obj.label]: !display[obj.label] })
    }
    return undefined
  }

  const getActionsOnClick = (obj) => {
    if (!obj.redirect) {
      return undefined
    }

    return () => {
      console.log(obj.redirect)
    }
  }

  const getTile = (obj) => {
    switch (obj.label.toLowerCase()) {
      case 'search':
        return <SearchBarComponent />
      default:
        return (
          <React.Fragment>
            <div onClick={getActionsOnClick(obj)}>{obj.label}</div>
            {obj.child ? (
              <NavbarTileSubMenu display={display[obj.label]}>
                {obj.child.map((child) => (
                  <NavbarTileSubMenuTile
                    key={`${obj.label}-${child.label}`}
                    onClick={() => console.log(child.redirect)}
                  >
                    {child.label}
                  </NavbarTileSubMenuTile>
                ))}
              </NavbarTileSubMenu>
            ) : null}
          </React.Fragment>
        )
    }
  }
  return (
    <NavbarWrapper>
      {config.map((obj, index) => (
        <NavbarTile
          key={`navbar-${index}`}
          label={obj.label.toLowerCase()}
          onMouseEnter={getActions(obj)}
          onMouseLeave={getActions(obj)}
        >
          {getTile(obj)}
        </NavbarTile>
      ))}
    </NavbarWrapper>
  )
}

export default NavbarComponent
