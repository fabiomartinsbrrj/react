import React from 'react'

export default props => (
    <nav className="navbar navbar-inverse bg-inverse">
        <div className='container'>
            <div className='navbar-header'>
                <div className='navbar-brand' href='#'>
                    <i className='fa fa-calendar-check-o'/> Todo App
                </div>    
            </div>    
            <div className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href='#/todos'>Tafas</a></li>
                    <li><a href='#/about'>Sobre</a></li>
                </ul>    
            </div>    
        </div>
    
    </nav>
)
//sempre que estiver trabalhando com css colocar className e não class
