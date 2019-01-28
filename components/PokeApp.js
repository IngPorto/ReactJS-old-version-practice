/**
 * 
 */
import React, {Component} from 'react'
import PokeTable from './PokeTable'
import PokeChat from './PokeChat'

class PokeApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages: [{text: "Chat en línea:"}]
        }
        // Realizo un bind desde la instanciación del componente
        // para mandarle el contexto de esta clase 
        // a las clases que vayan a ejecutar la función onGrowl y 
        // quieran modificar el estado. Si no lo hiciera, cuando 
        // ejecuten los otros componentes la función onGrowl van a 
        // interpretar el this como sus propios contextos. Haciendo 
        // lo siguiente, quemo el contecto de esta clase a la función.
        this.onGrowl = this.onGrowl.bind(this)
    }

    onGrowl(name){
        let text = `${name.slice(0,3)}, ${name}!`
        //let messages = this.state.messages.push({ text: text })
        this.state.messages.push({ text: text })
        this.setState({
            messages: this.state.messages
        })
    }

    render(){
        const pokemons = [
            {number: 1, name: 'Bulbasaur'},
            {number: 2, name: 'Ivysaur'},
            {number: 3, name: 'Venusaur'}
        ]
        return <div className="pokeapp">
            <PokeTable 
                pokemons={pokemons} 
                onGrowl={this.onGrowl} 
            />
            <PokeChat 
                messages={this.state.messages}
            />
        </div>
    }
}

export default PokeApp;

