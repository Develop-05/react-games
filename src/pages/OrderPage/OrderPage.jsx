import {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {OrderItem} from '../../components/OrderItem/OrderItem';
import { calcTotalPrice } from '../../components/utils';

import './OrderPage.css';


export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)

    if(items.length < 1) {
        return <h1>You don't have any games in your cart :(</h1>
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
                      `${items.length} cost of games ${ calcTotalPrice(items) } $`
                      :
                      `${items.length} cost of game ${ calcTotalPrice(items) } $`
                    }
                  </span>
              </div>
          </div>
        </div>
    );
}