/**
 * 
 */
import React, {Component} from 'react'
import PokeMessage from './PokeMessage'

class PokeChat extends Component{
    render(){
        return <ul>
            {
                this.props.messages.map(message =>{
                    return <PokeMessage message={message} />
                })
            }
        </ul>
    }
}

export default PokeChat;