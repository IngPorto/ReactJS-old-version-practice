/**
 * Componente que integra un personaje y su nombre en un 
 * list item
 */
import React from 'react'
import PokeAvatar from './PokeAvatar'

class PokeRow extends React.Component{
    // Manejo de eventos, con la siguiente función suelta
    onClick(event){
        alert(this.props.name)
    }

    render(){
        return <li className="pokerow" onClick={this.onClick.bind(this)}>
            <PokeAvatar number={this.props.number}/>
            {this.props.name}
        </li>
    }
}

export default PokeRow;