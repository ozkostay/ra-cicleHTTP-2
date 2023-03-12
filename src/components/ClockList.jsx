import React from 'react';
import Clock from './Clock';

export default function ClickList({arrZones, fnDelete, tempDel}) {
  console.log('in ClockList ', arrZones);
  return <>
    {arrZones.map((item) => <Clock key={item.id} item={item} fnDelete={fnDelete} tempDel={tempDel}/>)}
  </>
}