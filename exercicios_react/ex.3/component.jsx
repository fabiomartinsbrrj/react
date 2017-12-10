import React from 'react'

export default  props => (
    <h1>Primeiro Componente! {props.value}</h1>
)

export const Segundo = props =>  <h1>Segundo Componente! {props.value}</h1>
 

// export {Primeiro, Segundo}