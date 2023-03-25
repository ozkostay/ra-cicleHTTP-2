import React from 'react';
import './Card.css';

export default function Card({item, fnDelete}) {
  return (
    <div className='card'>
      <div className='card-close' onClick={() => fnDelete(item.id)}>&#9747;</div>
      <span>{item.content}</span>
    </div>
  )
}