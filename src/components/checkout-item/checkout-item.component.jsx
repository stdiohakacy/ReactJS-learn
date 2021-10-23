import React from "react";
import { connect } from "react-redux";
import { addItem, clearItemFromCart, removeItem } from "../../redux/cart/cart.actions";
import { CheckoutItemContainer, ImageContainer, TextContainer } from "./checkout-item.styles";
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img alt="item" src={imageUrl} />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <TextContainer>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)} >&#10095;</div>
            </TextContainer>
            <TextContainer>{price}</TextContainer>
            <span className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</span>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);