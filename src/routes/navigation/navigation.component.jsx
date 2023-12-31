import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles.jsx'
const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                    {
                        currentUser ? (<NavLink as='span' onClick={signOutUser} className="nav-link">Sign Out</NavLink>)
                    : (
                    <NavLink to='/auth'>
                        Sign In
                    </NavLink>
                    )
                    }
                    <NavLink>
                        <CartIcon />
                    </NavLink>

                </NavLinks>
                {
                    isCartOpen && <CartDropdown />
                }
            </NavigationContainer>

            <Outlet />
        </Fragment>

    );
}

export default Navigation;