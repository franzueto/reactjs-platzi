/*
 * Module dependencies
 */

import pokemons from './pokemons'

export default {
  pokemons: {
    find: function (callback) {
      setTimeout(function() {
        callback(pokemons);
      }, 3000);
    }
  }
}