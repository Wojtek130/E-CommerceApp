import React from 'react';
import "./Cart.scss";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CartComponent from '../../components/Cart.component';

const Cart = () => {
    const navigate = useNavigate();
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
    // const [prc, setPrc] = useState(0);

    const deleteClick = function (id) {
        const ind = products.findIndex((obj) => obj.productId == id);
        setProducts((prev) => {
            const newProducts = [...prev];
            newProducts.splice(ind, 1);
            return newProducts;
        });
    }

    const order = function () {
        alert("Successful order!");
        navigate("/login");
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
                            weight={p.productQuantity}
                        />
                    ))}
                </tbody>
            </table>
            {/* <p>{prc}</p> */}
            <button className='btn order' onClick={order}>ORDER</button>
        </div>
    );
};

export default Cart;