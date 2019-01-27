/**
 * Componente que integra un personaje y su nombre en un 
 * list item
 */
import React from 'react'
import PokeAvatar from './PokeAvatar'

class PokeRow extends React.Component{
    render(){
        return <li className="pokerow">
            <PokeAvatar number={this.props.number}/>
            {this.props.name}
        </li>
    }
}

export default PokeRow;