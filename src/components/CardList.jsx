import Reack from 'react';
import './CardList.css';
import Card from './Card';

export default function CardList() {
  return (
    <div className='cardlist-wrapper'>
      <Card />
      <Card />
      <Card />
    </div>
  )
}