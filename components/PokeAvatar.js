/**
 * Componente base de cada personaje
 */
import React from 'react'

class PokeAvatar extends React.Component{
    render(){
        // Función de EC6 para concatenar string con contenido de variables
        var url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
        return <img className="avatar" src={url} />
    }
}

export default PokeAvatar;