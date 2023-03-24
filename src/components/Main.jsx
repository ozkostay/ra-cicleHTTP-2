import React from 'react';
// import uuid from 'react-uuid';
import Reload from './Reload';
import CardList from './CardList';
import InputForm from './InputForm';

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [1,2,3]
    }
    this.URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
    this.URL7777 = 'http://localhost:7777/notes';
  }

  fetchGet() {
    fetch(this.URL7777)
    .then(res => res.json())
    .then(result => {
      console.log('Данные из запроса', result);
      this.setState(
        {
          items: result
        }
      );
    })
  }
  
  componentDidMount() {
    this.fetchGet();
    console.log('1', this.state.items);
  }

  addNote(prm) {
    console.log('Добавляем данные:', prm);
    let note = {
          'content': "То, что было введено в поле ввода 3"
        }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    };
    fetch(this.URL7777, requestOptions)
      .then(response => response.ok)
      .then(resOk => {
        if (resOk) {
          this.fetchGet();
        } else {
          console.error('Не удалось вставить данные');
        }
      })
  }

  deleteNote(prm) {
    console.log('Удаляем данные:', prm);
    // const requestOptions = {
    //   method: 'DELETE',
    // };
    // fetch(this.URL7777, requestOptions)
    //   .then(response => response.ok)
    //   .then(resOk => {
    //     if (resOk) {
    //       this.fetchGet();
    //     } else {
    //       console.error('Не удалось вставить данные');
    //     }
    //   })
  }

  render() {
    return (
      <>
        {/* <button onClick={() => this.addNote('Какие-то параметры')}>addNote</button> */}
        <Reload />
        <CardList />
        <InputForm />
        <div>
          {this.state.items.map((item) =>  <div key={item.id}>id={item.id} content: {item.content}</div>)}
        </div>
      </>
    )
  }
}