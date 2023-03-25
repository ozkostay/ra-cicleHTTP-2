import React from 'react';
// import uuid from 'react-uuid';
import Reload from './Reload';
import CardList from './CardList';
import InputForm from './InputForm';

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
    this.URL7777 = 'http://localhost:7777/notes/';
  }

  fetchGet() {
    console.log('fetchGet');
    fetch(this.URL7777)
    .then(res => res.json())
    .then(result => {
      this.setState(
        {
          items: result
        }
      );
    })
  }
  
  componentDidMount() {
    this.fetchGet();
  }

  addNote(content) {
    let note = {
          'content': content
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

  deleteNote(id) {
    const requestOptions = {
      method: 'DELETE'
    };
    fetch(this.URL7777 + id, requestOptions)
      .then(response => response.ok)
      .then(resOk => {
        if (resOk) {
          this.fetchGet();
        } else {
          console.error('Не удалось удалить данные');
        }
      })
  }

  render() {
    return (
      <>
        <Reload fetchGet={this.fetchGet.bind(this)}/>
        <CardList items={this.state.items} fnDelete={this.deleteNote.bind(this)}/>
        <InputForm fnAdd={this.addNote.bind(this)}/>
      </>
    )
  }
}