import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductCard from './components/products/ProductCard';

class App extends Component {

  render() {

      const people = [
          {
              name: "Billy",
              day: "Leif Erikson Day"
          },
          {
              name: "Caleb Potts",
              day: "Thursday"
          }
      ];

      let peopleCards = people.map((person) =>
          <ProductCard name={person.name} day={person.day} />
      );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome boys</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {peopleCards}
      </div>
    );
  }
}

export default App;
