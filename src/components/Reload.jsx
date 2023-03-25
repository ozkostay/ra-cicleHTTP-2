import React from 'react';
import './Reload.css'; 

export default function Reload({fetchGet}) {
  return (
    <div className='reload-wrapper'>
      <h2 className='reload-title'>Notes</h2>
      <div className='reload-icon' onClick={fetchGet}></div>
    </div>
  )
}