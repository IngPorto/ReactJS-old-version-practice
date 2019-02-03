/**
 * Componente que integra un personaje y su nombre en un 
 * list item
 */
import React from 'react'
import PokeAvatar from './PokeAvatar'

class PokeRow extends React.Component{
    // Manejo de eventos, con la siguiente función suelta
    onClick(eve){
        // Se usa call para forzar ya ejecución pasando un contexto
        //this.props.growl.call(null, this.props.name)
        this.props.growl(this.props.name)
    }

    render(){
        return <li 
        className="pokerow" 
        onClick={this.onClick.bind(this)}>
            <PokeAvatar number={this.props.number}/>
            {this.props.name}
        </li>
    }
}

export default PokeRow;