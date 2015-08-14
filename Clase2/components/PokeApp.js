/*
 * Module Dependencies
 */

import React from 'react';
import uid from 'uid';

import PokeTable from './PokeTable';
import PokeChat from './PokeChat';

export default class PokeApp extends React.Component {
  constructor(props){
    super(props);
    this.state = { messages: [] };
  }

  onGrowl(name) {
    let text = `${name}, ${name}!`;

    let message = { id: uid() , text, text};

    this.state.messages.push(message);
    let messages = this.state.messages;
    this.setState({ messages: messages });
  }

  render() {
    let pokemons = [
      { number: 1, name:"Bulbasaur" },
      { number: 2, name:"Ivysaur" },
      { number: 3, name:"Venasaur" }
    ];

    return <div className="pokeapp">
      <PokeTable pokemons={pokemons} onGrowl={ this.onGrowl.bind(this) } />
      <PokeChat messages={this.state.messages}/>
    </div>
  }
};