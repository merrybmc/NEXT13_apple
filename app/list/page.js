import Image from 'next/image';
import React from 'react';
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
          <Image src={product.image} className='food-img' />
          <h4>{product.name}</h4>
        </div>
      ))}
    </div>
  );
}
