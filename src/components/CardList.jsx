import React from 'react';
import './CardList.css';
import Card from './Card';

export default function CardList({items, fnDelete}) {
  return (
    <div className='cardlist-wrapper'>
      {items.map((i) => <Card key={i.id} item={i} fnDelete={fnDelete}/>)}
    </div>
  )
}