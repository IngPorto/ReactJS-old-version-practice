/**
 * 
 */
import React, {Component} from 'react'

class PokeMessage extends Component{
    render(){
        return <li className="pokemessage">
            {
                this.props.message.text
            }
        </li>
    }
}

export default PokeMessage;