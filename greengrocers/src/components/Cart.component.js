import React from 'react';
import delete_icon from '../assets/delete.png';
import {useState} from 'react';

const CartComponent = (props) => {
    const path = props.path;
    const deleteClick = props.deleteClick;
    const name = props.name;
    const price = Number(props.price);
    const weight = Number(props.weight);
    const id = Number(props.id);
    const [fullprice, setFullprice] = useState(price * weight);
    const changePrice = function(event){
        setFullprice(Math.round(event.target.value * price * 100) / 100);
    }
    return (
        <tr>
            <td><img className='cart__delete' onClick={() => deleteClick(id)} src={delete_icon}></img></td>
            <td className='cart__photo'><img src={path}></img></td>
            <td className='cart__product'>{name}</td>
            <td className='cart__price'>{price}</td>
            <td className='cart__weight'>
                <input className='cart__weight__input' onChange={changePrice} type="number" defaultValue={weight} min="0.1" step="0.1">
                </input>
            </td>
            <td className='cart__fullprice'>{fullprice}</td>
        </tr>
    );
};

export default CartComponent;