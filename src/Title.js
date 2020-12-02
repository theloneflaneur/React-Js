import React, { Component } from 'react';




/*implemmenting title as a stateless function*/

function Title(props){
    return <h1> {props.title}</h1>
}

/* Using classes */


/*
class Title extends Component{
    render(){
        return <h1> {this.props.title} </h1> 
    }
}
*/

export default Title