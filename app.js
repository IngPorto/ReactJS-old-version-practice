/**
 * Entry point
 * script de entrada hacia la aplicación
 */
import React from 'react'
import PokeTable from './components/PokeTable'

const pokemons = [
    {number: 1, name: 'Bulbasaur'},
    {number: 2, name: 'Ivysaur'},
    {number: 3, name: 'Venusaur'}
]

React.render(
    <PokeTable pokemons={pokemons} />, 
    document.getElementById("container")
);