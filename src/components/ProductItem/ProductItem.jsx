// // import {
// //     ProductItemSt,
// //     OldProductPriceSt,
// //     ProductImgSt,
// //     ProductTitleSt,
// //     ProductPriceSt,
// //     SpanPriceSt, BtnBoxSt, ItemBoxSt
// // } from './ProductItem.styled.js';
// import productImg from '@/img/product_img.png'
// import BtnAddToBasket from "@/components/Button/BtnAddToBasket";
// import ColorList from "@/components/ColorSquare/ColorList";
//
// export default function ProductItem ({item}) {
//     const {acticle, color, discount, photoUrl, priceUan, id, product} = item;
//     const arrColors = [color];
//     const discountPercent = Math.floor((discount / 10) % 10);
//     const newPrise = Number((priceUan - (priceUan * discountPercent) / 100).toFixed(2));
//
//     return (
//         <>
//             {acticle &&
//                 <li key={id}>
//                     {photoUrl
//                         ? <img
//                             src={photoUrl}
//                             alt={product}
//                         />
//                         : <img
//                             src={productImg}
//                             alt={product || 'Product'}
//                         />}
//
//                     <div>
//                         <h3>{product}</h3>
//                         <ColorList colors={arrColors}/>
//                         {newPrise
//                             ? <>
//                                 <p>{newPrise} грн</p>
//                                 <p>{priceUan} грн</p>
//                             </>
//                             : <p>{priceUan} <span>грн</span></p>}
//                         <button>
//                             <BtnAddToBasket text='До кошика'/>
//                         </button>
//                     </div>
//                 </li>
//             }
//         </>
//     );
// };
//
