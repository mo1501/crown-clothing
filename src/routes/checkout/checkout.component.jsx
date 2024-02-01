import './checkout.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import { UserContext } from '../../contexts/user.context';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    const {currentUser} = useContext(UserContext);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>

            </div>


            {
                cartItems.map((cartItem) => {
                    return (<CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                })
            }
            <span className='total'>Total : ${cartTotal}</span>
            <PaymentForm total={cartTotal} user={currentUser}/>
        </div>
    );
}
export default Checkout;