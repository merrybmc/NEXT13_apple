'use client';
import React from 'react';
import * as data from './data';

export default function Cart() {
  let cartProducts = ['Tomatoes', 'Pasta'];
  return (
    <div>
      <h4 className='title'>Cart {data.name}</h4>
      <CartItem item={cartProducts[0]} />
      <CartItem item={cartProducts[1]} />
    </div>
  );
}

function CartItem({ item }) {
  return (
    <div className='cart-item'>
      <p>{item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
