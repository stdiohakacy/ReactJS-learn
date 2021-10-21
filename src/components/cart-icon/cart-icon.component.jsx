import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { CartIconContainer, ItemCountContainer, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     itemCount: cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
// })

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)