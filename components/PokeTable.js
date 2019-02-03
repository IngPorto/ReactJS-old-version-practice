/**
 * Componente que agrupa las filas o list-item con el 
 * personaje y su nombre
 */
import React from 'react'
import PokeRow from './PokeRow'

class PokeTable extends React.Component{
    render(){
        return <ul className="poketable">
            {   
                // Se añade el key para amarrar al componente a una posición dentro de la lista (html), para
                // que en caso de faltar o ser removido un dato de la lista (js) no se reposicione en la lista (html)
                this.props.pokemons.map((pokemon) => {
                    return <PokeRow 
                            key={pokemon.number} 
                            name= {pokemon.name} 
                            number= {pokemon.number}
                            growl={this.props.onGrowl}
                        />
                })
            }
        </ul>
    }
}

export default PokeTable;