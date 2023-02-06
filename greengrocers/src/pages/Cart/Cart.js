import React from 'react';
import "./Cart.scss";
import { useState } from 'react';
import CartComponent from '../../components/Cart.component';

const Cart = () => {
    const path = '../../assets/'
    const json = [
        {
            "productId": "5",
            "productName": "asparagus",
            "productQuantity": "3",
            "productPath": "asparagus.jpg",
            "productPrice": "2"
        },
        {
            "productId": "6",
            "productName": "pineapple",
            "productQuantity": "2",
            "productPath": "pineapple.jpg",
            "productPrice": "7"
        }
    ]

    const [products, setProducts] = useState(json);

    const deleteClick = function (id) {
        const ind = products.findIndex((obj) => obj.productId == id);
        setProducts((prev) => {
            const newProducts = [...prev];
            newProducts.splice(ind, 1);
            return newProducts;
        });
    }

    return (
        <div className='cart__wrapper'>
            <table className='cart'>
                <thead>
                    <tr>
                        <th className='cart__delete'></th>
                        <th className='cart__photocolum'></th>
                        <th className='cart__productcolum'>Product</th>
                        <th className='cart__pricecolumn'>Price</th>
                        <th className='cart__weightcolumn'>Weight</th>
                        <th className='cart__fullpricecolum'>Full price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <CartComponent
                            key={p.productId}
                            id={p.productId}
                            path={path + p.productPath}
                            name={p.productName}
                            deleteClick={deleteClick}
                            price={p.productPrice}
                            weight={p.productQuantity} />
                    ))}
                    {/* <tr>
                        <td><img className='cart__delete' onClick={() => deleteClick()} src={delete_icon}></img></td>
                        <td className='cart__photo'><img src={strawberry}></img></td>
                        <td className='cart__product'>Strawberry</td>
                        <td className='cart__price'>5</td>
                        <td className='cart__weight'><input className='dupa' type="number" min="0.1" step="0.1"></input></td>
                        <td className='cart__fullprice'>6</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;