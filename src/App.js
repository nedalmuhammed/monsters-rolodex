import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      string: 'Here is some of monsters',
      monsters: [],
      searchField: '',
    }
    this.handelChange = this.handelChange.bind(this);
    // this.handelclick2 = this.handelclick1.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  handelChange(e) {
    this.setState({ searchField: e.target.value })
  }
  // handelclick1() { console.log('btn 1 click') }
  // handelclick3 = () => console.log('btn 3 click');
  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="App" >
        {/* <button onClick={this.handelclick1()}>click1</button>
        <button onClick={this.handelclick1}>click2</button>
        <button onClick={this.handelclick2}>click3</button>
        <button onClick={this.handelclick3}>click4</button> */}
        <h1>Monester Rolodex</h1>
        <SearchBox
          placeholder='Search monester'
          handelChange={this.handelChange}
        />
        <CardList name="nedal" monsters={filterdMonsters} />
      </div>
    );
  }
}