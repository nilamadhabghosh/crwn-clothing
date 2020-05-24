import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.action';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from './header.styles';
import { ReactComponent as Logo } from '../../assests/crown.svg';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionContainer>
      <OptionLink to='/shop'>Shop</OptionLink>
      <OptionLink to='/contact'>Contact</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// State is the Root Reducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
