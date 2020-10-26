import React from 'react'
import { connect } from 'react-redux'
import {
  LoginContainer,
  PreLogin,
  PostLogin,
  ProfileImage,
  Wishlist,
  Cart,
  ItemCount,
  Options,
} from './styles'
import { GrGoogle } from 'react-icons/gr'
import { BsBookmarkFill } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'

import { logIn, logOut } from 'src/store/thunk/login'

const LoginComponent = ({ auth, logIn, logOut, cart, wishlist }) => {
  return (
    <LoginContainer>
      {!auth.isLoggedIn ? (
        <PreLogin onClick={() => logIn('sauravaggarwal98@gmail.com')}>
          <GrGoogle /> {auth.loading ? 'Signing In..' : 'Log In'}
        </PreLogin>
      ) : (
        <PostLogin>
          <Wishlist>
            <BsBookmarkFill />
            {wishlist.data.length ? <ItemCount /> : null}
          </Wishlist>
          <Cart>
            <FaShoppingCart />
            {cart.data.length ? <ItemCount /> : null}
          </Cart>
          <ProfileImage>
            <img
              src="https://picsum.photos/200"
              onClick={() => console.log('profile')}
              alt="profile"
            />
            <Options onClick={() => logOut()}>Log Out</Options>
          </ProfileImage>
        </PostLogin>
      )}
    </LoginContainer>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  cart: state.cart,
  wishlist: state.wishlist,
})
const mapDispatchToProps = {
  logIn,
  logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
