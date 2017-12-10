import React from 'react'

export default props => (
    <header className='page-header' >
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
)
//sempre que estiver trabalhando com css colocar className e não class
