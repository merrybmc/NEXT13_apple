import React from 'react';

export default function Cartlayout({ children }) {
  return (
    <div>
      <p>현대카드 무이자 이벤트중</p>
      {children}
    </div>
  );
}
