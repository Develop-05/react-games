import React from 'react';
import { useSelector } from 'react-redux';
import {OrderItem} from '../../components/order-item/order-item';
import { calcTotalPrice } from '../../components/utils';

import './order-page.css';


export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)

    if(items.length < 1) {
        return <h1>ваша корзина пуста</h1>
    }

    return (
        <div className='order-page'>
          <div className="order-page-left">
              {items.map(game => <OrderItem game={game} /> )}
          </div>
          <div className="order-page__right">
              <div className="order-page__total-price">
                  <span className='color-text'>
                    { items.length > 1 ?
                      `${items.length} товаров на сумму ${ calcTotalPrice(items) } грн.`
                      :
                      `${items.length} товар на сумму ${ calcTotalPrice(items) } грн.`
                    }
                  </span>
              </div>
          </div>
        </div>
    );
}