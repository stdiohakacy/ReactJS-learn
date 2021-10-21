import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
    border: 1px solid black;
    width: 240px;
    height: 340px;
    background-color: white;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 90px;
    right: 40px;
    padding: 20px;
    z-index: 5;
`

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

export const EmptyMessageContainer = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
`;