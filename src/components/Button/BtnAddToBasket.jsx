import {SlBasket} from 'react-icons/Sl';

// import {BtnAddToBasketSt} from "./Button.styled.js";


export default function BtnAddToBasket  ({text}) {
    return(
        <button type="submit"><SlBasket
            style={{marginRight: '8px', width: '16px'}}/>{text}</button>
    )
}

