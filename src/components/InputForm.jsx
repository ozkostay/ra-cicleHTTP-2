import React from 'react';
import './InputForm.css'; 

export default function InputForm() {
  return (
    <div className='input-wrapper'>
      <form className='input-form'>
        <div className='input-title'>New Notes</div>
        <div  className='input-text'>
          <textarea  name="comment"  cols="55" rows="7"></textarea>
          <div className='input-send'>&#9658;</div> 
        </div>
        
      </form>
      
    </div>
  )
}