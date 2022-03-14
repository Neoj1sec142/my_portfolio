import React from 'react'

function Button(props){
    console.log(props)
      

    return <button id='click' onClick={props.sayHello}> {props.text} </button>

}
export default Button