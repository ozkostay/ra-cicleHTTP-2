import React from "react"

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
          "id": 0,
          "content": "То, что было введено в поле ввода 3"
        }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    };
    fetch(this.URL7777, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('data2', data);
          console.log('В addNote перед вызовом this.fetchGet()');
          this.fetchGet();
        });
  }

  deleteNote() {

  }

  render() {
    return (
      <>
        <button onClick={() => this.addNote('Какие-то параметры')}>addNote</button>
        <div>
          {this.state.items.map((item) =>  <p key={item.id}> {item.name} === {item.content}</p>)}
        </div>
      </>
    )
  }
}