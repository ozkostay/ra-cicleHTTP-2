import React, { useState } from 'react';
import './InputForm.css'; 

export default function InputForm({fnAdd}) {
  const [inputText, setInputText] = useState('');

  function fnSend() {
    fnAdd(inputText);
    setInputText('');
  }

  return (
    <div className='input-wrapper'>
      <form className='input-form'>
        <div className='input-title'>New Notes</div>
        <div  className='input-text'>
          <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} name="comment"  cols="55" rows="7"></textarea>
          <div className='input-send' onClick={fnSend}>&#9658;</div> 
        </div>
      </form>
    </div>
  )
}