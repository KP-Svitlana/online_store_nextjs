import {SlBasket} from 'react-icons/Sl';
import {BtnAddToBasketSt} from "@/components/Button/Button.styled";



export default function BtnAddToBasket({text}) {
    return (
        <BtnAddToBasketSt type="submit">
            <SlBasket style={{marginRight: '8px', width: '16px'}}/>
            {text}
        </BtnAddToBasketSt>
    )
}
