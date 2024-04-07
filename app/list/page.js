'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import tomato from '@/public/tomato.png';
import coconut from '@/public/coconut.png';
import pasta from '@/public/pasta.png';

export default function List() {
  // 12버전 페이지 라우터에서는 index.js로 만들어줬어야 했다.

  let products = [
    {
      name: 'Tomatoes',
      image: tomato,
    },
    {
      name: 'Pasta',
      image: coconut,
    },
    {
      name: 'Coconut',
      image: pasta,
    },
  ];

  return (
    <div>
      <h4 className='title'>상품목록</h4>
      {products.map((product, index) => (
        <div className='food' key={index}>
          <Product image={product.image} name={product.name} />
        </div>
      ))}
    </div>
  );
}

export const Product = ({ image, name }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Image src={image} className='food-img' />
      <h4>{name}</h4>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};
