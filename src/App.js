import React from 'react';
// import uuid from 'react-uuid';
import './App.css';
import CardList from './components/CardList';
import Reload from './components/Reload';
import InputForm from './components/InputForm';


function App() {
  


  return (
    <div className='App'>
      <Reload />
      <CardList />
      <InputForm />
    </div>
  );
}

export default App;

