import React, { useState } from 'react';

export default function AddForm({fnAdd}) {
  const [name, setName] = useState('');
  const [shift, setShift] = useState('');

  const onClickButton = (event) => {
    event.preventDefault();
    fnAdd(name, shift);
    setName('');
    setShift('');
  }

  const onShift = (e) => {
    const eTest = e.target.value;
    if ((Number(eTest) > -13) && (Number(eTest) < 13)) {
      setShift(e.target.value);
    } else if (eTest === '-' || eTest === '+') {
      setShift(e.target.value); 
    } else {
      alert('Неверный часовой пояс!');
    }
    
  }

  return <>
    <form>
      <input placeholder='Наиманование' value={name} onChange={(e) => setName(e.target.value)}></input>
      <input placeholder='+5' value={shift} onChange={(e) => onShift(e)}></input>
      <button onClick={onClickButton}>Добавить</button>
    </form>
  </>
}
